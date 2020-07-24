import React from "react"

const Question4 = (props) => {
    if (props.currentStep === 4) {
        return (
            <div className="form-group">
                <div class="radio">
                    <label><input type="radio" name="optradio" />Very difficult</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" />Difficult</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="optradio" />Not difficult nor easy</label>
                </div>
            </div>
        );
    } else
        return null
}

export default Question4