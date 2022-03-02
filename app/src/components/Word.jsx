import React, { useState, useEffect } from 'react';

const words = ["Java", "Coding", "Design", "Hello World"];
const word = words[Math.floor(Math.random()*words.length)].length;

export default function Word({ letter }) {
    const [chars, setChars] = useState([]);
    const [currentWord, setCurrentWord] = useState([]);

    useEffect(() => {
        for (let i = 0; i < word; i++) {
            chars.push(" _ ")
            setCurrentWord([...chars])
        }
    }, []);

    return (
        <span className='text-7xl font-bold flex justify-center mt-52'>{currentWord}</span>
    );
}