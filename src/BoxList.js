import { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: [{ backgroundColor: "violet", width: "150px", height: "231px" }],
    };
  }

  render() {
    return (
      <div>
        <NewBoxForm />
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
