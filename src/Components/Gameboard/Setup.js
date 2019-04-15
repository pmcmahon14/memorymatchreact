import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Setup extends Component {
    render () {
        let gamelevel = 'daytonaD/D';

        switch (this.props.type) {
            case ('daytonaD/D'):
                gamelevel = <div>Daytona Driver/Driver</div>;
                break;
            case ('charlotteD/D'):
                gamelevel = <div>Charlotte Driver/Driver</div>;
                break;
            case ('bristolD/D'):
                gamelevel = <div>Bristol Driver/Driver</div>;
                break;
            case ('daytonaD/C'):
                gamelevel = <div>Daytona Driver/Car</div>;
                break;
            case ('charlotteD/C'):
                gamelevel = <div>Charlotte Driver/Car</div>;
                break;
            case ('bristolD/C'):
                gamelevel = <div>Bristol Driver/Car</div>;
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