import https from 'https';
import axios from 'axios';
import { getKeyValue, TOKEN_WEATHER } from './storage.service.js';

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '🌤️';
    case '03':
      return '☁️';
    case '04':
      return '☁️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '🌩️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
  }
};

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_WEATHER.token));

  if (!token) {
    throw new Error('Token did not save');
  }

  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: token,
        lang: 'en',
        units: 'metric',
      },
    },
  );
  console.log(data);
  return data;
};

//   const url = new URL('https://api.openweathermap.org/data/2.5/weather');
//   url.searchParams.append('q', city);
//   url.searchParams.append('appid', token);
//   url.searchParams.append('lang', 'en');
//   url.searchParams.append('units', 'metric');

//   https.get(url, (response) => {
//     let res = '';
//     response.on('data', (chunk) => {
//       console.log('chunk', chunk);

//       res += chunk;
//     });
//     response.on('end', () => {
//       console.log(res);
//     });
//   });

export { getWeather, getIcon };
