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
body {
  animation: animateCursor 0.5s infinite;
}

@keyframes animateCursor {
  0% {
    cursor: url('images/cursor_1.png'), default;
  }
  50% {
    cursor: url('images/cursor_2.png'), default;
  }
  100% {
    cursor: url('images/cursor_1.png'), default;
  }
}
</style>
