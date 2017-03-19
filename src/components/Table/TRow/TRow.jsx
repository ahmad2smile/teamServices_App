import React, { Component } from 'react';

import InfoBox  from "./InfoBox/InfoBox.jsx";

class TRow extends Component {
    constructor() {
        super();
        this.state = {
            toggle: 0,
            rowHeight: 42,
            boxDisplay: false
        };
    }

    rowInfo(row, anyToggle){
        !anyToggle ? row.style.height = this.state.rowHeight + "px" :
            row.style.height = (this.state.rowHeight * 6.3) + "px";
        row.dataset.togglestate = anyToggle;
        this.setState(prevState => ({ toggle: anyToggle }));
    }

    rowInfoToggle(e) {
        let elRow = e.target.parentNode;
        let allRows = document.getElementsByTagName("ul");
        let anyToggle = 0;
        let toggledEle = elRow; //placeholder for same type

        [...allRows].forEach(function(element) {
            let eleState = parseInt(element.dataset.togglestate);
            if(eleState){
                anyToggle = 1;
                toggledEle = element;
            }
        }, this);
        if(anyToggle){
            var infoBoxes = toggledEle.getElementsByClassName("infoBox");
            [...infoBoxes].forEach(function(element) {
                element.style.display = "none";
                console.log(element);
            }, this);
            this.rowInfo(toggledEle, 0);
        }
        else this.rowInfo(elRow, 1);
    }

    render() {

        let trStyle = {
            cursor: "pointer",
            borderColor: "gray",
            backgroundColor: "rgba(0, 0, 0, 0.05)"
        }


        switch (this.props.currentState) {
            case "Pending":
                trStyle.cursor = "not-allowed";
                break;

            case "Running":
                trStyle.borderColor = "blue";
                trStyle.backgroundColor = "rgba(0, 0, 255, 0.05)";
                break;

            case "Rejected":
                trStyle.borderColor = "red";
                trStyle.backgroundColor = "rgba(255, 0, 0, 0.05)";
                break;

            case "Accepted":
                trStyle.borderColor = "green";
                trStyle.backgroundColor = "rgba(0, 255, 0, 0.05)";
                break;

            case "Complete":
                trStyle.borderColor = "green";
                trStyle.backgroundColor = "rgba(0, 255, 0, 0.05)";
                break;

            default:
                break;
        }

        let tagData = { 'data-togglestate': this.state.toggle };


        let boxDisplay = this.state.toggle ? "block" : "none";

        return (
            <ul style={trStyle} {...tagData} onClick={this.rowInfoToggle.bind(this)}>
                <li>{this.props.buildName}</li>
                <li>{this.props.ownerName}</li>
                <li>{this.props.timeStarted}</li>
                <li>{this.props.currentState}</li>
                <li>{this.props.metrics}</li>
                <li>{this.props.build}</li>
                <li>{this.props.unitTests}</li>
                <li>{this.props.functionalTests}</li>
                <div className="infoBoxes">
                    <InfoBox key={1} display={boxDisplay}/>
                    <InfoBox key={2} display={boxDisplay}/>
                    <InfoBox key={3} display={boxDisplay}/>
                    <InfoBox key={4} display={boxDisplay}/>
                    <InfoBox key={5} display={boxDisplay}/>
                </div>
            </ul>
        );
    }
}

export default TRow;