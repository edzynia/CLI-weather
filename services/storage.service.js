import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');
const TOKEN_WEATHER = {
  token: 'token',
  city: 'city',
};

const isExist = async (path) => {
  try {
    await promises.access(path);
    return true;
  } catch (err) {
    return false;
  }
};

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    try {
      const file = await promises.readFile(filePath);
      data = JSON.parse(file);
    } catch (err) {
      console.error('Error reading file:', err);
    }
  }

  data[key] = value;

  try {
    await promises.writeFile(filePath, JSON.stringify(data));
    console.log('Data saved successfully.');
  } catch (err) {
    console.err('Error writing file:', err);
  }
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export { saveKeyValue, getKeyValue, TOKEN_WEATHER };

// import {
//   join,
//   basename,
//   dirname,
//   relative,
//   isAbsolute,
//   resolve,
//   sep,
// } from 'path';
// const filePath = join(homedir(), 'weather-data.json');
//   console.log(basename(filePath));
//   console.log(dirname(filePath));
//   console.log(relative(filePath, dirname(filePath)));
//   console.log(isAbsolute(filePath));
//   console.log(resolve('..'));
//   console.log(sep);
