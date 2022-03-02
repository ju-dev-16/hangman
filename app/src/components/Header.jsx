import React from 'react';

export default function Header() {
    return (
        <div className='text-center'>
            <h1 className='font-bold text-6xl pt-10 pb-5'>Hangman</h1>
            <p className='text-3xl'>Press a key to choose a letter</p>
        </div>
    );
}