import React from 'react';

import {UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import BuildMenu from './BuildMenu/BuildMenu';

//label and type object array to generate menu
//type must be same as case in switch statement

const levels = [
    {label: 'Daytona Driver/Driver', type: 'daytonaDriver'},
    {label: 'Charlotte Driver/Driver', type: 'charlotteDriver'},
    {label: 'Bristol Driver/Driver', type: 'bristolDriver'},
    {label: 'Daytona Driver/Car', type: 'daytonaCar'},
    {label: 'Charlotte Driver/Car', type: 'charlotteCar'},
    {label: 'Bristol Driver/Car', type: 'bristolCar'},
    {label: 'Stats', type: 'stats'}
];

const menu = (props) => (
    //render menu in Bootstrap 4 button with Dropdown props from reactstrap
            <UncontrolledDropdown size="sm">
                <DropdownToggle caret>Menu</DropdownToggle>
                <DropdownMenu>
                    {levels.map(lev => (
                        <BuildMenu
                            key={lev.label}
                            label={lev.label}
                            changedLevel={() => props.changed(lev.type)}
                        />
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
        );


export default menu;