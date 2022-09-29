const messageController = require("./controllers/message.controller");
const { fetchQueryStringFromURL, getHeaders, InvalidId } = require('./middlewares');

const routes = [
  {
    url: "",
    method: "GET",
    controller: messageController.getMessages,
    middlewares: [fetchQueryStringFromURL],
  },
  {
    url: "get",
    method: "GET",
    controller: messageController.getMessages,
    middlewares: [fetchQueryStringFromURL, InvalidId],
  },
  {
    url: "add",
    method: "POST",
    controller: messageController.createMessage,
    middlewares: [fetchQueryStringFromURL, getHeaders],
  }
];

module.exports = routes;
