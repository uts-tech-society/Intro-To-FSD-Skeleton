import React, {useState} from 'react';
import {deleteFortune, updateFortune} from "../APIConnection/ApiFunctions.js";

function FortuneCard(props) {
    const [isEditing, setIsEditing] = useState()
    const [newFortune, setNewFortune] = useState();

    async function edit() {
    }

    return (
        <div className="fortune-card cursive">
            some text
            <button className="fortune-card-button">❌</button>
            <button className="fortune-card-button">📝</button>
            <div className="edit-fortune">
                <input id="add-fortune-input" type="text"/>
                <button className="button">Edit fortune</button>
            </div>
        </div>
    );
}

export default FortuneCard;