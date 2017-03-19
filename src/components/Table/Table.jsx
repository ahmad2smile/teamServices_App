import React, { Component } from 'react';
import { connect } from "react-redux";

import TRow from "./TRow/TRow.jsx";
import { fetchBuildStatus } from "../../actions/buildActons.js";

@connect((store)=>{
    return {
        buildData: store.builds.buildData,
        fetched: store.builds.fetched
    };
})
class Table extends Component {
    constructor(){
        super();
    }

    componentWillMount(){
        this.props.dispatch(fetchBuildStatus());
    }


    render() {        
        let TRows;
        if(this.props.fetched){
           TRows = this.props.buildData[0]
                .map((propData,i) => <TRow key={i} {...propData}/>);
        }
        
        return (
            <divTable className="teamTable">
                <divHead>
                    <ul>
                        <li>ChangeList / Build</li>
                        <li>Owner</li>
                        <li>Time Started</li>
                        <li>State</li>
                        <li>Metrics</li>
                        <li>Build</li>
                        <li>Unit Test</li>
                        <li>Functional Test</li>
                    </ul>
                </divHead>

                <divBody>
                    {TRows}
                </divBody>
            </divTable>
        );
    }
}

export default Table;