import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (treeDiff, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(treeDiff);
    case 'plain':
      return plain(treeDiff);
    case 'json':
      return json(treeDiff);
    default:
      throw new Error(`Format ${formatName} - is invalid`);
  }
};
