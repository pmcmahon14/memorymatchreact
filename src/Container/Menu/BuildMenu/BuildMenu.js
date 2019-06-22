import React from 'react';

import {DropdownItem} from 'reactstrap';
//import classes from './BuildMenu.module.css';

//set const as function to dynamically build menu choices with Bootstrap 4 DropdownItem
//add classes later for each dropdown item
const buildMenu = (props) => (
    <div>
        <DropdownItem  onClick={props.change}>{props.label}</DropdownItem>
    </div>
);

export default buildMenu;