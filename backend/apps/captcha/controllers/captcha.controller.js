const logger = require('../../../modules/logger');
const sendResponse = require('../../../modules/handler/response.handler');

const statusCode = require('http-status-codes');
const svgCaptcha = require('svg-captcha');
const sessionstorage = require('sessionstorage');
const sharp = require('sharp');


class CaptchaController {
    getCaptchas = async (req, res) => {
        try {
            const captcha = svgCaptcha.create();
            sessionstorage.setItem("captcha", captcha.text)
            sharp(captcha.data).png()
                .toFile("captcha.png")
                .then(function (info) {
                    console.log(info)
                })
                .catch(function (err) {
                    console.log(err)
                });

            res.writeHead(200);
            res.end(captcha.data);
        } catch (error) {
            logger.error(`${req.url}: ${error}`);
            throw error;
        }
    };
}


module.exports = new CaptchaController();