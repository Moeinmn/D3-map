import { init_handler, change_config_handler, resizeHandler, transformData } from './chart';

window.init_handler = init_handler;
window.change_config_handler = change_config_handler;
window.resizeHandler = resizeHandler;
window.transformData = transformData;

if (process.env.NODE_ENV === "development") {
  window.addEventListener('load', () => {
    devMode();
  })
}