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
                    <DropdownItem type='daytonaD/D' href='#'>Daytona Driver/Driver</DropdownItem>
                    <DropdownItem type='charlotteD/D' href='#'>Charlotte Driver/Driver</DropdownItem>
                    <DropdownItem type='bristolD/D' href='#'>Bristol Driver/Driver</DropdownItem>
                    <DropdownItem type='daytonaD/C' href='#'>Daytona Driver/Car</DropdownItem>
                    <DropdownItem type='charlotteD/C' href='#'>Charlotte Driver/Car</DropdownItem>
                    <DropdownItem tag='bristolD/C' href='#'>Bristol Driver/Car</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default menu;