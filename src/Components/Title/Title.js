import React from 'react';
import {connect} from 'react-redux';

//import BuildControls from '../../../Container/Menu/BuildMenu/BuildMenu';
import classes from './Title.module.css';
import Setup from '../Setup/Setup';

//title is game level displayed in yellow bar on gameboard, styled in module.css
const Title = ({currentLevel}) => {

        return (
                <div className={classes.Title}>
                    {currentLevel}
                </div>
        )
    };



const mapStateToProps = state => ({
    currentLevel: state.level.currentLevel
});

export default connect(mapStateToProps)(Title);