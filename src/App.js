import React from "react";
import Log from "./components/Log";
import Shape from "./components/Shape";
import Upload from "./components/Upload";
class App extends React.Component {
  state = {
    shape: "upload-square",
    updateLog: "",
  };
  changeShape = (shape) => {
    if(shape ==='upload-round'){
      this.setState({
        shape: shape,
        updateLog: `${this.state.updateLog}更改圓形>`,
      });
    }else{
      this.setState({
        shape: shape,
        updateLog: `${this.state.updateLog}更改方形>`,
      });
    }
   
  };
  changeImg = (image) => {
    this.setState({
      updateLog: this.state.updateLog + image,
    });
  };

  render() {
    return (
      <div className="container">
        <Upload
          shape={this.state.shape}
          changeImg={(image) => {
            this.changeImg(image);
          }}
        />
        <Shape
          changeShape={(item) => {
            this.changeShape(item);
          }}
        />
        <Log log={this.state.updateLog} />
      </div>
    );
  }
}

export default App;
