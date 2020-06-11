import singleSpaHtml from "single-spa-html";
import("webComponents/WebCounter");

export const webCounterLifecycles = singleSpaHtml({
  template: "<web-counter count=0></web-counter>",
});
