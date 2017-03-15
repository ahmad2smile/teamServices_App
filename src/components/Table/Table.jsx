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
    componentWillMount(){
        this.props.dispatch(fetchBuildStatus());
    }


    render() {        
        let TRows;
        if(this.props.fetched){
           TRows = this.props.buildData[0]
                .map((propData,i)=><TRow key={i} {...propData}/>);
        }
        
        // const build = ["Tenrox","jtuck","4/18/2015","Pending",1 ,0 , 1, 1];
        return (
            <table className="centered">
                <thead>
                    <tr>
                        <th>ChangeList / Build</th>
                        <th>Owner</th>
                        <th>Time Started</th>
                        <th>State</th>
                        <th>Metrics</th>
                        <th>Build</th>
                        <th>Unit Test</th>
                        <th>Functional Test</th>
                    </tr>
                </thead>

                <tbody>
                    {TRows}
                </tbody>
            </table>
        );
    }
}

export default Table;