import React, { useState, useEffect } from 'react';

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

export default function Hearts({ currentHeart, setCurrentHeart }) {
    const [list, setList] = useState([
        hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], 
        hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], 
        hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart']
    ]);

    useEffect(() => {
        if (currentHeart) {
            list[list.length - 1] = hearts['empty-heart']
            setCurrentHeart(false)
        }
    }, [currentHeart]);

    return (
        <div className='flex justify-center mt-80'>
            {list.map((heart) => {
                return <img src={heart.src} alt={heart.alt} width="75" height="75" className='px-1'/>
            })}
        </div>
    );
}
