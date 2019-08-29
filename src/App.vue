<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Wrapper from './components/Wrapper.vue';

@Component({
  components: {
    Wrapper,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
@import "assets/sass/main";
</style>
