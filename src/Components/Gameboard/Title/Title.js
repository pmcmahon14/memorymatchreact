import React from 'react';

import Setup from '../Setup/Setup';
import classes from './Title.module.css';


//title is game level displayed in yellow bar on gameboard, styled in module.css
const title = (props) => {
    const changeLevel = Object.keys(props.levels)
        .map(clKey => {
            return [...Array(props.levels[clKey])].slice(0,1);
        });
    console.log(changeLevel);
    return (
        <div className={classes.Title}>
            {changeLevel}
        </div>
    )
};

export default title;