import axios from 'axios';

async function getCapycha() {
    let data = 'errorrrr'
    await axios({
        method: 'get',
        url: 'http://127.0.0.1:81/captcha/get',
        headers: { }
      })
        .then(function (response) {
            data = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    // console.log(data);
    return data;
}

export default {
    getMessages,
};