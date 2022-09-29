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

    async add(message, userID) {
        const messageModel = {
            body: message.body ?? '',
            date: message.date ?? '',
            reply: message.reply ?? null
        };
        const record = await db.insert('Message', '"MessageBody", "MessageDate", "ReplyID"',
        `'${messageModel.body}', '${messageModel.date}', ${messageModel.reply}`);
        return record.rows[0] ? new Message(record.rows[0]).get() : undefined;
    }

    async update(message, userID) {
        const messageModel = {
            id: message.id ?? null,
            body: message.body ?? '',
            date: message.date ?? '',
            reply: message.reply ?? null
        };

        const record = await db.update('Message',
                 `"MessageBody"='${messageModel.body}', "MessageDate"='${messageModel.date}', "ReplyID"=${messageModel.reply}`,
                 `"MessageID"=${messageModel.id}`);
        return record.rows[0] ? new Message(record.rows[0]).get() : undefined;
    }

    async delete(id, userID) {
        const record = await db.delete('Message', `"MessageID"=${id}`);
        return record.rows[0] ? new Message(record.rows[0]).get() : undefined;
    }
}

module.exports = MessageRepository;