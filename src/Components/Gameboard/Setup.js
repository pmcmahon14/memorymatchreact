import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Setup extends Component {
    render () {
        let gameboard = 'daytonaD/D';

        switch (this.props.type) {
            case ('daytonaD/D'):
                gameboard = <div><p>Daytonadriver</p></div>;
                break;
            case ('charlotteD/D'):
                gameboard = <div><p>Charlottedriver</p></div>;
                break;
            case ('bristolD/D'):
                gameboard = <div><p>Bristoldriver</p></div>;
                break;
            case ('daytonaD/C'):
                gameboard = <div><p>Daytonacar</p></div>;
                break;
            case ('charlotteD/C'):
                gameboard = <div><p>Charlottecar</p></div>;
                break;
            case ('bristolD/C'):
                gameboard = <div><p>Bristolcar</p></div>;
                break;
            default:
                gameboard = null;
        }
    }
}

Setup.propTypes = {
    type: PropTypes.string.isRequired
};

export default Setup;