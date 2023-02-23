import yaml from 'js-yaml';

export default (file, fileExtension) => {
  switch (fileExtension) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    default:
      throw new Error(`Extension ${fileExtension} - is invalid`);
  }
};
