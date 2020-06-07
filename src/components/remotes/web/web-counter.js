import singleSpaHtml from "single-spa-html";

const htmlLifecycles = singleSpaHtml({
  template: "<web-counter count=0></web-counter>",
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;
