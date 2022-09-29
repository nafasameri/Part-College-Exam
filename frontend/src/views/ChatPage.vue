<template>
  <div class="chat">
    <div class="chat__header">
      <div class="chat__title">چت کاربر</div>
      <div class="chat__counter">({{ messages.length }} پیام)</div>
    </div>

    <div class="chat__content">
      <MessageViewer
        v-for="(item, index) in messages"
        :key="index"
        :messageData="item"
      >
      </MessageViewer>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { mapActions, mapState, store } from "vuex";
import MessageViewer from "../components/MessageViewer.vue";

export default {
  props: {
    messageData: Object,
  },
  components: { MessageViewer },
  computed: {
    ...mapState(["messages"]),
    ...mapActions(["fetchMessages"]),
  },
};
onMounted(() => {
  store.dispatch("fetchMessages");
  // const messages = 
})
// console.log(messages);
</script>

<style lang="scss" src="@/assets/sass/chat.scss"></style>
