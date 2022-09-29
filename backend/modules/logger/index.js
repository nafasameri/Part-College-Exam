const os = require("os");
const fs = require("fs");

const { date, datetime } = require('../utility')

class Logger {
    static #writeLog(type, txt) {
        const time = datetime();
        const day = date(); //.substring(0, 6);
        const FILE_PATH = `./modules/logger/${day}.log`;
        const data = `[${time}] [${type}]: ` + JSON.stringify({
            id: txt[0],
            ip: txt[1],
            address: txt[2],
            message: txt[3]
        }) + os.EOL;

        fs.appendFile(FILE_PATH, data, err => {
            if (err) console.error(err);
        });
    }

    static info(...txt) {
        this.#writeLog('INFO', txt);
        console.log(...txt);
    }

    static warn(...txt) {
        this.#writeLog('Warning', txt);
        console.warn(...txt);
    }

    static error(...txt) {
        this.#writeLog('ERROR', txt);
        console.error(...txt);
    }
}

module.exports = Logger;