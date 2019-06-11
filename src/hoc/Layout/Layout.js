import React from 'react';

import Timer from '../../Components/Timer/Timer';
import Stats from '../../Components/Stats/Stats';
import Title from '../../Components/Title/Title';
import Gameboard from '../../Components/Gameboard/Gameboard';
import Fragment from '../../hoc/Fragment/Fragment';
import classes from '../../Components/Background/Background.css';

const Layout = (props) => (
    <Fragment>
        <div className={classes.mainboard}>
            <Stats/>
            <Timer/>
            <Title/>
            <Gameboard/>
            <main>
                {props.children}
            </main>
        </div>
    </Fragment>
);

export default Layout;