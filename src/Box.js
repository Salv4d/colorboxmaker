import { Component } from "react";

class Box extends Component {
  static defaultProps = {
    backgroundColor: "red",
    width: "150px",
    height: "100px",
  };
  render() {
    const { backgroundColor, width, height } = this.props;

    return (
      <div
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
    );
  }
}

export default Box;
