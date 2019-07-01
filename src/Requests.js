import React from 'react';
import { Table } from 'react-bootstrap';
import Request from './Request';

export default class Requests extends React.Component {
    render() {
        const requests = this.props.requests.map(request => (
            <Request key={ request.id } request={ request } />
        ));

        return (
            <Table className="table-striped-with-hidden" size="sm">
                <thead>
                <tr>
                    <th>When</th>
                    <th>Service</th>
                    <th>Type</th>
                    <th>Duration</th>
                </tr>
                </thead>

                <tbody>
                { requests }
                </tbody>
            </Table>
        );
    }
}
