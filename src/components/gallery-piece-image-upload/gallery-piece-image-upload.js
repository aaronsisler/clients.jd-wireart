import React from "react";
import FirebaseFileUploader from "react-firebase-file-uploader";
import { connect } from "react-redux";
import { Progress } from "react-sweet-progress";
import PropTypes from "prop-types";
import { retrieveDownloadUrl, storage } from "../../firebase";
import { startAddGalleryPieceImage } from "../../actions";
import "./gallery-piece-image-upload.scss";
import "./react-sweet-progress-bar.scss";

class GalleryPieceImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      isUploading: false,
      progress: 0,
      success: ""
    };
  }

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error =>
    this.setState({
      isUploading: false,
      success: error
    });

  handleUploadStart = () =>
    this.setState({ isUploading: true, success: "", progress: 0 });

  handleUploadSuccess = async imageName => {
    const imageURL = await retrieveDownloadUrl(
      this.props.galleryPieceId,
      imageName
    );
    this.props.startAddGalleryPieceImage(this.props.galleryPieceId, imageURL);

    return this.setState({
      success: "Image uploaded sucessfully!",
      progress: 100,
      isUploading: false
    });
  };

  render() {
    return (
      <div className="gallery-piece-image-upload">
        <label className="nav-link">
          Upload image
          <FirebaseFileUploader
            accept=".gif, .jpg, .png, .svg"
            hidden
            name="gallery_piece_image_upload__image_loader"
            storageRef={storage.ref(`${this.props.galleryPieceId}`)}
            onProgress={this.handleProgress}
            onUploadError={this.handleUploadError}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
          />
        </label>
        {this.state.isUploading && (
          <div className="gallery-piece-image-upload__progress">
            <Progress percent={this.state.progress} />
          </div>
        )}
        {this.state.success && (
          <div className="gallery-piece-image-upload__success">
            {this.state.success}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddGalleryPieceImage: (galleryPieceId, imageURL) =>
    dispatch(startAddGalleryPieceImage(galleryPieceId, imageURL))
});

GalleryPieceImageUpload.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  startAddGalleryPieceImage: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(GalleryPieceImageUpload);
