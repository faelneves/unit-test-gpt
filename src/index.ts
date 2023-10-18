import "dotenv/config.js";
import OpenAI from 'openai';
import fs from 'fs';

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


(async (filePath: string) => {
  const response = await openai.chat.completions.create({
    model: process.env.MODEL as string,
    messages: [{ "role": "system", "content": getFileContent('./inputs/tests_v1.txt').fileContents },
    { "role": "user", "content": getFileContent(filePath).fileContents }],
  });
  const codeFromMessage = getCodeFromMessage(response.choices[0].message.content).join('\n')
  createFile(addTestOnPath(filePath), codeFromMessage)
})('./project/example.test.js')

// console.log(getFileContent('./project/example.js').fileContents)
// console.log(getFileContent('./inputs/tests.txt').fileContents);