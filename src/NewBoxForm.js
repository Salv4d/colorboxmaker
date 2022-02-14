import { Component } from "react";
import "./NewBoxForm.css";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
      color: "",
      width: "",
      height: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;

    this.setState(() => ({ [name]: value }));
  }

  handleSubmit(evt) {
    evt.preventDefault();

    console.log(evt.target);
  }

  render() {
    return (
      <div className="NewBoxForm">
        <form className="NewBoxForm-form" onSubmit={this.handleSubmit}>
          <label htmlFor="color">
            Color
            <input
              id="color"
              name="color"
              type="text"
              value={this.state.color}
              onChange={this.handleChange}
              placeholder="color name, #hex or rgb()"
            />
          </label>
          <label htmlFor="width">
            Width
            <input
              id="width"
              name="width"
              type="number"
              value={this.state.width}
              onChange={this.handleChange}
              placeholder="width in px"
            />
          </label>
          <label htmlFor="height">
            Height
            <input
              id="height"
              name="height"
              type="number"
              value={this.state.height}
              onChange={this.handleChange}
              placeholder="height in px"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
