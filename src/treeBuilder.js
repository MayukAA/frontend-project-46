import _ from 'lodash';

const buildTree = (file1, file2) => {
  const jointFile = { ...file1, ...file2 };
  const keys = _.sortBy(Object.keys(jointFile));

  return keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (!Object.hasOwn(file1, key)) { // Есть только file2;
      return { key, value: jointFile[key], status: 'added' };
    }
    if (!Object.hasOwn(file2, key)) { // Есть только file1;
      return { key, value: jointFile[key], status: 'deleted' };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) { // Оба файла - объекты;
      return { key, value: buildTree(value1, value2), status: 'nested' };
    }
    if (value1 === value2) { // Значения файлов одинаковы, значит, файлы не объекты;
      return { key, value: value1, status: 'unchanged' };
    } // 3начения файлов различны;
    return { key, value: [value1, value2], status: 'changed' };
  });
};

export default buildTree;
