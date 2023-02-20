import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return (_.isString(value) ? `'${value}'` : value);
};

export default (object) => {
  const iter = (tree, ancestry) => tree
    .flatMap((node) => {
      const { key, value, status } = node;
      const newAncestry = `${ancestry}${key}`;

      switch (status) {
        case 'added':
          return `Property '${newAncestry}' was added with value: ${stringify(value)}`;
        case 'deleted':
          return `Property '${newAncestry}' was removed`;
        case 'nested':
          return `${iter(value, `${newAncestry}.`)}`;
        case 'unchanged':
          return [];
        case 'changed': {
          const [value1, value2] = value;
          return `Property '${newAncestry}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
        }
        default:
          throw new Error(`Status ${status} - is invalid`);
      }
    }).join('\n');

  return iter(object, '');
};
