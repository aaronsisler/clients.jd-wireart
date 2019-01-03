import React from 'react';
import FirebaseFileUploader from 'react-firebase-file-uploader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import { storage } from 'Firebase/firebase';
import { retrieveDownloadUrl } from 'Firebase/storageUtils';
import { startAddGalleryPieceImage } from 'Actions/galleryPiece';

export class GalleryPieceImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isUploading: false,
            progress: 0,
            success: '',
        };
    }

    handleProgress = (progress) => this.setState({ progress });

    handleUploadError = (error) => {
        this.setState({
            isUploading: false,
            success: error,
        });
    };

    handleUploadStart = () => this.setState({ isUploading: true, success: '', progress: 0 });

    handleUploadSuccess = async (imageName) => {
        const imageURL = await retrieveDownloadUrl(this.props.galleryPieceId, imageName);
        this.props.startAddGalleryPieceImage(this.props.galleryPieceId, imageURL);
        this.setState({ success: 'Image uploaded sucessfully!', progress: 100, isUploading: false });
    };

    render() {
        return (
            <div className="gallery_piece_image_upload">
                <div className="gallery_piece_image_upload__loader">
                    <label className="nav_link">
                        Upload an image
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
                </div>
                {this.state.success &&
                    <div className="gallery_piece_image_upload__success">
                        {this.state.success}
                    </div>
                }
                {this.state.isUploading &&
                    <div className="gallery_piece_image_upload__progress">
                        <Progress
                            percent={this.state.progress}
                        />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = () => ({
})

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startAddGalleryPieceImage: (galleryPieceId, imageURL) => dispatch(startAddGalleryPieceImage(galleryPieceId, imageURL)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPieceImageUpload);

GalleryPieceImageUpload.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    startAddGalleryPieceImage: PropTypes.func.isRequired,
};
