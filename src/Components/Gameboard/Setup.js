import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Menu from '../../Container/Menu/Menu';

//const gameLevel = document.querySelector("DropdownItem");

class Setup extends Component {
    render () {
        let gamelevel = <div>Daytona Driver/Driver</div>;
        console.log(gamelevel);

        let cards = 18;
        let colWidth = 2;
        console.log(gamelevel);
        switch (this.props.type) {
            case ('daytonaDriver'):
                //cards = 18;
                //colWidth = 2;
                gamelevel = <div>Daytona Driver/Driver</div>;
                break;
            case ('charlotteDriver'):
                //cards = 12;
                //colWidth = 3;
                gamelevel = <div>Charlotte Driver/Driver</div>;
                break;
            case ('bristolDriver'):
                //cards = 8;
                //colWidth = 3;
                gamelevel = <div>Bristol Driver/Driver</div>;
                break;
            case ('daytonaCar'):
                //cards = 18;
                //colWidth = 2;
                gamelevel = <div>Daytona Driver/Car</div>;
                break;
            case ('charlotteCar'):
                //cards = 12;
                //colWidth = 3;
                gamelevel = <div>Charlotte Driver/Car</div>;
                break;
            case ('bristolCar'):
                //cards = 8;
                //colWidth = 3;
                gamelevel = <div>Bristol Driver/Car</div>;
                break;
            case ('stats'):
                //statspage;
            default:
                gamelevel = null;
        }
        console.log(gamelevel, cards, colWidth);
        return [gamelevel];
    }
}

Setup.propTypes = {
    type: PropTypes.string.isRequired
};

export default Setup;