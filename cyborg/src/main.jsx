import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import our custom SCSS
// import "./scss/custom.scss";

// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
