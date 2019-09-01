<template>
  <nav id="nav">
    <a
      @click="go('home')"
      href="#"
      :class="{ active: this.$store.state.bookmark === 'home' }"
      class="icon solid fa-home"
      aria-hidden="true"
    >
      <span>首頁</span>
    </a>
    <a
      @click="go('work')"
      href="#"
      :class="{ active: this.$store.state.bookmark === 'work' }"
      class="icon solid fa-cat"
      aria-hidden="true"
    >
      <span>作品</span>
    </a>
    <a
      @click="go('commission')"
      href="#"
      :class="{ active: this.$store.state.bookmark === 'commission' }"
      class="icon solid fa-fish"
      aria-hidden="true"
    >
      <span>委託</span>
    </a>
    <a
      href="https://www.facebook.com/people/Lin-Lynn/100010045894625"
      target="_blank"
      class="icon brands solid fa-facebook-square"
      aria-hidden="true"
    >
      <span>Facebook</span>
    </a>
    <a
      href="https://www.plurk.com/ki23872902"
      target="_blank"
      class="icon solid fa-parking"
      aria-hidden="true"
    >
      <span>Purk</span>
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