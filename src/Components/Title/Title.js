import React from 'react';

import Setup from '../Gameboard/Setup';

const title = (props) => {
    return (
        <div>
            <Setup type='daytonaD/D'/>
            <Setup type='charlotteD/D'/>
            <Setup type='bristolD/D'/>
            <Setup type='daytonaD/C'/>
            <Setup type='charlotteD/C'/>
            <Setup type='bristolD/C'/>
        </div>
    )
};

export default title;