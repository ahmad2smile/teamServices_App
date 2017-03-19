import React, { Component } from 'react';

class InfoBox extends Component {
    render() {

        let boxStyle = {
            width : "200px",
            height : "200px",
            background : "red",
            display: this.props.display
        }

        return (
            <div style={boxStyle} className="infoBox">  
            </div>
        );
    }
}

export default InfoBox;