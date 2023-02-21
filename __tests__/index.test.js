import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const formatPlain = 'plain';
const formatJson = 'json';
const expectedFile = readFile('expectedTestFile.txt');
const expectedFileForPlain = readFile('expectedTestFileForPlain.txt');
const expectedFileForJson = readFile('expectedTestFileForJson.json');

test('genDiff', () => {
  const fileJson1 = getFixturePath('file1.json');
  const fileJson2 = getFixturePath('file2.json');
  const fileYaml1 = getFixturePath('file1.yaml');
  const fileYaml2 = getFixturePath('file2.yaml');
  expect(genDiff(fileJson1, fileJson2)).toEqual(expectedFile.trim());
  expect(genDiff(fileYaml1, fileYaml2)).toEqual(expectedFile.trim());
  expect(genDiff(fileJson1, fileJson2, formatPlain)).toEqual(expectedFileForPlain.trim());
  expect(genDiff(fileYaml1, fileYaml2, formatPlain)).toEqual(expectedFileForPlain.trim());
  expect(genDiff(fileJson1, fileJson2, formatJson)).toEqual(expectedFileForJson);
  expect(genDiff(fileYaml1, fileYaml2, formatJson)).toEqual(expectedFileForJson);
});
