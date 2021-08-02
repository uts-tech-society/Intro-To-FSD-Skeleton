import React, {useState, useEffect} from "react";
import SeeAllFortunes from "./Components/SeeAllFortunes.js";
import OpenFortune from "./Components/OpenFortune.js";
import {getFortunes} from './APIConnection/ApiFunctions.js';
import './App.css';

function App() {
  // dummy data 
  let exampleFortunes = [
    "u will pet a cat soon :)",
    "be conscious of time :O",
    "be prepared for a delicious snack!!!"
  ]
  const [fortunes, setFortunes] = useState();

  return (
    <div className="App">
    </div>
  );
}

export default App;
