import React from 'react';

import {DropdownItem} from 'reactstrap';
//import classes from './BuildMenu.module.css';

//set const as function to dynamically build menu choices with Bootstrap 4 DropdownItem
//add classes later for each dropdown item
//data-level='Daytona Driver/Driver' data-cardCount='18' data-colWidth='2'
const buildMenu = ({label, id, handleClick}) => (
    <div>
        <DropdownItem onClick={handleClick}>{label}</DropdownItem>
    </div>
);

export default buildMenu;