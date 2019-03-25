import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    render() {
        return (
            <div className='Timer'>
                <p id='timer'>50</p>
            </div>
        )
    }
}

export default Timer;