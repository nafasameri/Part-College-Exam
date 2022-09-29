<template>
  <div class="chat">
    <div class="chat__header">
      <div class="chat__title">چت کاربر</div>
      <div class="chat__counter">(64 پیام)</div>
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

<script setup>
import MessageViewer from "../components/MessageViewer.vue";
const messages = [
  {
    body: "ghfjkdls",
    date: "1234",
    reply: {
      body: "ghfjkdls",
      date: "1234",
      reply: null,
    },
  },
];
</script>

<style lang="scss" src="@/assets/sass/chat.scss"></style>
