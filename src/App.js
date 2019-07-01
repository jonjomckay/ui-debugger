import React, { Component } from 'react';
import { Card, Col, Nav, Row, Tab, Table } from 'react-bootstrap';

import data from './data';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Requests from './Requests';

class App extends Component {
    state = {
        data: data
    };

    render() {
        return (
            <Row noGutters>
                <Col className="min-vh-100">

                </Col>

                <Col className="min-vh-100 col-lg-4">
                    <Tab.Container defaultActiveKey="requests">
                        <Card className="border-top-0 border-bottom-0 rounded-0" style={{ height: '100%' }}>
                            <Card.Header>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="general">
                                            General
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="components">
                                            Components
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="errors">
                                            Errors
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="requests">
                                            Requests
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="log">
                                            Log
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>

                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="general">
                                        <Card.Title>Values (pre-commit)</Card.Title>

                                        <p>
                                            hi
                                        </p>

                                        <Card.Title>Values (committed)</Card.Title>

                                        <p>
                                            hi
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="components">
                                        Components
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="errors">
                                        Errors
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="requests">
                                        <h3 className="card-title">Requests</h3>

                                        <p>Some information about the requests made from your flow to any services</p>

                                        <Requests requests={ this.state.data.requests } />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="log">
                                        <h3 className="card-title">Log</h3>

                                        <p>A log of the events that occurred while processing updates to the current state</p>

                                        <Table striped size="sm">
                                            <thead>
                                            <tr>
                                                <th>When</th>
                                                <th>Message</th>
                                                <th>Data</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>2019-04-09T19:35:00</td>
                                                <td>Something blah blah</td>
                                                <td>
                                                    <span className="text-muted">n/a</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2019-04-09T19:35:04</td>
                                                <td>Another thing</td>
                                                <td>
                                                    <span className="text-muted">n/a</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2019-04-09T19:35:07</td>
                                                <td>The last thing blah</td>
                                                <td>
                                                    <span className="text-muted">n/a</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        );
    }
}

export default App;
