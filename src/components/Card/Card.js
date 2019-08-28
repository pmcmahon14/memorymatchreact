import React from 'react';
import PropTypes from 'prop-types';

import './Card.module.css';

export default function card({
    handleClick,
    id,
    flipped,
    type,
    disabled,
    solved
}) {
    return (
        <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        onClick={() => (disabled ? null : handleClick(id))}
        >
            <div className='flipper'>
            <img
                alt='card'
                className={flipped ? 'front' : 'back'}
                //include images as source for front and back 27
                src={flipped || solved ? `/img/drivers/${type}.png` : '/img/logo.png'}
            />
            </div>
        </div>
    )
};

card.propTypes = {
    type: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired
};