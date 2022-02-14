import { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: new Array(),
    };
    this.addBox = this.addBox.bind(this);
  }

  addBox(newObj) {
    console.log(newObj);
    this.setState((st) => ({ boxList: [...st.boxList, newObj] }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxList.map((val, idx) => (
          <Box
            key={idx}
            backgroundColor={val.color}
            width={val.width}
            height={val.height}
          />
        ))}
      </div>
    );
  }
}

export default BoxList;
