import React, { Component } from 'react';
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      category: "website",
      category1: "new_arrivals",
      feedback: "",
      rating: "",
      goal: "",
      didSubmit: false
    }
  }

  submitHandler = event => {
    event.preventDefault()
    this.setState({ didSubmit: true })
  }

  next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  restartSurvey = (event) => {
    event.preventDefault()
    this.setState({
      currentStep: 1,
      category: "website",
      category1: "new_arrivals",
      feedback: "",
      rating: "",
      goal: "",
      didSubmit: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img className="ch_logo" src="https://fb-logo.userty.com/2760abac5cf96eb1db1b748a7997e40c/1560884648848.png" alt="Cole Haan" />
        </div>
        <form onSubmit={this.submitHandler}>
          <Question1 currentStep={this.state.currentStep} handleChange={this.handleChange} rating={this.state.rating} />
          <Question2 currentStep={this.state.currentStep} handleChange={this.handleChange} category={this.state.category} />
          <Question3 currentStep={this.state.currentStep} handleChange={this.handleChange} category1={this.state.category1} />
          <Question4 currentStep={this.state.currentStep} handleChange={this.handleChange} goal={this.state.goal} />
          <Question5 currentStep={this.state.currentStep} handleChange={this.handleChange} feedback={this.state.feedback} />


          <button
            className="btn btn-primary"
            type="button"
            onClick={this.prev}
            disabled={this.state.currentStep === 1}>
            Previous
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={this.next}
            disabled={this.state.currentStep < 1 || this.state.currentStep > 4}
            style={{ "float": "right" }}>
            Next
        </button>
          <div id="wrapper">
            <button className="btn color-button">Submit</button>
            <button onClick={this.restartSurvey} style={{ "marginLeft": "10px" }} className="btn color-button">Restart survey</button>
            <a className="logo" href="https://www.auryc.com/" title="Powered by Auryc" target="_blank" tabIndex="0">
              <span aria-hidden="true">Powered by</span>
              <img aria-hidden="true" src="https://fb-logo.auryc.com/dark-logo.svg" alt="Auryc" style={{ "width": "60px", "height": "20px" }} />
            </a>
          </div>
        </form>

        {this.state.didSubmit ? (<div>
          <h3>Feedback results</h3>
          <p>rating: {this.state.rating}</p>
          <p>category: {this.state.category}</p>
          <p>goal: {this.state.category1}</p>
          <p>ease of goal: {this.state.goal}</p>
          <p>feedback: {this.state.feedback}</p>
        </div>) : null}

      </React.Fragment>
    );
  }
}

export default App;
