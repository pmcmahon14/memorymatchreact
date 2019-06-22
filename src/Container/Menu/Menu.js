import React, {Component} from 'react';

import {Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
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

class menu extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    //render menu in Bootstrap 4 button with Dropdown props from reactstrap
    render () {
        return (
            <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                <DropdownToggle caret>Menu</DropdownToggle>
                <DropdownMenu>
                    {/*map through levels array to generate menu*/}
                    {levels.map(lev => (
                        <BuildMenu
                            key={lev.label}
                            label={lev.label}
                        />
                    ))}
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default menu;