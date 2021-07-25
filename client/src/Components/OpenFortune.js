import React, {useState} from 'react';
import {getRandomFortune} from '../APIConnection/ApiFunctions.js';
import fortuneCookie from '../Images/fortunecookie.jpg';
import OpenFortuneCookie from '../Images/fortunecookie_open.jpg';


function OpenFortune({fortunes}) {
    const [selectedFortune, setSelectedFortune] = useState("");
    const [cookieIsOpen, setCookieIsOpen] = useState(false);

    function openCookie() {
        //select a fortune to display randomly
        if (!cookieIsOpen) {
            selectFortune();
        }
        //open cookie
        setCookieIsOpen(true);
    }

    async function selectFortune() {
        getRandomFortune().then((fortune) => {
            setSelectedFortune(fortune.fortuneName);
          });
    }
    
    function resetCookie() {
        setCookieIsOpen(false);
    }

    return (
        <div className="open-fortune">
            <h1>🥠 Find your Fortune 🥠</h1>
            <img src={cookieIsOpen ? OpenFortuneCookie : fortuneCookie} alt="unopened fortune cookie" className="fortune-cookie"/>
            <h2 className="cursive">{cookieIsOpen ? selectedFortune : ""}</h2>
            <button className="button" onClick={openCookie}>Open the cookie</button>
            <button className="button" onClick={resetCookie}>Reset</button>
        </div>
    );
}

export default OpenFortune;