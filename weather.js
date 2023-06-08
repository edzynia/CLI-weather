#!/usr/bin/ env node
import { getArgs } from './helpers/args.js';
import { getForecast, saveCity, saveToken } from './helpers/saveData.js';
import { getWeather, getIcon } from './services/api.service.js';
import { printHelp } from './services/log.service.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(process.env);
  if (args.h) {
    return printHelp();
  }
  if (args.c) {
    return saveCity(args.c);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForecast();
};
initCLI();
