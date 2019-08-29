<template>
  <nav id="nav">
    <a href="#" class="icon solid fa-home">
      <span>首頁</span>
    </a>
    <a href="#work" class="icon solid fa-folder">
      <span>作品</span>
    </a>
    <a href="https://www.facebook.com/people/Lin-Lynn/100010045894625" class="icon solid fa-facebook">
      <span>私訊</span>
    </a>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {}
</script>

<style>
</style>