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
import { onBeforeMount, createComponent } from '@vue/composition-api';
import SquareLoader from 'vue-spinner/src/SquareLoader.vue';

import Wrapper from './components/Wrapper.vue';

export default createComponent({
  name: 'App',
  components: {
    Wrapper,
    SquareLoader,
  },

  setup() {
    const spinner = {
      loading: false,
      color: '#f0897a',
      size: '5vw',
    };
    onBeforeMount(() => {
      window.setTimeout(() => {
        document.body.className = '';
      }, 100);
    });
    return {
      spinner,
    };
  },
});
</script>

<style lang="scss">
@import 'assets/sass/main';
</style>
