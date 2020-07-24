import React from "react"

const Question2 = (props) => {
    if (props.currentStep === 2) {
        return (
            <div className="form-group">
                <label htmlFor="category">Please choose a category you would like to leave feedback about</label>
                <select value={props.category} className="form-control" id="category" name="category" onChange={props.handleChange}>
                    <option value="website">Our website</option>
                    <option value="products">Our products</option>
                    <option value="locations">Our retail locations</option>
                </select>
            </div>
        );
    } else
        return null
}

export default Question2