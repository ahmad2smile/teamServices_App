import React, { Component } from "react";

import Table from "./Table/Table.jsx";

export default class Layout extends Component {
    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav fixed">
                    <li><a href="#!">First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col l12 m12 s12">
                            <div className="row">
                                <div className="col l10 m10 s12 center-align">
                                    <Table />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}