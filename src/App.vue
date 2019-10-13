<template>
  <div id="app">
    <Wrapper />
    <div
      style="position:fixed; top:50%; left:50%; transform: translate(-50%, -50%);"
    >
      <SquareLoader
        :loading="spinner.loading"
        :color="spinner.color"
        :size="spinner.size"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Wrapper from './components/Wrapper.vue';
import SquareLoader from 'vue-spinner/src/SquareLoader.vue';

@Component({
  components: {
    Wrapper,
    SquareLoader,
  },
})
export default class App extends Vue {
  public spinner = {
    loading: false,
    color: '#f0897a',
    size: '5vw',
  };

  public beforeMount() {
    window.setTimeout(() => {
      document.body.className = '';
    }, 100);
  }
}
</script>

<style lang="scss">
@import 'assets/sass/main';
</style>
