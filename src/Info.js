import React, { Component } from "react";
import Navbar from "./Navbar";
import Curriculum from "./Curriculum";
import "./Info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "Curriculum" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  formatPage() {
    if (this.state.format === "Curriculum") {
      return <Curriculum />;
    }
  }

  render() {
    return (
      <div className="Info">
        <Navbar handleChange={this.changeFormat} />
        {this.formatPage()}
      </div>
    );
  }
}
export default Info;
