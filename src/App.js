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
      category: "",
      category1: "",
      feedback: ""
    }
  }

  submitHandler = event => {
    event.preventDefault()
    //handle the submit button here
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

  render() {
    return (
      <React.Fragment>
        <h1>COLE HAAN</h1>

        <form onSubmit={this.submitHandler}>
          <Question1 currentStep={this.state.currentStep} handleChange={this.handleChange} />
          <Question2 currentStep={this.state.currentStep} handleChange={this.handleChange} category={this.state.category} />
          <Question3 currentStep={this.state.currentStep} handleChange={this.handleChange} category1={this.state.category1} />
          <Question4 currentStep={this.state.currentStep} handleChange={this.handleChange} />
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

        </form>

        <div id="wrapper">
          <button className="btn color-button">Submit</button>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
