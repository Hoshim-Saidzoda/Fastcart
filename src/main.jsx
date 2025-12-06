import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import { axiosRequest } from "./store/api";
import './index.css'

const token = localStorage.getItem("token");
if (token) {
  axiosRequest.defaults.headers.Authorization = `Bearer ${token}`;
}
 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
