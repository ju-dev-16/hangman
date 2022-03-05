import React, { useState, useEffect, useCallback } from 'react';

const words = ["Java", "Coding", "Design", "Hello World"];
const word = words[Math.floor(Math.random()*words.length)];

export default function Word({ setCurrentHeart }) {
    const [chars, setChars] = useState([" _ ".repeat(word.length)]);

    const handleUserKeyPress = useCallback(event => {
        const { key } = event;
        if (word.includes(key)) {
            const i = word.indexOf(key);
            setChars(chars => chars[i] = key);
        } else {
            setCurrentHeart(true)
        }
    });

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]); 

    return <span className='text-7xl font-bold flex justify-center mt-52'>{chars}</span>
}