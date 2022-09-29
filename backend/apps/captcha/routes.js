const captchaController = require("./controllers/captcha.controller");

const routes = [
  {
    url: "get",
    method: "GET",
    controller: captchaController.getCaptchas,
    middlewares: [],
  },
];

module.exports = routes;
