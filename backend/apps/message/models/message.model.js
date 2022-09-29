class Message {
    #MessageID;
    #MessageBoby;
    #MessageDate;
    #ReplyID;


    constructor(message) {
        this.#MessageID = message.MessageID;
        this.#MessageBoby = message.MessageBoby;
        this.#MessageDate = message.MessageDate;
        this.#ReplyID = message.ReplyID;
    }

    get() {
        return {
            "id": this.#MessageID,
            "body": this.#MessageBoby,
            "date": this.#MessageDate,
            "reply": this.#ReplyID,
        };
    }
}

module.exports = Message;