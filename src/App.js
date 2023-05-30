import React from "react";
import Home from "./components/Home/Home";
import Appclasses from "./style/App.css";
import Bonus from "./style/Bonus.css";
import IconFeauture from "./components/iconfeature/IconFeauture";
import Facil from "./components/contentF/Facil";



function App() {
  return (
    <div className="App">
      <Home/>
      <IconFeauture/>
      <Facil/>
    </div>
  );
}

export default App;
