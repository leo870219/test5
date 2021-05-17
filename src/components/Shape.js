import React from "react";

class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shape: "upload-square" };
  }
  handleChange = (e) => {
    this.setState({ shape: e.target.value });
    this.props.changeShape(e.target.value);
  };
  render() {
    return (
      <div className="shape">
        <select onChange={this.handleChange} className="shape-select">
          <option value="upload-square">方形</option>
          <option value="upload-round">圓形</option>
        </select>
      </div>
    );
  }
}

export default Shape;
