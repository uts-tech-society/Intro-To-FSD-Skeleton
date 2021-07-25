import React, {useState} from 'react';
import {createFortune} from "../APIConnection/ApiFunctions.js";

function AddFortune() {
    const [newFortune, setNewFortune] = useState("")

    function addFortune() {
        createFortune(newFortune);
    }
    
    return (
        <div className="add-input">
            <input value={newFortune} onChange={(e) => setNewFortune(e.target.value)} id="edit-fortune" type="text"/>
            <button variant="contained" color="primary" className="button" onClick={addFortune}>Add fortune!!!</button>
        </div>
    );
}

export default AddFortune;