import React, {useState} from 'react';
import {deleteFortune, updateFortune} from "../APIConnection/ApiFunctions.js";

function FortuneCard(props) {
    const {_id, fortuneName} = props.fortune;
    const [isEditing, setIsEditing] = useState(false)
    const [newFortune, setNewFortune] = useState(fortuneName);

    async function edit() {
        await updateFortune(_id, newFortune);
        setIsEditing(false);
    }

    return (
        <div className="fortune-card cursive" key={_id}>
            {fortuneName}
            <button className="fortune-card-button" onClick={() => {deleteFortune(_id)}}>❌</button>
            <button className="fortune-card-button" onClick={() => setIsEditing(!isEditing)}>📝</button>
            {isEditing ?
                <div className="edit-fortune">
                    <input value={newFortune} onChange={(e) => setNewFortune(e.target.value)} id="add-fortune-input" type="text"/>
                    <button className="button" onClick={edit}>Edit fortune</button>
                </div>
                :
                ""
            }

        </div>
    );
}

export default FortuneCard;