<template>
  <div
    :class="
      $store.state.tab == 'price' ? 'col-12' : 'col-4 col-6-medium col-12-small'
    "
  >
    <a @click="click" class="image fit">
      <img :src="src" alt />
    </a>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';

export default createComponent({
  name: 'Picture',
  props: { src: String, click: Function },
});
</script>

<style scoped lang="scss">
a {
  cursor: pointer;
}
</style>