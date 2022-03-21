<template>
  <pre v-highlightjs>
    <code class="javascript">
      function fibo(n){
        if( n &lt; 2 ) return 1;
        return fibo(n-1) + fibo(n-2);
      }
    </code>
  </pre>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HighlightDemo",
});
</script>

<style scoped lang="less">
</style>
