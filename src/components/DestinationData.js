import { Component } from "react";
import Destination from "./Destination";

import "./Destination.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.header}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="image" src={this.props.img1} />
          <img alt="image" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
