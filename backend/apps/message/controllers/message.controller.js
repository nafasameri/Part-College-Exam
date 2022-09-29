const logger = require('../../../modules/logger');
const sendResponse = require('../../../modules/handler/response.handler');
const MessageRepository = require("../repositories/message.repository");
const messageRepository = new MessageRepository();

const statusCode = require('http-status-codes');

class MessageController {
    getMessages = async (req, res) => {
        try {
            const { id } = req.querystring;
            if (id) {
                const message = await messageRepository.fetchById(id);
                sendResponse(res, statusCode.OK, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }, message);
            } else {
                const messages = await messageRepository.fetchAll();
                sendResponse(res, statusCode.OK, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }, messages);
            }
        } catch (error) {
            logger.error(`${req.url}: ${error}`);
            throw error;
        }
    };

    createMessage = async (req, res) => {
        try {
            const { body } = req;
            if (!body || !body.body)
                return sendResponse(res, statusCode.BAD_REQUEST, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }, 'Invalid parameters!');

            const message = await messageRepository.add(body);
            if (!message)
                sendResponse(res, statusCode.NOT_FOUND, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }, 'Could Not Create');
            else
                sendResponse(res, statusCode.CREATED, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }, message);
        } catch (error) {
            logger.error(`${req.url}: ${error}`);
            throw error;
        }
    };
}


module.exports = new MessageController();