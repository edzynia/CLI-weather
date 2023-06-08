import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed('ERROR: ' + error));
};

const printSuccess = (message) => {
  console.log(chalk.bgGreenBright('SUCCESS: ' + message));
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgBlueBright('HELP: ')} No parameters of weather
    -s for set up the city
    -h for displaying help
    -t to save token
    `,
  );
};

const printWeather = (response, icon) => {
  console.log(
    dedent`${chalk.bgBlueBright('WEATHER: ')} The weather at the ${
      response.name
    }
    temperature: ${response.main.temp} feels like: ${response.main.feels_like}
    ${icon} ${response.weather[0].description}
    Humidity: ${response.main.humidity}
    `,
  );
};

export { printError, printSuccess, printHelp, printWeather };
