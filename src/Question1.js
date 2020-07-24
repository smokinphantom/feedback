import React from "react"

const Question1 = (props) => {
    if (props.currentStep === 1) {
        return (
            <div className="form-group">
                <p>How likely are you to recommend Cole Haan to a friend of colleague? *</p>
                <div class="radio-group">
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />0
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />1
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />2
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />3
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />4
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />5
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />6
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />7
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />8
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />9
                </label>
                    <label class="radio-inline">
                        <input type="radio" name="optradio" />10
                </label>
                </div>
                <p className="">Not at all likely</p>
                <p className="">Extremely likely</p>
            </div>
        );
    }
    else return null
}

export default Question1