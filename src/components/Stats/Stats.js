import React, {Component} from 'react';
import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

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
                    <Col>
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
                        <p>Matches<br/>0</p>
                    </Col>
                    <Col>
                        <p>Attempts<br/>0</p>
                    </Col>
                    <Col>
                        <p>Accuracy<br/>0</p>
                    </Col>
                    <Col>
                        <p>Wins<br/>0</p>
                    </Col>
                    <Col>
                        <button type='button' class='btn btn-danger'>Reset</button>
                    </Col>

                </Row>
            </Container>
        )
    }
};

export default Stats;