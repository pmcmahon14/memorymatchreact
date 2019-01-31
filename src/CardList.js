import React from 'react';
import Card from './Card';

const CardList = ({images}) => {
    return (
        <div>
            <Card driver={images[0].driver} car={images[0].car}/>
            <Card driver={images[1].driver} car={images[1].car}/>
            <Card driver={images[2].driver} car={images[2].car}/>
        </div>
    )
};

export default CardList;