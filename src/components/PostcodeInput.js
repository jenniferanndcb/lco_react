import React from "react";

const postcodesAPI = "https://api.postcodes.io/postcodes";

export default class PostcodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(postcodesAPI + "/" + this.state.value)
      .then(res => res.json())
      .then(data => console.log(data.result.admin_district));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter your postcode:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
