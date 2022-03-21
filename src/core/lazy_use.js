import VConsole from 'vconsole';
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'

export default function usePlug(app) {
  if (process.env.NODE_APP_ENV === 'test') {
    const vconsole = new VConsole();
    app.use(vconsole);
  }
  app.use(VueHighlightJS);
}