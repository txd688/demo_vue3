<template>
  <van-cell
    title="手写签名"
    is-link
    to="Signature"
  />
</template>

<script>
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount
} from "vue";
export default defineComponent({
  name: "VueDemo",
  setup() {
    onBeforeMount(() => {});
    onMounted(() => {});
    onBeforeUpdate(() => {});
    onUpdated(() => {});
    onBeforeUnmount(() => {});
    onUnmounted(() => {});
    return {};
  }
});
</script>

<style scoped lang="less">
</style>
