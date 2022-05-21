import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
