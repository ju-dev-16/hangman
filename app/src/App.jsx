import './index.css';
import React, { useState, useContext, createContext, useEffect } from 'react';

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

const GameContext = createContext();

function GameProvider({children}) {
    const [heart, setHeart] = useState({
        src: hearts['filled-heart'].src,
        alt: hearts['filled-heart'].alt
    });

    const word = words[Math.floor(Math.random()*words.length)];
    const [chars, setChars] = useState([" _ ".repeat(word.length)]);
    const [currentChar, setCurrentChar] = useState();

    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    return (
        <GameContext.Provider value={{
            heart: heart, 
            setHeart: setHeart, 
            chars: chars, 
            setChars: setChars, 
            currentChar: currentChar,
            setCurrentChar: setCurrentChar,
            word: word, 
            letters: letters}}>
            {children}
        </GameContext.Provider>
    );
}

function Heart() {
    const { heart } = useContext(GameContext);

    return (
        <div className='px-1 py-10'>
            <img src={heart.src} alt={heart.alt} width="50" height="50" />
        </div>
    );
}

function HeartBoard() {
    return (
        <div className='flex justify-end pr-10'>
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
            <Heart />
        </div>
    );
}

function WordBoard() {
    const { chars, currentChar, word } = useContext(GameContext);

    useEffect(() => {
        chars.map(char => {
            const found = () => {
                if (word.substring(chars.length) === currentChar) {
                    // do here next
                }
            }

            chars[found] = currentChar;
        });
    });

    return (
        <p className='text-6xl font-bold p-28'>{chars}</p>
    );
}

function LetterButtons() {
    const { letters, setCurrentChar} = useContext(GameContext);

    return (
        <>
            {letters.map(letter => {
                return <button key={letter} className='m-1 px-6 py-1 text-white bg-second rounded-xl' onClick={() => setCurrentChar(letter)}> {letter} </button>
            })}
        </>
    );
}

function App() {
    return ( 
        <div className='bg-main h-screen text-center'>
            <GameProvider>
                <HeartBoard />
                <WordBoard />
                <LetterButtons />
            </GameProvider>
        </div>
    );
}

export default App;