import { readFileSync } from 'fs';
import path from 'path';
import parser from './parsers.js';
import buildTree from './treeBuilder.js';
import index from './formatters/index.js';

const getReadedFile = (filepath) => readFileSync(path.resolve(filepath), 'utf8');

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = getReadedFile(filepath1);
  const file2 = getReadedFile(filepath2);

  const extension1 = path.extname(filepath1);
  const extension2 = path.extname(filepath2);

  const parsedFile1 = parser(file1, extension1);
  const parsedFile2 = parser(file2, extension2);

  const treeDiff = buildTree(parsedFile1, parsedFile2);
  return index(treeDiff, formatName);
};

export default genDiff;
