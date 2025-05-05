#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess(`Токен ${token} сохранен`)
    } catch (e) {
        printError(e.message);
    }
}
const initSLI = () => {
    const args = getArgs(process.argv);
    // console.log(args);
    if (args.h) {
        printHelp()
    }
    if (args.s) {

    }
    if (args.t) {
       return saveToken(args.t)
    }
};

initSLI();

// d:\Downloads\udemy - nodejs-start\08 Приложение 1 - CLI прогноз погоды\039 Взаимодействие с API.mp4