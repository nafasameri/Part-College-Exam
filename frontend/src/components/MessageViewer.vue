<template>
  <div class="message">
    <div class="message__content">
      <div class="message__body">{{ messageData.body }}</div>
      <div class="message__date-box">
        <div class="message__date">{{ messageData.date }}</div>
        <div class="message__tags">جواب</div>
      </div>
    </div>

    <div class="message-reply" v-if="messageData.reply != null">
      <div class="message-reply__body">{{ messageData.reply.body }}</div>
      <div class="message-reply__date">{{ messageData.reply.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageData: Object,
  },
};
</script>

<style lang="scss" src="@/assets/sass/message.scss"></style>
