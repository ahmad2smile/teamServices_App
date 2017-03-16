import React, { Component } from 'react';

class TRow extends Component {
    render() {        
        return (
            <tr>
                <td>{this.props.buildName}</td>
                <td>{this.props.ownerName}</td>
                <td>{this.props.timeStarted}</td>
                <td>{this.props.currentState}</td>
                <td>{this.props.metrics}</td>
                <td>{this.props.build}</td>
                <td>{this.props.unitTests}</td>
                <td>{this.props.functionalTests}</td>
            </tr>
        );
    }
}

export default TRow;