import React, { useState,useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ColorAi from "./ColorAi";
import Color from "./Colors";
import Navigation from "./Navigation";
import "./App.css";
import ColorPicker from "./ColorPicker";
import AiColor from "./AiColor";
import { ThemeProvider } from "./ThemeContext";
import ProtectedRoutes from "./ProtectedRotes";
import { useNavigate } from "react-router-dom";
import ThemeContext from "./ThemeContext";

// const { theme } = useContext(ThemeContext);
function App() {
  
  
  return (
    
      <ThemeProvider>
        
        <Router>
          <div style={{ display: "flex" }}>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="colorai"
                element={
                  <ProtectedRoutes>
                    <ColorAi />
                  </ProtectedRoutes>
                }
              />
              <Route path="color" element={<Color />} />
              <Route path="login" element={<Login />} />
              <Route path="colorpicker" element={<ColorPicker />} />
              <Route path="aicolor" element={<AiColor />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    
  );
}

export default App;
