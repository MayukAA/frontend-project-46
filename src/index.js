import _ from 'lodash';
import getParsedFile from './parsers.js';

// const getParsedFile = (filepath) => {
// return JSON.parse(readFileSync(path.resolve(process.cwd(), filepath), 'utf8'));
// };

const genDiff = (filepath1, filepath2) => {
  const file1 = getParsedFile(filepath1);
  const file2 = getParsedFile(filepath2);
  const jointFile = { ...file1, ...file2 };
  const keys = _.sortBy(Object.keys(jointFile));

  const result = keys.map((key) => {
    if (!Object.hasOwn(file1, key)) {
      return `  + ${key}: ${jointFile[key]}`;
    }
    if (!Object.hasOwn(file2, key)) {
      return `  - ${key}: ${jointFile[key]}`;
    }
    return file1[key] === file2[key] ? `    ${key}: ${jointFile[key]}` : `  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
  }).join('\n');

  return `{\n${result}\n}`;
};

export default genDiff;
