import React from 'react';

import Setup from '../Gameboard/Setup';
import classes from './Title.module.css';

const title = (props) => {
    return (
        <div className={classes.Title}>
            <Setup type="daytonaDriver"/>
        </div>
    )
};

export default title;