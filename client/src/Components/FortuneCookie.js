import React, {useState} from 'react';
import {getRandomFortune} from '../APIConnection/ApiFunctions.js';
import fortuneCookie from '../Images/fortunecookie.jpg';
import OpenFortuneCookie from '../Images/fortunecookie_open.jpg';


function FortuneCookie({fortunes}) {
    const [selectedFortune, setSelectedFortune] = useState();
    const [cookieIsOpen, setCookieIsOpen] = useState();

    function openCookie() {
    }

    async function selectFortune() {
    }
    
    function resetCookie() {
    }

    return (
        <div className="open-fortune">
            <h1>🥠 Find your Fortune 🥠</h1>
            {/* <img src={} alt="fortune cookie" className="fortune-cookie"/> */}
            <h2 className="cursive fortune-text"></h2>
            <button className="button">Reset</button>
            <button className="button">Open the cookie</button>
        </div>
    );
}

export default FortuneCookie;