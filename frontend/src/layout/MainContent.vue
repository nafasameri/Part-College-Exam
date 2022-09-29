<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/img/partsoftwarelogo.png" alt="" />
      <div class="header__logo-desc">کالج پارت</div>
    </div>
    <div class="header__menus">
      <div class="header__tabbar">
        <router-link
          :to="tab.path"
          class="header__tab"
          v-for="(tab, index) in tabs"
          :key="index"
        >
          {{ tab.name }}
        </router-link>
      </div>
    </div>
    <!-- <div class="header__line"></div> -->
  </header>
  <main class="content">
    <router-view></router-view>
  </main>
</template>

<script setup>
const tabs = [
  { name: "داشبورد", path: "/dashboard" },
  { name: "لاگ", path: "/log" },
  { name: "چت کاربر", path: "/chat" },
];
</script>

<style lang="scss" src="@/assets/sass/main.scss"></style>
