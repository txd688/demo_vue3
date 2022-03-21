<template>
  <div class="UserLayout">
    <router-view></router-view>
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
  onBeforeUnmount
} from "vue";
export default defineComponent({
  name: "UserLayout",
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
* {
  margin: 0;
  padding: 0;
}
</style>
