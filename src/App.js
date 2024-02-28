import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("pink");
  const changeTheme = (theme)=>setTheme(theme);
  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar theme = {theme} changeTheme = {changeTheme}/>

      {/* Main Body */}
      <Main theme = {theme}/>
      {/* Footer */}
    </div>
  );
}

export default App;
