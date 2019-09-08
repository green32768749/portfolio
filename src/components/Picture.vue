<template>
  <div :class="[$store.state.tab == 'price' ? 'col-12' : 'col-4 col-6-medium col-12-small']">
    <a @click="click" href="#" class="image fit">
      <img :src="src" alt />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Picture extends Vue {
  @Prop(String) public src: string | undefined;
  @Prop(Function) public click: any | undefined;
}
</script>

<style scoped lang="scss">
</style>