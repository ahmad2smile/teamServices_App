import React, { Component } from 'react';

class TRow extends Component {
    constructor(){
        super();
        this.state = { 
            toggle : false,
            rowHeight : 47
        };
    }

    rowInfoToggle(e) {
        let el = e.target.parentNode;
        el.style.height = this.state.toggle ? this.state.rowHeight + "px" : 
                                el.style.height = (this.state.rowHeight * 4) + "px";
        this.setState(prevState => ({toggle: !prevState.toggle}));
    }

    render() {

        let tdStyle = {
            borderColor: "blue"
        }

        let trStyle = {
            cursor: "pointer"
        }


        switch (this.props.currentState) {
            case "Pending":
                tdStyle.borderColor = "gray";
                trStyle.cursor = "not-allowed";
                break;

            case "Running":
                tdStyle.borderColor = "blue";
                break;

            case "Rejected":
                tdStyle.borderColor = "red";
                break;

            case "Accepted":
                tdStyle.borderColor = "green";
                break;

            case "Complete":
                tdStyle.borderColor = "green";
                break;

            default:
                break;
        }

        let tagData = {'data-id' : this.state.toggle};

        return (
            <tr style={trStyle} {...tagData} onClick={this.rowInfoToggle.bind(this)}>
                <td style={tdStyle} >{this.props.buildName}</td>
                <td style={tdStyle} >{this.props.ownerName}</td>
                <td style={tdStyle} >{this.props.timeStarted}</td>
                <td style={tdStyle} >{this.props.currentState}</td>
                <td style={tdStyle} >{this.props.metrics}</td>
                <td style={tdStyle} >{this.props.build}</td>
                <td style={tdStyle} >{this.props.unitTests}</td>
                <td style={tdStyle} >{this.props.functionalTests}</td>
            </tr>
        );
    }
}

export default TRow;