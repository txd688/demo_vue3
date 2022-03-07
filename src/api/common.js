// 文件下载
export function downloadFile(url, fileName) {
  var x = new XMLHttpRequest();
    x.open('GET', url, true);
    x.responseType = 'blob';
    x.onload = function() {
      var url = window.URL.createObjectURL(x.response);
      var a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
    };
    x.send();
}
// base64 转 blob 格式
export function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}