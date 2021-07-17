import React from "react";
import "./Buttons.css"

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    decreaseBtn = () => {
        if(this.state.count <= 0){

        }else{
            this.setState((state) => ({
                count: state.count - 1,
            }));
        };
        }
    increaseBtn = () => {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    };
    resetBtn = () => {
        this.setState((state) => ({
            count: 0,
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="buttonsDiv">
                    <button className="button" onClick={this.decreaseBtn}>-</button>
                    <button className="button" onClick={this.increaseBtn}>+</button>
                    <button className="button" onClick={this.resetBtn}>reset</button>
                </div>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Buttons;
