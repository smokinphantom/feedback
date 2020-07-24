import React from "react"

const Question5 = (props) => {
    if (props.currentStep === 5) {

        return (
            <div className="form-group">
                <label htmlFor="feedback">Please share your feedabck</label>
                <textarea class="form-control" rows="5" id="feedback" name="feedback" value={props.feedback} onChange={props.handleChange} />
            </div>
        );
    } else
        return null
}

export default Question5