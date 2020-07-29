import React from "react"

const Question5 = (props) => {
    if (props.currentStep === 5) {

        return (
            <div className="form-group">
                <label htmlFor="feedback">Please share your feedback.</label>
                <textarea placeholder="Your answer" className="form-control" rows="5" id="feedback" name="feedback" value={props.feedback} onChange={props.handleChange} />
                <div style={{ "display": "flow-root" }}>
                    <div className="right">1000 characters left</div>
                </div>
            </div>
        );
    } else
        return null
}

export default Question5