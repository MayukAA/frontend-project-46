import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const formatPlain = 'plain';
const expectedFile = readFile('expectedTestFile.txt');
const expectedFileForPlain = readFile('expectedTestFileForPlain.txt');

test('diff .json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  expect(genDiff(file1, file2)).toEqual(expectedFile.trim());
  expect(genDiff(file1, file2, formatPlain)).toEqual(expectedFileForPlain.trim());
});

test('diff .yaml', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');
  expect(genDiff(file1, file2)).toEqual(expectedFile.trim());
  expect(genDiff(file1, file2, formatPlain)).toEqual(expectedFileForPlain.trim());
});
