import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { StoreContext } from "./store/utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <StoreContext.Provider value={store}> {/* 使用context提供store对象，以解connect函数的耦合，若使用connect-with-store可不用context */}
      <App />
      <Home />
    </StoreContext.Provider>
  </StrictMode>
);
reportWebVitals();
