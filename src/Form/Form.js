import { FormContainet } from "./Form.styled";
import React from "react";

class Form extends React.Component {
  state = { inputValue: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleSumbit(this.state.inputValue);
  };

  render() {
    return (
      <FormContainet onSubmit={this.onSubmit}>
        <input
          name="inputValue"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </FormContainet>
    );
  }
}

export default Form;
