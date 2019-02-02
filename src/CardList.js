import React from 'react';
import Card from './Card';

const CardList = ({images}) => {
    return (
        <div className='card'>
            {
                images.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            driver={images[i].driver}
                            car={images[i].car}
                        />
                    )
                })
            }
        </div>
    )
};

export default CardList;