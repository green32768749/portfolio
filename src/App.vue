<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Wrapper from "./components/Wrapper.vue";

@Component({
  components: {
    Wrapper
  }
})
export default class App extends Vue {
  beforeMount() {
    window.setTimeout(function() {
      document.body.className = "";
    }, 100);
  }
}
</script>

<style lang="scss">
@import "assets/sass/main";
</style>
