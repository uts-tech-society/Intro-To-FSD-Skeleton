import React, {useState} from 'react';
import {createFortune} from "../APIConnection/ApiFunctions.js";

function AddFortune() {
    const [newFortune, setNewFortune] = useState()

    function addFortune() {
    }

    return (
        <div className="add-input">
            <input value={newFortune} id="add-fortune-input" type="text"/>
            <button className="button">Add fortune!!!</button>
        </div>
    );
}

export default AddFortune;