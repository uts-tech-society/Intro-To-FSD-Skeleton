import React, {useState, useEffect} from "react";
import SeeAllFortunes from "./Components/SeeAllFortunes.js";
import OpenFortune from "./Components/OpenFortune.js";
import {getFortunes} from './APIConnection/ApiFunctions.js';
import './App.css';

function App() {
  
  const [fortunes, setFortunes] = useState([]);

  useEffect(() => {
    setFortunes(getFortunes())
  });

  return (
    <div className="App">
      <OpenFortune fortunes={fortunes}/>
      <SeeAllFortunes fortunes={fortunes}/>
    </div>
  );
}

export default App;
