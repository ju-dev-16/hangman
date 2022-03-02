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
            <img src={list[0].src} alt={list[0].alt} width="75" height="75" className='px-1'/>
            <img src={list[1].src} alt={list[1].alt} width="75" height="75" className='px-1'/>
            <img src={list[2].src} alt={list[2].alt} width="75" height="75" className='px-1'/>
            <img src={list[3].src} alt={list[3].alt} width="75" height="75" className='px-1'/>
            <img src={list[4].src} alt={list[4].alt} width="75" height="75" className='px-1'/>
            <img src={list[5].src} alt={list[5].alt} width="75" height="75" className='px-1'/>
            <img src={list[6].src} alt={list[6].alt} width="75" height="75" className='px-1'/>
            <img src={list[7].src} alt={list[7].alt} width="75" height="75" className='px-1'/>
            <img src={list[8].src} alt={list[8].alt} width="75" height="75" className='px-1'/>
            <img src={list[9].src} alt={list[9].alt} width="75" height="75" className='px-1'/>
            <img src={list[10].src} alt={list[10].alt} width="75" height="75" className='px-1'/>
            <img src={list[11].src} alt={list[11].alt} width="75" height="75" className='px-1'/>
        </div>
    );
}
