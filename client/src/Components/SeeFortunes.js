import React, {useState} from 'react';
import AddFortune from "./AddFortune.js";
import FortuneCard from "./FortuneCard.js";

function SeeFortunes(props) {
    const [isShowingFortunes, setIsShowingFortunes] = useState();

    return (
        <div>
            <button className="button">Show fortunes</button>
            <div id="fortunes">
                <h2 className="cursive">Fortunes:</h2>
                <AddFortune/>
                <div className="fortune-list">
                    
                </div>
            </div>
        </div>
    );
}

export default SeeFortunes;