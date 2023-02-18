import getParsedFile from './parsers.js';
import buildTree from './treeBuilder.js';
import stylish from './formatters/stylish.js';

// const getParsedFile = (filepath) => {
// return JSON.parse(readFileSync(path.resolve(process.cwd(), filepath), 'utf8'));
// };

const genDiff = (filepath1, filepath2) => {
  const file1 = getParsedFile(filepath1);
  const file2 = getParsedFile(filepath2);

  const treeDiff = buildTree(file1, file2);
  return stylish(treeDiff);
};

export default genDiff;
