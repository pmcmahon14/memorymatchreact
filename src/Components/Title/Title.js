import React from 'react';

//import BuildControls from '../../../Container/Menu/BuildMenu/BuildMenu';
import classes from './Title.module.css';
import Setup from '../Setup/Setup';

//title is game level displayed in yellow bar on gameboard, styled in module.css
const title = (event) => {
    const changeLevel = "Daytona Driver/Driver";

        return (
                <div className={classes.Title}>
                    {changeLevel}
                </div>
        )
    };

//document.addEventListener("click", title);


/*const title = (props) => {
    const changeLevel = Object.keys(props.levels)
        .map(clKey => {
            return [...Array(props.levels[clKey])].slice(0,1);
        });
    console.log(changeLevel);
    return (
        <div className={classes.Title}>
            <Setup level="daytonaDriver"/>
            {changeLevel}
        </div>
    )
};

/*const title = (type) => {
    console.log(type);
    const changeLevel = Object.keys(type);
    console.log(changeLevel);

    return (
        <div className={classes.Title}>
            {changeLevel}
        </div>
    )
};*/

export default title;