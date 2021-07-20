import React from "react";
import Buttons from "./Buttons/Buttons";
import Inputs from "./Input/Input";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            minVal: 0,
            maxVal: Infinity,
            step: 1,
        };
    }
    maxVal = (value) => {
        this.setState((state) => ({
            maxVal: value,
        }));
    };

    minVal = (value) => {
        this.setState((state) => ({
            minVal: value,
        }));
    };

    step = (value) => {
        this.setState((state) => ({
            step: value,
        }));
    };

    decreaseBtn = () => {
        if (this.state.count - this.state.step < this.state.minVal) {
            this.setState((state) => ({
                count: state.minVal,
            }));
        } else {
            this.setState((state) => ({
                count: state.count - state.step,
            }));
        }
    };

    increaseBtn = () => {
        if (
            Number(this.state.count) + Number(this.state.step) >
            this.state.maxVal
        ) {
            this.setState((state) => ({
                count: state.maxVal,
            }));
        } else {
            this.setState((state) => ({
                count: Number(state.count) + Number(state.step),
            }));
        }
    };

    resetBtn = () => {
        this.setState((state) => ({
            count: 0,
            minVal: 0,
            maxVal: Infinity,
            step: 1,
        }));
    };

    render() {
        return (
            <div className="counterDiv">
                <Buttons
                    onDecrease={this.decreaseBtn}
                    onIncrease={this.increaseBtn}
                    onReset={this.resetBtn}
                ></Buttons>
                <Inputs
                    state={this.state}
                    maxVal={this.maxVal}
                    minVal={this.minVal}
                    step={this.step}
                ></Inputs>
                <p>{this.state.count}</p>
            </div>
        );
    }
}
