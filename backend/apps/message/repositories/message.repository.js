const Message = require("../models/message.model");
const db = require('../../../modules/database');
const datetime = require('../../../modules/utility').datetime;


class MessageRepository {
    async fetchAll() {
        const record = await db.selcet('Message', '*');
        const messages = [];
        record.rows.forEach((row) => {
            messages.push(new Message(row).get());
        });
        return messages;
    }

    async fetchById(id) {
        const record = await db.selcet('Message', '*', `"MessageID"=${id}`);
        return record.rows[0] ? new Message(record.rows[0]).get() : undefined;

    }

    async add(message) {
        const messageModel = {
            body: message.body ?? '',
            date: datetime(),
            reply: message.reply ?? null
        };
        const record = await db.insert('Message', '"MessageBody", "MessageDate", "ReplyID"',
        `'${messageModel.body}', '${messageModel.date}', ${messageModel.reply}`);
        return record.rows[0] ? new Message(record.rows[0]).get() : undefined;
    }
}

module.exports = MessageRepository;