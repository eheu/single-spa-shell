import { registerApplication } from "single-spa";
import { reactCounterLifecycles } from "./react-counter"

registerApplication(
  "react-counter",
  reactCounterLifecycles,
  (location) =>
    location.pathname.startsWith("/react") ||
    location.pathname.startsWith("/both")
);
