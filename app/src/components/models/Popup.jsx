import React from 'react';

export default function Popup({ state }) {
    return (
        <>
            {state[0] && (
                <div className='fixed w-1/3 h-1/4 top-1/3 left-1/3'>
                    <div className='bg-second text-white fixed w-1/3 h-1/4 top-1/3 left-1/3 rounded-lg font-bold text-center'>
                        <h1 className='text-5xl my-12'>{state[1]}</h1>
                        <button className='bg-white text-second font-bold rounded-md px-5 py-2' onClick={() => window.location.reload()}>Play again</button>
                    </div>
                </div>
            )}
        </>
    );
}