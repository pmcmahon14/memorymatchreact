import React, {Component} from 'react';

import PropTypes from 'prop-types';
//import Menu from '../../Container/Menu/Menu';

//const gameLevel = document.querySelector("DropdownItem");

//preliminary switch statement for each of six levels plus stats page using class
class Setup extends Component {
    render () {
        //set gamelevel var to Daytona Driver/Driver to start session; may be changed later
        //<div> or a string?
        let gameLevel = <div>Daytona Driver/Driver</div>;
        console.log(gameLevel);
        //set cards and colwidth to 18 and 2 for above set level; each will be changed according to menu selection
        let cards = 18;
        let colWidth = 2;
        console.log(gameLevel);
        switch (this.props.type) {
            case ('daytonaDriver'):
                //cards = 18;
                //colWidth = 2;
                gameLevel = <div>Daytona Driver/Driver</div>;
                break;
            case ('charlotteDriver'):
                //cards = 12;
                //colWidth = 3;
                gameLevel = <div>Charlotte Driver/Driver</div>;
                break;
            case ('bristolDriver'):
                //cards = 8;
                //colWidth = 3;
                gameLevel = <div>Bristol Driver/Driver</div>;
                break;
            case ('daytonaCar'):
                //cards = 18;
                //colWidth = 2;
                gameLevel = <div>Daytona Driver/Car</div>;
                break;
            case ('charlotteCar'):
                //cards = 12;
                //colWidth = 3;
                gameLevel = <div>Charlotte Driver/Car</div>;
                break;
            case ('bristolCar'):
                //cards = 8;
                //colWidth = 3;
                gameLevel = <div>Bristol Driver/Car</div>;
                break;
            case ('stats'):
            //statspage;
                break;
            default:
                gameLevel = null;
        }
        console.log(gameLevel, cards, colWidth);
        return [gameLevel]
    }
}

//propTypes validation for switch result, is always string
Setup.propTypes = {
    type: PropTypes.string.isRequired
};

export default Setup;