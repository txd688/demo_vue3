<template>
  <div class="content">
    <div id="main" ref="mainDemo">
      <div>1111111111</div>
      <div>22222222222</div>
    </div>
    <van-button type="primary" @click="screen">点击截图</van-button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import { downloadFile, dataURLtoBlob } from '@/api/common';
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ScreenshotsDemo",
  setup() {
    const mainDemo = ref(null)
    const screen = () => {
      console.log(mainDemo)
      html2canvas(mainDemo.value).then(canvas => {
        const dataURL = canvas.toDataURL('image/png');
        downloadFile(dataURL, '截图')
        const blob = dataURLtoBlob(dataURL);
        const file = new File([blob], new Date().getTime() + '.png', {
          type: 'image/png'
        });
        console.log(file);
      });
    }
    return {
      mainDemo,
      screen
    };
  }
});

</script>

<style scoped lang="less">
.content {
  padding: 10px;
  #main { 
    border: 1px solid red;
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
