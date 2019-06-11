import React, {Component} from 'react';

import PropTypes from 'prop-types';

//const gameLevel = document.querySelector("DropdownMenu");
//console.log(gameLevel);
let gamelevel = 'daytonaDriver';
console.log(gamelevel);


class Setup extends Component {
    render () {
        let cards = 18;
        console.log(gamelevel);

        switch (this.props.type) {
            case ('daytonaDriver'):
                cards = 18;
                return (<div>Daytona Driver/Driver</div>);
            case ('charlotteDriver'):
                cards = 12;
                return (<div>Charlotte Driver/Driver</div>);
            case ('bristolDriver'):
                cards = 8;
                return (<div>Bristol Driver/Driver</div>);
            case ('daytonaCar'):
                cards = 18;
                return (<div>Daytona Driver/Car</div>);
            case ('charlotteCar'):
                cards = 12;
                return (<div>Charlotte Driver/Car</div>);
            case ('bristolCar'):
                cards = 8;
                return (<div>Bristol Driver/Car</div>);
            default:
                gamelevel = null;
        }
        console.log(gamelevel, cards);
        return [cards];
    }
}

Setup.propTypes = {
    type: PropTypes.string.isRequired
};

export default Setup;