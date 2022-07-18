import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";

export default function Main({theme, setTheme}) {
  console.log({theme, setTheme});
  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" exact element={<Splash theme={theme} setTheme = {setTheme} />} />
            <Route path="/home" element={<Home theme={theme} setTheme = {setTheme} />} />
            <Route path="/splash" element={<Splash theme={theme} setTheme = {setTheme} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" exact element={<Home theme={theme} setTheme = {setTheme}/>} />
            <Route path="/home" element={<Home theme={theme} setTheme = {setTheme}/>} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
