import React from 'react';

import {Col} from 'reactstrap';
import Stats from '../Stats/Stats';

class StatsDirectory extends React.Component {
    constructor() {
        super();

        this.state = {
            current: [
                {
                    heading: 'Matches',
                    count: 0,
                    id: 1
                },
                {
                    heading: 'Attempts',
                    count: 0,
                    id: 2
                },
                {
                    heading: 'Accuracy',
                    count: 0,
                    id: 3
                },
                {
                    heading: 'Wins',
                    count: 0,
                    id: 4
                }
            ]
        };
    }

    render() {
        return (
            <div>

                    {this.state.current.map(({heading, count, id}) => (
                        <Stats key={id} heading={heading} count={count} />
                    ))}


            </div>
        )
    }
}

export default StatsDirectory;