import chalk from 'chalk'; // библиотека для раскрашивания символов в консоле
import dedent from 'dedent-js' // библиотека Удаляет отступы из многострочных строк в консоле



const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`
        ${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        ${chalk.bgWhite('-s')} [CITY] для установки города
        ${chalk.bgWhiteBright('-h')} для вывода помощи
        ${chalk.bgWhite('-t')} [API_KEY] для сохранения токена
        `
    );
}


export { printError, printSuccess, printHelp }
