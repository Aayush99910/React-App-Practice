import React from "react"; // importing react
import ReactDOM  from "react-dom/client"; // importing reactDOM
import App from "./App"; // importing app
import "./assets/index.css"; // importing styles


// making root and then rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)
