<template>
  <van-cell
    title="手写签名"
    is-link
    to="Signature"
  />
  <van-cell
    title="页面截图"
    is-link
    to="Screenshots"
  />
  <van-cell
    title="生成二维码"
    is-link
    to="QrCode"
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
