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

function HeartStates() {
    const [heart, setHeart] = useState({
        src: hearts['filled-heart'].src,
        alt: hearts['filled-heart'].alt
    });

    /*
    const [heartState, setHeartState] = useState(true);

    useEffect(() => {
        if (!heartState) {
            setHeart({
                src: hearts['empty-heart'].src,
                alt: hearts['empty-heart'].alt
            });
        } else {
            setHeart({
                src: hearts['filled-heart'].src,
                alt: hearts['filled-heart'].alt
            });
        }
    });

    const checkState = () => {
        if (heartState) {
            setHeartState(false)
        } else {
            setHeartState(true)
        }
    }*/

    return (
        <div className='flex'>
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
    return (
        <p className='text-6xl font-bold'>{"_" * props.length}</p>
    );
}

function DisplayWords() {
    const word = words[Math.floor(Math.random()*words.length)].length

    return (
        <Word length={word} />
    );
}

function App() {
    return ( 
        <div className='bg-main h-screen text-center'>
            <h1 className='font-bold text-4xl text-second pt-10'>Your life</h1>
            <div className='flex justify-center'>
                <HeartStates />
            </div>
            <DisplayWords />
        </div>
    );
}

export default App;