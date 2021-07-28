import React, {useState} from 'react';
import AddFortune from "./AddFortune.js";
import FortuneCard from "./FortuneCard.js";

function SeeAllFortunes(props) {
    let {fortunes} = props;
    const [isShowingFortunes, setIsShowingFortunes] = useState(false);

    return (
        <div className="fortunes">
            <button className="button" onClick={() => setIsShowingFortunes(!isShowingFortunes)}>⬇ Show all fortunes ⬇</button>
            <div id="fortunes" className={isShowingFortunes? "hidden" : "show"}>
                <h2 className="cursive">Fortunes:</h2>
                <AddFortune/>
                <div className="fortune-list">
                    {fortunes.map((fortune) => <FortuneCard fortune={fortune} key={fortune._id}/>)}
                </div>
            </div>
        </div>
    );
}

export default SeeAllFortunes;