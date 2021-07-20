import React from "react";
import "./Input.css";
export default class Inputs extends React.Component {
    onMaxVal = (e) => {
        if(this.props.state.count > this.props.state.maxVal){
            this.props.state.count = e.target.value
        }
        this.props.maxVal(e.target.value);
    };
    onMinVal = (e) => {
        this.props.minVal(e.target.value);
    };
    onStep = (e) => {
        this.props.step(e.target.value);
    };

    render() {
        return (
            <div className="inputDiv">
                <input
                    className="inputs"
                    type="number"
                    placeholder="minimum value"
                    onChange={this.onMinVal}
                ></input>
                <input
                    className="inputs"
                    type="number"
                    placeholder="maximum value"
                    onChange={this.onMaxVal}
                ></input>
                <input
                    className="inputs"
                    type="number"
                    placeholder="step"
                    onChange={this.onStep}
                ></input>
            </div>
        );
    }
}
