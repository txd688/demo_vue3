<template>
  <div class="content">
    <div class="title">请在下方框内用正楷签名</div>
    <div class="sign">
      <vue-esign
        ref="esign"
        :isCrop="false"
        :lineWidth="6"
        :lineColor="'#000000'"
      />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  // ref
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
    return {

    };
  }
});
</script>

<style scoped lang="less">
.content {
  padding: 10px;
}
</style>
