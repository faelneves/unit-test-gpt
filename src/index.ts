import "dotenv/config.js";
import OpenAI from 'openai';
import fs from 'fs';
import { exec } from 'child_process';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const resultPath = process.env.CSV_PATH;

const getFileContent = (filepath: string): { filepath: string, fileContents: string } => {
  const fileContents = fs.readFileSync(filepath, 'utf8');
  return { filepath, fileContents };
};

const createFile = (filepath: string, content: string): void => {
  fs.writeFileSync(filepath, content);
}

const getCodeFromMessage = (message: string): string[] => {
  const codePattern = /```([\s\S]*?)```/g;
  const codes = [];
  let correspondence;
  while ((correspondence = codePattern.exec(message)) !== null) {
    codes.push(correspondence[1]);
  }
  return codes;
}

function addTestOnPath(originalPath: string): string {
  const extension = originalPath.slice(originalPath.lastIndexOf('.'));
  const pathWithoutExtensao = originalPath.replace(extension, '');

  return `${pathWithoutExtensao}.test${extension}`;
}

function appendLineToCSV(fileName: string, passed: string, failed: string): void {
  const line = `${fileName},${passed},${failed}\n`;

  if (fs.existsSync(resultPath)) {
    fs.appendFileSync(resultPath, line);
  } else {
    const header = 'Arquivo,Passou,Falhou\n';
    fs.writeFileSync(resultPath, header);
    fs.appendFileSync(resultPath, line);
  }
}

function analyzeTests(testResult: string) {
  const regexFail = /Tests: +(\d+) failed, (\d+) total/;
  const regexPass = /Tests: +(\d+) passed, (\d+) total/;
  const regexFailPass = /Tests: +(\d+) failed, (\d+) passed, (\d+) total/;
  let failed = 0;
  let passed = 0;

  const matchFail = testResult.match(regexFail);
  const matchPass = testResult.match(regexPass);
  const matchFailPass = testResult.match(regexFailPass);

  if (matchFail) [failed,] = matchFail.slice(1).map(Number);
  if (matchPass) [passed,] = matchPass.slice(1).map(Number);
  if (matchFailPass) [failed, passed,] = matchFailPass.slice(1).map(Number);

  return { passed, failed };
}

function runTests(filePath: string) {
  exec(`npm run test -- ${filePath}`, (error, _stdout, stderr) => {
    console.log(stderr);
    let arrayPath = filePath.split('/');
    const [filename] = arrayPath.at(-1).split('.');
    arrayPath.pop();
    const { passed, failed } = analyzeTests(stderr);
    appendLineToCSV(filename, passed.toString(), failed.toString())
    createFile(`${arrayPath.join('/')}/${filename}.result.txt`, stderr);
  })
}

async function handle(filePath: string) {
  const filename = filePath.split('/').at(-1);
  const response = await openai.chat.completions.create({
    model: process.env.MODEL as string,
    messages: [{ "role": "system", "content": getFileContent('./inputs/tests_v1.txt').fileContents },
    { "role": "user", "content": `file path: ./${filename}` },
    { "role": "user", "content": getFileContent(filePath).fileContents }],
  });
  const testFilePath = addTestOnPath(filePath);
  const codeFromMessage = getCodeFromMessage(response.choices[0].message.content)[0].split('\n');
  codeFromMessage.shift();
  createFile(testFilePath, codeFromMessage.join('\n'));
  runTests(testFilePath);
}

(async () => {
  // await handle('./projects/lodash/.internal/addMapEntry.ts');
  const handlePromisses = [];
  for (let index = 2; index < process.argv.length; index++) {
    //console.log(process.argv[index]);
    handlePromisses.push(handle(process.argv[index]));
  }
  await Promise.all(handlePromisses);
})()
