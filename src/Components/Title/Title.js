import React from 'react';

import Setup from '../Gameboard/Setup';
import classes from './Title.module.css';

const title = (props) => {
    return (
        <div className={classes.Title}>
            <Setup type='daytonaD/D'/>
            <Setup type='charlotteD/D'/>
            <Setup type='bristolD/D'/>
            <Setup type='daytonaD/C'/>
            <Setup type='charlotteD/C'/>
            <Setup type='bristolD/C'/>
        </div>
    )
};

export default title;