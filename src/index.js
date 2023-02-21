import getParsedFile from './parsers.js';
import buildTree from './treeBuilder.js';
import index from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = getParsedFile(filepath1);
  const file2 = getParsedFile(filepath2);

  const treeDiff = buildTree(file1, file2);
  return index(treeDiff, formatName);
};

export default genDiff;
