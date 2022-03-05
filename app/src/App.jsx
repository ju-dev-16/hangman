import './index.css';
import React, { useState } from 'react';
// import components
import Header from './components/Header';
import Hearts from './components/Hearts';
import Word from './components/Word';
// import models
import Popup from './components/models/Popup';

function App() {
    const [currentHeart, setCurrentHeart] = useState(false);
    const [popup, setPopup] = useState([false, ""]);

    return ( 
        <div className='bg-main h-screen text-second font-apple'>
            <Header />
            <Word setCurrentHeart={setCurrentHeart} setState={setPopup} />
            <Hearts currentHeart={currentHeart} setCurrentHeart={setCurrentHeart} setState={setPopup} />
            <Popup state={popup} />
        </div>
    ); 
}

export default App;