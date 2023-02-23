import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const extensions = ['json', 'yml', 'yaml'];
const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJson = readFile('expectedJson.json');

test.each(extensions)('genDiff', (extension) => {
  const file1 = getFixturePath(`file1.${extension}`);
  const file2 = getFixturePath(`file2.${extension}`);
  expect(genDiff(file1, file2)).toEqual(expectedStylish);
  expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(file1, file2, 'json')).toEqual(expectedJson);
});
