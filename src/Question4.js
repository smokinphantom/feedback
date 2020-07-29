import React from "react"

const Question4 = (props) => {
    if (props.currentStep === 4) {
        const values = [{ name: "v_difficult", value: "Very Difficult" },
        { name: "difficult", value: "Difficult" },
        { name: "medium", value: "Not difficult nor Easy" },
        { name: "easy", value: "Easy" },
        { name: "v_easy", value: "Very Easy" }]

        const inputs = values.map((obj, index) => {

            return (<div key={"goal" + index} className="radio">
                <label><input onChange={props.handleChange} type="radio" name="goal" value={obj.name} checked={props.goal === obj.name} />{obj.value}</label>
            </div>)
        })
        return (
            <div className="form-group">
                <span>How easy was it to accomplish that goal?</span>
                {inputs}
            </div>
        );
    } else
        return null
}

export default Question4