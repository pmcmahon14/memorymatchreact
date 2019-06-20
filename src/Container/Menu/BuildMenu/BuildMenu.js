import React from 'react';

import {DropdownItem} from 'reactstrap';
//import classes from './BuildMenu.module.css';

//add classes later for each dropdown item
const buildMenu = (props) => (
    <div>
        <DropdownItem>{props.label}</DropdownItem>
    </div>
);

export default buildMenu;