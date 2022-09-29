import axios from 'axios';

// axios.defaults.withCredentials = true;

async function getMessages() {
    let messages = 'errorrrr'
    await axios({
        method: 'get',
        url: 'http://127.0.0.1:81/message/',
        headers: {}
    })
        .then(function (response) {
            messages = response.data.message;
            messages.forEach(async (message) => {
                if (message.reply) {
                    message.reply = await getMessage(message.reply);
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log(messages);
    return messages;
}

async function getMessage(id) {
    let message = 'errorrrr'
    await axios({
        method: 'get',
        url: `http://127.0.0.1:81/message/get?id=${id}`,
        headers: {}
    })
        .then(function (response) {
            message = response.data.message;
        })
        .catch(function (error) {
            console.log(error);
        });
    return message
}

async function setMessage(body, reply) {
    const data = JSON.stringify({
        "body": body,
        "reply": reply
    });

    let message = 'errorrrr'
    await axios({
        method: 'post',
        url: 'http://127.0.0.1:81/message/add',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            message = response.data.message;
        })
        .catch(function (error) {
            console.log(error);
        });
    return message
}

export default {
    getMessages,
    getMessage,
    setMessage
};