import React from 'react';

import Setup from '../Gameboard/Setup';
import classes from './Title.module.css';

//title is game level displayed in yellow bar on gameboard, styled in module.css
const title = () => {
    return (
        <div className={classes.Title}>
            <Setup type="daytonaDriver"/>
        </div>
    )
};

export default title;