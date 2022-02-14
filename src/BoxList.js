import { Component } from "react";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: [{ backgroundColor: "violet", width: "150px", height: "231px" }],
    };
  }

  render() {
    console.log(this.state.boxList);
    return (
      <div>
        {this.state.boxList.map((val, idx) => (
          <Box
            key={idx}
            backgroundColor={val.backgroundColor}
            width={val.width}
            height={val.height}
          />
        ))}
      </div>
    );
  }
}

export default BoxList;
