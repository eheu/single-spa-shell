import { registerApplication } from "single-spa";
import { webCounterLifecycles } from "./web-counter";

registerApplication(
  "web-counter",
  webCounterLifecycles,
  (location) => location.pathname.startsWith("/web") || location.pathname.startsWith("/both")
);
