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
                    <DropdownItem tag='a' href='#'>Daytona Driver/Driver</DropdownItem>
                    <DropdownItem tag='b' href='#'>Charlotte Driver/Driver</DropdownItem>
                    <DropdownItem tag='c' href='#'>Bristol Driver/Driver</DropdownItem>
                    <DropdownItem tag='d' href='#'>Daytona Driver/Car</DropdownItem>
                    <DropdownItem tag='e' href='#'>Charlotte Driver/Car</DropdownItem>
                    <DropdownItem tag='f' href='#'>Bristol Driver/Car</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default menu;