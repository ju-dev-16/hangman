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

export default function Hearts({ currentHeart, setCurrentHeart, setState }) {
    const [list, setList] = useState([
        hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], 
        hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], 
        hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart'], hearts['filled-heart']
    ]);

    useEffect(() => {
        if (currentHeart) {
            for (let i = list.length - 1; i >= 0; i--) {
                if (list[i] === hearts['filled-heart']) {
                    list[i] = hearts['empty-heart'];
                    break;
                }
            }

            if (list.every(val => val === hearts['empty-heart'])) {
                setState([true, "You losed!"])
            }
            setCurrentHeart(false);
        }
    }, [currentHeart]);

    return (
        <div className='flex justify-center mt-80'>
            {list.map((heart, index) => <img key={index} src={heart.src} alt={heart.alt} width="65" height="65" className='px-1'/>)}
        </div>
    );
}