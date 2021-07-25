import React, {useState} from 'react';
import AddFortune from "./AddFortune.js";

function SeeAllFortunes(props) {
    let {fortunes} = props;
    const [isShowingFortunes, setIsShowingFortunes] = useState(false)

    return (
        <div className="fortunes">
            <button className="showfortunes button" onClick={() => setIsShowingFortunes(!isShowingFortunes)}>⬇ Show all fortunes ⬇</button>
            <div id="fortunes" className={isShowingFortunes? "hidden" : "show"}>
                <h2 className="cursive">Fortunes:</h2>
                <AddFortune/>
                <div className="fortune-list">
                    {fortunes.map((fortune, index) => <div className="fortune-card cursive" key={index}>{fortune.fortuneName}</div>)}
                </div>
            </div>
        </div>
    );
}

export default SeeAllFortunes;