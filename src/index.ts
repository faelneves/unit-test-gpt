import "dotenv/config.js";
import OpenAI from 'openai';
import fs from 'fs';
import { exec } from 'child_process';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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

function runTests(filePath: string) {
  exec(`npm run test -- ${filePath}`, (error, _stdout, stderr) => {
    console.log(stderr);
    let arrayPath = filePath.split('/');
    const [filename] = arrayPath.at(-1).split('.');
    arrayPath.pop();
    console.log(`stderr: ${stderr}`);
    createFile(`${arrayPath.join('/')}/${filename}.result.txt`, stderr);
  })
}

async function handle(filePath: string) {
  const response = await openai.chat.completions.create({
    model: process.env.MODEL as string,
    messages: [{ "role": "system", "content": getFileContent('./inputs/tests_v1.txt').fileContents },
    { "role": "user", "content": `file path: ${filePath}` },
    { "role": "user", "content": getFileContent(filePath).fileContents }],
  });
  const testFilePath = addTestOnPath(filePath);
  const codeFromMessage = getCodeFromMessage(response.choices[0].message.content)[0].split('\n');
  codeFromMessage.shift();
  createFile(testFilePath, codeFromMessage.join('\n'));
  runTests(testFilePath);
}

(async () => {
  await handle('./project/example.js');
})()
