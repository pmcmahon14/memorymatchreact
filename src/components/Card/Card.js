import React from 'react';

export const card = () => {
    return (
        <div>
            id={n}
            front={require('../../imagebank/drivers/alexbowman.png')}
            back={require('../../imagebank/logo.png')}
            flipped={flipped.includes(1)}
            handleClick={() => handleClick(1)}
        </div>
    )
};

//export default card;