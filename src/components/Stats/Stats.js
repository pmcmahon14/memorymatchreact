import React, {Component} from 'react';
import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './Stats.css';
//TODO FIX PROBLEM WITH BUTTON SIZING UPON CHANGING SCREEN SIZES
class Stats extends Component {
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
            <Container fluid>
                <Row>
                    <Col className='stats'>
                        <Dropdown group isOpen={this.state.dropdownOpen} size="md" toggle={this.toggle}>                        <DropdownToggle caret>Menu</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag='a' href='#'>Daytona Easy</DropdownItem>
                            <DropdownItem tag='a' href='#'>Daytona Hard</DropdownItem>
                            <DropdownItem tag='a' href='#'>Charlotte Easy</DropdownItem>
                            <DropdownItem tag='a' href='#'>Charlotte Hard</DropdownItem>
                            <DropdownItem tag='a' href='#'>Bristol Easy</DropdownItem>
                            <DropdownItem tag='a' href='#'>Bristol Hard</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <p className='stats'>Matches<br/>0</p>
                    </Col>
                    <Col>
                        <p className='stats'>Attempts<br/>0</p>
                    </Col>
                    <Col>
                        <p className='stats'>Accuracy<br/>0</p>
                    </Col>
                    <Col>
                        <p className='stats'>Wins<br/>0</p>
                    </Col>
                    <Col className='stats'>
                        <button type='button' class='btn btn-danger'>Reset</button>
                    </Col>

                </Row>
            </Container>
        )
    }
};

export default Stats;