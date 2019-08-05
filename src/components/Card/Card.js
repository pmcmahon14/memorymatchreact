import React from 'react';
import PropTypes from 'prop-types';

import './Card.module.css';

export default function card({
    handleClick,
    id,
    flipped,
    back,
    front
}) {
    return (
        <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        onClick={() => handleClick(id)}
        >
            <div className='flipper'>
            <img
                alt='card'
                className={flipped ? 'front' : 'back'}
                //include images as source for front and back 27
                src={flipped ? front : back}
            />
            </div>
        </div>
    )
};

card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
};