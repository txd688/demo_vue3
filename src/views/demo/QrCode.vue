<template>
  <div class="content">
    <div class="title">生成二维码：</div>
    <div  ref="qrcodeDom"></div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
import {
  defineComponent,
  onMounted,
  ref
} from "vue";
export default defineComponent({
  name: "QrCode",
  setup() {
    const qrcodeDom = ref(null);
    const createQrCode = () => {
      new QRCode(qrcodeDom.value, {
        text: 'http://www.baidu.com', //页面地址 ,如果页面需要参数传递请注意哈希模式#。
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
    onMounted(() => {
      createQrCode();
    });
    return {
      qrcodeDom,
      createQrCode,
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
}
</style>
