import { Component } from "react";
import "./Box.css";

class Box extends Component {
  static defaultProps = {
    backgroundColor: "red",
    width: "150px",
    height: "100px",
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeBox(this.props.boxId);
  }

  render() {
    const { backgroundColor, width, height } = this.props;

    return (
      <div className="Box">
        <div
          style={{
            backgroundColor: backgroundColor,
            width: `${width}px`,
            height: `${height}px`,
          }}
        ></div>
        <button onClick={this.handleClick}>Remove Box</button>
      </div>
    );
  }
}

export default Box;
