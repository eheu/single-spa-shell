import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { ReactCounter } from "reactComponents/ReactCounter";

export const reactCounterLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ReactCounter,
}); 