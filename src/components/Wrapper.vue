<template>
  <div id="wrapper">
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from './Nav.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';

@Component({
  components: {
    Nav,
    Main,
    Footer,
  },
})

export default class Wrapper extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/libs/_vendor";
@import "@/assets/sass/breakpoints";

#wrapper {
  width: 45em;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100%;
  padding: 4em 0;
  @include vendor("display", "flex");
  @include vendor("flex-direction", "column");
  @include vendor("align-items", "center");
  @include vendor("justify-content", "center");
  @include vendor("transition", "opacity 1s ease-in-out");

  body.is-preload & {
    opacity: 0;
  }

  @include breakpoint("<=large") {
    padding: 3em 0;
    max-width: calc(100% - 6em);
  }

  @include breakpoint("<=medium") {
    padding: 1.5em 0;
    max-width: calc(100% - 8em);
  }

  @include breakpoint("<=small") {
    padding: 1em 0;
    max-width: calc(100% - 2em);
  }

  @include breakpoint("<=xsmall") {
    padding: 1em 0;
    max-width: 100%;
  }
}
</style>