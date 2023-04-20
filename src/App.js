import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/portofolio"} element={<Portofolio />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
