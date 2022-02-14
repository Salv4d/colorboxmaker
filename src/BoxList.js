import { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: new Array(),
    };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(newObj) {
    newObj["key"] = uuidv4();

    this.setState((st) => ({ boxList: [...st.boxList, newObj] }));
  }

  removeBox(boxId) {
    this.setState((st) => ({
      boxList: st.boxList.filter((val) => val.key != boxId),
    }));
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxList.map((val) => (
          <Box
            key={val.key}
            boxId={val.key}
            backgroundColor={val.color}
            width={val.width}
            height={val.height}
            removeBox={this.removeBox}
          />
        ))}
      </div>
    );
  }
}

export default BoxList;
