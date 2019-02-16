import React from 'react';
//import Container from './Container';

const Card = ({driver, car}) => {
    return (
        //tachyons here only for development
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='card' src={require(`./${driver}`)} />
            <div>
                <p>{car}</p>
            </div>
            <img alt='logo' src={require(`./imagebank/logo.png`)}/>
        </div>
    )
};

export default Card;