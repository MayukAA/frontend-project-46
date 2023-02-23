import _ from 'lodash';

const buildTree = (file1, file2) => {
  const jointFile = { ...file1, ...file2 };
  const keys = _.sortBy(Object.keys(jointFile));

  return keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (!Object.hasOwn(file1, key)) {
      return { key, value: jointFile[key], status: 'added' };
    }
    if (!Object.hasOwn(file2, key)) {
      return { key, value: jointFile[key], status: 'deleted' };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, children: buildTree(value1, value2), status: 'nested' };
    }
    if (value1 === value2) {
      return { key, value: value1, status: 'unchanged' };
    }
    return { key, value: [value1, value2], status: 'changed' };
  });
};

export default buildTree;
