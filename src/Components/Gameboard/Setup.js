import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Setup extends Component {
    render () {
        let gamelevel = 'daytonaD/D';
        let cards = 18;

        switch (this.props.type) {
            case ('daytonaD/D'):
                gamelevel = <div>Daytona Driver/Driver</div>;
                cards = 18;
                break;
            case ('charlotteD/D'):
                gamelevel = <div>Charlotte Driver/Driver</div>;
                cards = 12;
                break;
            case ('bristolD/D'):
                gamelevel = <div>Bristol Driver/Driver</div>;
                cards = 8;
                break;
            case ('daytonaD/C'):
                gamelevel = <div>Daytona Driver/Car</div>;
                cards = 18;
                break;
            case ('charlotteD/C'):
                gamelevel = <div>Charlotte Driver/Car</div>;
                cards = 12;
                break;
            case ('bristolD/C'):
                gamelevel = <div>Bristol Driver/Car</div>;
                cards = 8;
                break;
            default:
                gamelevel = null;
        }
        return gamelevel;
    }
}

Setup.propTypes = {
    type: PropTypes.string.isRequired
};

export default Setup;