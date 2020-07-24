import React from "react"

const Question4 = (props) => {
    if (props.currentStep === 4) {
        return (
            <div className="form-group" onChange={props.handleChange}>
                <span>How easy was it to accomplish that goal?</span>
                <div class="radio">
                    <label><input type="radio" name="goal" value="v_difficult" checked={props.goal === "v_difficult"} />Very difficult</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="goal" value="difficult" checked={props.goal === "difficult"} />Difficult</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="goal" value="medium" checked={props.goal === "medium"} />Not difficult nor easy</label>
                </div>
            </div>
        );
    } else
        return null
}

export default Question4