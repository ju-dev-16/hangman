import './index.css';
import React, { useState, useEffect } from 'react';
// import components
import Header from './components/Header';
import Hearts from './components/Hearts';
import Word from './components/Word';

function App() {
    const [currentHeart, setCurrentHeart] = useState(true);

    return ( 
        // Create a letter attribute and use window.addeventlistener
        <div className='bg-main h-screen text-second font-apple'>
            <Header />
            <Word />
            <Hearts currentHeart={currentHeart} setCurrentHeart={setCurrentHeart} />
        </div>
    ); 
}

export default App;