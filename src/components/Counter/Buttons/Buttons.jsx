import React from "react";
import "./Buttons.css";

class Buttons extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="buttonsDiv">
                    <button className="button" onClick={this.props.onDecrease}>
                        -
                    </button>
                    <button className="button" onClick={this.props.onIncrease}>
                        +
                    </button>
                    <button className="button" onClick={this.props.onReset}>
                        reset
                    </button>
                    
                </div>
                
            </div>
        );
    }
}

export default Buttons;
