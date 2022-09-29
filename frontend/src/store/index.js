import { createStore } from 'vuex'
// import axios from 'axios'
import chat from "../services/chat";

export default createStore({
  state: {
    messages: [
      {
        "id": 1,
        "body": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        "date": "1401-7-6 11:2:41",
        "reply": null
      },
      {
        "id": 2,
        "body": "ghfjkdlلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        "date": "1401-7-6 11:5:4",
        "reply": null
      },
      {
        "id": 3,
        "body": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        "date": "1401-7-6 11:5:23",
        "reply": {
          "id": 1,
          "body": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
          "date": "1401-7-6 11:2:41",
          "reply": null
        }
      }
    ]
  },
  getters: {
    getMessages: (state) => state.messages
  },
  actions: {
    async fetchMessages({ commit }) {
      try {
        const data = await chat.getMessages();
        console.log(data);
        commit('SET_MESSAGES', data.data);
      }
      catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    SET_MESSAGES(state, messages) {
      state.messages = messages
    }
  }
})