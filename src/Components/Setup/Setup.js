import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import classes from './Setup.module.css';

//preliminary switch statement for each of six levels plus stats page using class
class Setup extends Component {
    render () {
        //set gamelevel var to Daytona Driver/Driver to start session; may be changed later
        //<div> or a string?
        let gameLevel = 'Daytona Driver/Driver';
        //set cards and colWidth to 18 and 2 for above set level; each will be changed according to menu selection
        let cards = 18;
        let colWidth = 2;
        //set var = to (this.props.type) then var = type for if/else?
        /*switch (this.props.type) {
            case ('daytonaDriver'):
                //gameLevel = <div className={classes.DaytonaDriver}></div>;
                gameLevel = <div>Daytona Driver/Driver</div>;
                break;
            case ('charlotteDriver'):
                gameLevel = <div>Charlotte Driver/Driver</div>;
                break;
            case ('bristolDriver'):
                gameLevel = <div>Bristol Driver/Driver</div>;
                break;
            case ('daytonaCar'):
                gameLevel = <div>Daytona Driver/Car</div>;
                break;
            case ('charlotteCar'):
                gameLevel = <div>Charlotte Driver/Car</div>;
                break;
            case ('bristolCar'):
                gameLevel = <div>Bristol Driver/Car</div>;
                break;
            case ('stats'):
                gameLevel = <div>Full Stats</div>;
                break;
            default:
                gameLevel = null;
        }
        console.log(gameLevel);
        //console.log(gameLevel, cards, colWidth);
        return gameLevel;*/
        const level = (this.props.type);
        console.log(level);
        if (level === 'daytonaDriver') {
            gameLevel = 'Daytona Driver/Driver';
            cards = 18;
            colWidth = 2;
            console.log(gameLevel, cards, colWidth);
        } else if (level === 'charlotteDriver') {
            gameLevel = 'Charlotte Driver/Driver';
            cards = 12;
            colWidth = 3;
        } else if (level === 'bristolDriver') {
            gameLevel = <div>Bristol Driver/Driver</div>;
            cards = 8;
            colWidth = 3;
        } else if (level === 'daytonaCar') {
            gameLevel = <div>Daytona Driver/Car</div>;
            cards = 18;
            colWidth = 2;
        } else if (level === 'charlotteCar') {
            gameLevel = <div>Charlotte Driver/Car</div>;
            cards = 12;
            colWidth = 3;
        } else if (level === 'bristolCar') {
            gameLevel = <div>Bristol Driver/Car</div>;
            cards = 8;
            colWidth = 3;
        } else {
            console.log(gameLevel, cards, colWidth);
        }
        console.log(gameLevel, cards, colWidth);
        return [gameLevel]
    }
}

//propTypes validation for switch result, is always string
Setup.propTypes = {
    //use level: for if/else
    type: PropTypes.string.isRequired
};

export default Setup;