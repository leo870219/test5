import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }
  showImg = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", this.fileLoad);
    fileReader.readAsDataURL(file);
    this.props.changeImg("更換圖片>");
  };
  fileLoad = (e) => {
    this.setState({
      img: e.target.result,
    });
  };

  render() {
    return (
      <div className="upload">
        <div className="upload-block">
          {this.state.img ? (
            <div className="upload-image-block">
              <img
                alt="上傳圖檔"
                src={this.state.img}
                className={`upload-image ${this.props.shape}`}
              />
            </div>
          ) : (
            <div className={`upload-shape ${this.props.shape}`}>
              <FontAwesomeIcon size="7x" icon={faUserAlt} />
            </div>
          )}

          <label className="upload-button-block">
            <input
              type="file"
              className="upload-button"
              onChange={this.showImg}
            />
            上傳
          </label>
        </div>
      </div>
    );
  }
}

export default Upload;
