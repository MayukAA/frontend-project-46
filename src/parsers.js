import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getReadedFile = (filepath) => readFileSync(path.resolve(filepath), 'utf8');

export default (filepath) => {
  const readedFile = getReadedFile(filepath);
  const fileExtension = path.extname(filepath);

  switch (fileExtension) {
    case '.json':
      return JSON.parse(readedFile);
    case '.yml':
    case '.yaml':
      return yaml.load(readedFile);
    default:
      throw new Error(`Extension ${fileExtension} - is invalid`);
  }
};
