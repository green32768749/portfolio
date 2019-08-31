<template>
  <nav id="nav">
    <a
      @click="go('home')"
      href="#"
      :class="{ active: this.$store.state.current == 'home' }"
      class="icon solid fa-home"
      aria-hidden="true"
    >
      <span>首頁</span>
    </a>
    <a
      @click="go('work')"
      href="#"
      :class="{ active: this.$store.state.current == 'work' }"
      class="icon solid fa-folder"
      aria-hidden="true"
    >
      <span>作品</span>
    </a>
    <a
      href="https://www.facebook.com/people/Lin-Lynn/100010045894625"
      class="icon brands solid fa-facebook-square"
      aria-hidden="true"
    >
      <span>Facebook</span>
    </a>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  public go(location: string) {
    this.$store.commit('go', location);
  }
}
</script>

<style>
</style>