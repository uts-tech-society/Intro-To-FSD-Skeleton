import React, {useState} from 'react';
import fortuneCookie from '../Images/fortunecookie.jpg';
import OpenFortuneCookie from '../Images/fortunecookie_open.jpg';


function OpenFortune({fortunes}) {
    const [selectedFortune, setSelectedFortune] = useState("");
    const [cookieIsOpen, setCookieIsOpen] = useState(false);

    function openCookie() {
        //open cookie
        setCookieIsOpen(true);

        //select a fortune to display randomly
        if (!cookieIsOpen) {
            selectFortune();
        }
    }

    function selectFortune() {
        //choose random number
        let index = Math.floor(Math.random()*fortunes.length);
        //make sure its not the same as the last one
        while (fortunes[index] === selectedFortune) {
            index = Math.floor(Math.random()*fortunes.length);
        }
        setSelectedFortune(fortunes[index]);
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