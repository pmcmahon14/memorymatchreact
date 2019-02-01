import React from 'react';

const Card = ({driver, car}) => {
    return (
        //tachyons here only for development
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 col-xs-2'>
            <img className='img-responsive img-thumbnail' alt='card' src={require(`./${driver}`)} />
            <div>
                <p>{car}</p>
            </div>
        </div>
    )
};

export default Card;