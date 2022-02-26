import './index.css';
import React, { useState } from 'react';

const words = ["judev", "madu", "schauriq"];

const hearts = {
    "filled-heart": {
        src: "assets/filled-heart.png",
        alt: "Filed Heart"
    },
    "empty-heart": {
        src: "assets/empty-heart.png",
        alt: "Empty Heart"
    }
}

function Heart(props) {
    return (
        <div className='px-1 py-10'>
            <img src={props.src} alt={props.alt} width="50" height="50" />
        </div>
    );
}

function HeartProvider() {
    const [heart, setHeart] = useState({
        src: hearts['filled-heart'].src,
        alt: hearts['filled-heart'].alt
    });

    return (
        <div className='flex justify-end pr-10'>
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
            <Heart src={heart.src} alt={heart.alt} />
        </div>
    );
}

function Word(props) {
    const word = words[Math.floor(Math.random()*words.length)].length;
    
    return (
        <p className='text-8xl font-bold p-28'>{"_ ".repeat(word)}</p>
    );
}

function Letters() {
    const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ];

    return (
        <>
            {letters.map(letter => <button key={letter} className='m-1 px-6 py-1 text-white bg-second rounded-xl'> {letter} </button>)}
        </>
    );
}

function App() {
    return ( 
        <div className='bg-main h-screen text-center'>
            <HeartProvider />
            <Word />
            <Letters />
        </div>
    );
}

export default App;