<template>
  <div class="content">
    <div class="title">请在下方框内签名：</div>
    <van-row>
      <van-col span="24">
        <canvas class="canvas" ref="canvasMode" />
      </van-col>
      <van-col span="8">
        <van-button type="default" @click="undo">撤销</van-button>
      </van-col>
      <van-col span="8">
        <van-button type="default" @click="clear">清屏</van-button>
      </van-col>
      <van-col span="8">
        <van-button type="default" @click="signatureImg">生成图片</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { downloadFile, dataURLtoBlob } from '@/api/common';
import SmoothSignature from "smooth-signature";
import {
  defineComponent,
  onMounted,
  ref
} from "vue";
export default defineComponent({
  name: "VueDemo",
  setup() {
    let signature = null;
    const canvasMode = ref(null)
    // 初始化
    const initMode = () => {
      const canvas = canvasMode.value;
      if(!canvas){
        throw Error('请设置dom元素');
      }
      signature = new SmoothSignature(canvas, {
        width: canvas.clientWidth,
        height: canvas.clientHeight,
        scale: 2,
        minWidth: 4,
        maxWidth: 10,
        color: '#1890ff',
        bgColor: '#efefef'
      });
    }
    const clear = () => {
      signature.clear();
    }
    const undo = () => {
      signature.undo();
    }
    const signatureImg = () => {
      let img = signature.getPNG();// base64图片
      downloadFile(img,'签名')
      let blob = dataURLtoBlob(img)
      console.log(blob,'blob格式图片')
    }
    onMounted(() => {
      initMode();
    });
    return {
      initMode,
      canvasMode,
      signature,
      clear,
      undo,
      signatureImg
    };
  }
});

</script>

<style scoped lang="less">
.content {
  padding: 10px;
  .title{
    padding-bottom:10px;
  }
  .canvas {
    width:100%;
    height:200px;
    border: 1px solid;
  }
}
</style>
