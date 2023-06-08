import { getIcon, getWeather } from '../services/api.service.js';
import {
  printError,
  printSuccess,
  printWeather,
} from '../services/log.service.js';
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_WEATHER,
} from '../services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
    return;
  }
  try {
    await saveKeyValue(TOKEN_WEATHER.token, token);
    printSuccess('Token saved');
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City doesn't exist");
    return;
  }
  try {
    await saveKeyValue(TOKEN_WEATHER.city, city);
    printSuccess('City saved');
  } catch (err) {
    printError(err.message);
  }
};

const getForecast = async () => {
  try {
    const data = await getWeather(
      process.env.CITY ?? (await getKeyValue(TOKEN_WEATHER.city)),
    );
    printWeather(data, getIcon(data.weather[0].icon));
  } catch (err) {
    if (err?.response?.status == 404) {
      printError('error status 404: incorrect city name');
    } else if (err?.response?.status == 401) {
      printError('error status 401: incorrect token');
    } else {
      printError(err.message);
    }
  }
};

export { getForecast, saveCity, saveToken };
