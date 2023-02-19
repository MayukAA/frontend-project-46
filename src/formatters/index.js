import stylish from './stylish.js';
import plain from './plain.js';

export default (treeDiff, formatName) => {
  switch (formatName) {
    case '':
    case 'stylish':
      return stylish(treeDiff);
    case 'plain':
      return plain(treeDiff);
    default:
      throw new Error(`Format ${formatName} - is invalid`);
  }
};
