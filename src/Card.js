import React from 'react';

const Card = (props) => {
    return (
        //tachyons here only for development
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/*<img alt='card' src='https://www.nascar.media/wp-content/uploads/sites/7/2017/01/1_2018_Chase_Elliott_550x440-380x290.png' />*/}
            <img alt='card' src={require(`./${props.driver}`)} />
            <div>
                <p>{props.car}</p>
            </div>
        </div>
    )
};

export default Card;