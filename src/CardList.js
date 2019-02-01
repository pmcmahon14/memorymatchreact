import React from 'react';
import Card from './Card';

const CardList = ({images}) => {
    const cardComponent = images.map((user, i) => {
        return <Card driver={images[i].driver} car={images[i].car}/>
    });
    return (
        <div>
            {cardComponent}
        </div>
    )
};

export default CardList;