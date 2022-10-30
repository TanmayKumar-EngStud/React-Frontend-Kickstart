// Import general React modules
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Importing other general modules
import { Provider } from "react-redux";
import { store } from "./4. Storage";

// Import component Pages, and style at the last.
// import Home from "./1. Pages/1. Home/home";
// import About from "./1. Pages/2. About/about";

import "./3. Styles/main.css";
// create root and then render

let Home = lazy(() => import("./1. Pages/1. Home/home"));
let About = lazy(() => import("./1. Pages/2. About/about"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Router>
  <Provider store={store}>
   <Suspense fallback={null}>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
    </Routes>
   </Suspense>
  </Provider>
 </Router>
);
