const os = require("os");
const fs = require("fs");

const { date, datetime } = require('../utility')

class Logger {
    static #writeLog(txt) {
        const time = datetime();
        const day = date(); //.substring(0, 6);
        const FILE_PATH = `C:/Users/Nafiseh.Ameri/Desktop/Exam/backend/modules/logger/${day}.log`;
        fs.appendFile(FILE_PATH, `[${time}] ${txt} ${os.EOL}`, err => {
            if (err) console.error(err);
        });
    }

    static info(...txt) {
        this.#writeLog(`[INFO]: ${txt}`);
        console.log(...txt);
    }

    static warn(...txt) {
        this.#writeLog(`[Warning]: ${txt}`);
        console.warn(...txt);
    }

    static error(...txt) {
        this.#writeLog(`[ERROR]: ${txt}`);
        console.error(...txt);
    }
}

module.exports = Logger;