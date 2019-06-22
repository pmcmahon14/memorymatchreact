import React, {Component} from 'react';

//import Timer from '../../Components/Timer/Timer';
import Stats from '../../Components/Stats/Stats';
//import Title from '../../Components/Title/Title';
import Gameboard from '../../Components/Gameboard/Gameboard';
import Fragment from '../../hoc/Fragment/Fragment';
import classes from '../../Components/Background/Background.css';



class Layout extends Component {


    render() {
        return (
            <Fragment>
                <div className={classes.mainboard}>
                    <Stats/>
                    <Gameboard/>
                </div>
            </Fragment>
        )
    }
}


export default Layout;