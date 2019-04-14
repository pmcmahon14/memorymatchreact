import React, {Component} from 'react';
import PropTypes from 'prop-types';

class setup extends Component (props) {
    render () {

        switch (props.type) {
            case ('daytonaD/D'):
                gameboard = <div></div>;
                break;
            case ('charlotteD/D'):
                break;
            case ('bristolD/D'):
                break;
            case ('daytonaD/C'):
                break;
            case ('charlotteD/C'):
                break;
            case ('bristolD/C'):
                break;
        }
    }
}

export default setup;