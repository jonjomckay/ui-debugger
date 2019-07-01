import React, { Component } from 'react';
import classNames from 'classnames';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Collapse from 'react-bootstrap/Collapse';
import * as PropTypes from 'prop-types';

function getDurationClasses(duration) {
    return classNames({
        'text-danger': duration >= 300,
        'text-muted': duration >= 150 && duration < 300,
        'text-success': duration < 150
    });
}

function createDurationPopover(request) {
    return (
        <Popover title="Duration">
            <p>The request was made from a Flow instance in the <strong>{ request.sourceRegion }</strong> region and took <strong className={ getDurationClasses(request.duration) }>{ request.duration }ms</strong> to complete.</p>

            <small>
                <strong>Note:</strong> To give users the best experience, it's recommended that any requests take less than 150ms. Some tips on achieving this can be found <a href="https://example.com">here</a>.
            </small>
        </Popover>
    );
}

class Request extends Component {
    static propTypes = {
        request: PropTypes.any
    };

    state = {
        isOpen: false
    };

    onToggleCollapse = () => {
        this.setState((state) => {
            return {
                isOpen: !state.isOpen
            }
        });
    };

    render() {
        let { request } = this.props;

        const collapsibleRowClasses = classNames({
            'd-none': !this.state.isOpen,
            'row-collapsible': true
        });

        return (
            <React.Fragment>
                <tr>
                    <td title={ request.occurredAt }>
                        <a href="#" onClick={ this.onToggleCollapse }>
                            { distanceInWordsToNow(request.occurredAt) } ago
                        </a>
                    </td>
                    <td>{ request.service.developerName }</td>
                    <td>
                        <code className="text-body">{ request.type }</code>
                    </td>
                    <td>
                        <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={ createDurationPopover(request) }>
                            <code className={ "cursor-pointer " + getDurationClasses(request.duration) }>
                                { request.duration }ms
                            </code>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr className={ collapsibleRowClasses }>
                    <td colSpan={ 100 }>
                        <Collapse in={ this.state.isOpen }>
                            <div>
                                <dl className="mb-0">
                                    <dt>ID</dt>
                                    <dd>
                                        <code className="text-body">
                                            { request.id }
                                        </code>
                                    </dd>
                                </dl>

                                <dl className="mb-0" style={{ columns: 3 }}>
                                    <dt>Occurred At</dt>
                                    <dd>
                                        <code className="text-body">
                                            { request.occurredAt }
                                        </code>
                                    </dd>

                                    <dt>Type</dt>
                                    <dd>
                                        <code className="text-body">
                                            { request.type }
                                        </code>
                                    </dd>

                                    <dt>Duration</dt>
                                    <dd>
                                        <code className={ getDurationClasses(request.duration) }>
                                            { request.duration }ms
                                        </code>
                                    </dd>
                                </dl>

                                <dl>
                                    <dt>Content</dt>
                                    <dd>
                                        <a href="#">View content</a>
                                    </dd>

                                    <dt>Service</dt>
                                    <dd>
                                        { request.service.developerName } (<code className="text-body">{ request.service.id }</code>)
                                    </dd>

                                    <dt>URI</dt>
                                    <dd>
                                        <code className="text-body">
                                        { request.uri }
                                        </code>
                                    </dd>
                                </dl>
                            </div>
                        </Collapse>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default Request;
