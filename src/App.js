import React from "react";
import Home from "./components/Home/Home";
import Appclasses from "./style/App.css";
import Bonus from "./style/Bonus.css";
import IconFeauture from "./components/iconfeature/IconFeauture";
import Facil from "./components/contentF/Facil";
import Leader from "./components/contentL/Leader";
import Start from "./components/Start/Start";
import Footr from "./components/Footr/Footr";

function App() {
  return (
    <div className="App">
      <Home/>
      <IconFeauture/>
      <Facil/>
      <Leader/>
      <Start/>
      <Footr/>
    </div>
  );
}

export default App;
