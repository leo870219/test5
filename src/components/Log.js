import React from "react";

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="log">
        <div className="log-block">
          <p>log</p>
          <hr />
          <p>{this.props.log}</p>
        </div>
      </div>
    );
  }
}

export default Log;
