import VConsole from 'vconsole';

export default function usePlug(app) {
  if (process.env.NODE_APP_ENV === 'test') {
    const vconsole = new VConsole();
    app.use(vconsole);
  }
}