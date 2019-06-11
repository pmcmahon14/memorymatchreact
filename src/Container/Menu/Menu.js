import React, {Component} from 'react';

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';



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

    render () {
        return (
            <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                <DropdownToggle caret>Menu</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem type='daytonaDriver' value='daytonaDriver' href='#'>Daytona Driver/Driver</DropdownItem>
                    <DropdownItem type='charlotteDriver' value='charlotteDriver' href='#'>Charlotte Driver/Driver</DropdownItem>
                    <DropdownItem type='bristolDriver' value='bristolDriver' href='#'>Bristol Driver/Driver</DropdownItem>
                    <DropdownItem type='daytonaCar' value='daytonaCar' href='#'>Daytona Driver/Car</DropdownItem>
                    <DropdownItem type='charlotteCar' value='charlotteCar' href='#'>Charlotte Driver/Car</DropdownItem>
                    <DropdownItem type='bristolCar' value='bristolCar' href='#'>Bristol Driver/Car</DropdownItem>
                    <DropdownItem type='fullStats' value='fullStats' href='#'>Stats</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default menu;