import './index.css';
import React, { useState } from 'react';
// import components
import Header from './components/Header';
import Hearts from './components/Hearts';
import Word from './components/Word';

function App() {
    const [currentHeart, setCurrentHeart] = useState(false);

    return ( 
        <div className='bg-main h-screen text-second font-apple'>
            <Header />
            <Word setCurrentHeart={setCurrentHeart} />
            <Hearts currentHeart={currentHeart} setCurrentHeart={setCurrentHeart} />
        </div>
    ); 
}

export default App;