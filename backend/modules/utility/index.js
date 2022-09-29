const persianDate = require('persian-date');

function date() {
    const now = new persianDate(Date.now());//.format('YYYY-MM-DD H:m:s');
    return `${now.year()}-${now.month()}-${now.day()}`;
}

function datetime() {
    const now = new persianDate(Date.now());//.format('YYYY-MM-DD H:m:s');
    return `${now.year()}-${now.month()}-${now.day()} ${now.hours()}:${now.minutes()}:${now.seconds()}`;
}

module.exports = { date, datetime };