import React from "react"

const Question3 = (props) => {
    if (props.currentStep === 3) {
        return (
            <div className="form-group">
                <label htmlFor="category1">What was your goal for todays visit to ColeHaan.com</label>
                <select value={props.category1} className="form-control" id="category1" name="category1" onChange={props.handleChange}>
                    <option value="new_arrivals">Browse new arrivals</option>
                    <option value="specific_style">Find a specific style</option>
                    <option value="compare_products">Compare products</option>
                </select>
            </div>
        );
    } else
        return null
}

export default Question3