import { registerApplication } from "single-spa";

import("webComponents/WebCounter");

registerApplication(
  "web-counter",
  () => import("./web-counter"),
  (location) => location.pathname.startsWith("/")
);
