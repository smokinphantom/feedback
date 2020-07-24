import React from "react"

const Question1 = (props) => {
    if (props.currentStep === 1) {
        return (
            <div className="form-group" style={{ "width": "fit-content" }}>
                <span>How likely are you to recommend Cole Haan to a friend of colleague?</span><span style={{ "color": "red" }}>*</span>
                <div class="radio-group" onChange={props.handleChange}>

                    <input type="radio" name="rating" value="0" id="radio-0" checked={props.rating === "0"} />
                    <label htmlFor="radio-0" class="radio-inline">0</label>

                    <input type="radio" name="rating" value="1" id="radio-1" checked={props.rating === "1"} />
                    <label htmlFor="radio-1" class="radio-inline">1</label>

                    <input type="radio" name="rating" value="2" id="radio-2" checked={props.rating === "2"} />
                    <label htmlFor="radio-2" class="radio-inline">2</label>

                    <input type="radio" name="rating" value="3" id="radio-3" checked={props.rating === "3"} />
                    <label htmlFor="radio-3" class="radio-inline">3</label>

                    <input type="radio" name="rating" value="4" id="radio-4" checked={props.rating === "4"} />
                    <label htmlFor="radio-4" class="radio-inline">4</label>

                    <input type="radio" name="rating" value="5" id="radio-5" checked={props.rating === "5"} />
                    <label htmlFor="radio-5" class="radio-inline">5</label>

                    <input type="radio" name="rating" value="6" id="radio-6" checked={props.rating === "6"} />
                    <label htmlFor="radio-6" class="radio-inline">6</label>

                    <input type="radio" name="rating" value="7" id="radio-7" checked={props.rating === "7"} />
                    <label htmlFor="radio-7" class="radio-inline">7</label>

                    <input type="radio" name="rating" value="8" id="radio-8" checked={props.rating === "8"} />
                    <label htmlFor="radio-8" class="radio-inline">8</label>

                    <input type="radio" name="rating" value="9" id="radio-9" checked={props.rating === "9"} />
                    <label htmlFor="radio-9" class="radio-inline">9</label>

                    <input type="radio" name="rating" value="10" id="radio-10" checked={props.rating === "10"} />
                    <label htmlFor="radio-10" class="radio-inline">10</label>
                </div>

                <div style={{ "display": "flow-root" }}>
                    <div className="left">Not at all likely</div>
                    <div className="right">Extremely likely</div>
                </div>
            </div>
        );
    }
    else return null
}

export default Question1