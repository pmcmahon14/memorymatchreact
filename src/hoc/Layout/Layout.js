import React from 'react';

import Timer from '../../Components/Timer/Timer';
import Stats from '../../Components/Stats/Stats';
import Gameboard from '../../Components/Gameboard/Gameboard';
import Fragment from '../../hoc/Fragment/Fragment';
import Background from "../../Components/Background/Background";
import classes from '../../Components/Background/Background.css';

const Layout = (props) => (
    <Fragment>
        <div className={classes.mainboard}>
            <Stats/>
            <Timer/>
            <Gameboard/>
        </div>
    </Fragment>
);

export default Layout;