class Message {
    #MessageID;
    #MessageBody;
    #MessageDate;
    #ReplyID;


    constructor(message) {
        this.#MessageID = message.MessageID;
        this.#MessageBody = message.MessageBody;
        this.#MessageDate = message.MessageDate;
        this.#ReplyID = message.ReplyID;
    }

    get() {
        return {
            "id": this.#MessageID,
            "body": this.#MessageBody,
            "date": this.#MessageDate,
            "reply": this.#ReplyID,
        };
    }
}

module.exports = Message;