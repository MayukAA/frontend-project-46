import _ from 'lodash';

const getIndent = (indent) => '  '.repeat(indent);

const buildStylishCore = (name, value, indent = 4) => {
  if (typeof value !== 'object' || value === null) {
    return `${name}: ${value}`;
  }

  const keys = _.sortBy(Object.keys(value));
  const result = keys.map((key) => `${getIndent(indent + 2)}${buildStylishCore(key, value[key], indent + 2)}`).join('\n');

  return `${name}: {\n${result}\n${getIndent(indent)}}`;
};

const buildStylish = (object, indent = 0) => object
  .map((node) => {
    const { key, value, status } = node;

    switch (status) {
      case 'added':
        return `${getIndent(indent)}  + ${buildStylishCore(key, value, indent + 2)}`;
      case 'deleted':
        return `${getIndent(indent)}  - ${buildStylishCore(key, value, indent + 2)}`;
      case 'nested':
        return `${getIndent(indent + 2)}${key}: {\n${buildStylish(value, indent + 2)}\n${getIndent(indent + 2)}}`;
      case 'unchanged':
        return `${getIndent(indent + 2)}${key}: ${value}`;
      case 'changed': {
        const [value1, value2] = value;
        return `${getIndent(indent)}  - ${buildStylishCore(key, value1, indent + 2)}\n${getIndent(indent)}  + ${buildStylishCore(key, value2, indent + 2)}`;
      }
      default:
        throw new Error(`Formatter ${status} - is invalid`);
    }
  }).join('\n');

const stylish = (object) => `{\n${buildStylish(object)}\n}`;

export default stylish;
