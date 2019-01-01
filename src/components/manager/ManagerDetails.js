import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { convertAmount } from 'Tools/amount';
import UnlockPaypal from 'Paypal/UnlockPaypal';
import GalleryPieceImage from 'Gallery/GalleryPieceImage';

export default class ManagerDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPiece } = this.props;
        if (!galleryPiece) {
            return (
                <div className="inbox_details_empty">
                    Please select an item to view
                </div>
            )
        }

        const { galleryPieceId, imagePath, name, price } = galleryPiece;
        return (
            <div className="inbox_details" >
                <div className="inbox_details_header">
                    <div>
                        <div className="inbox_details_header__name">
                            {name}
                        </div>
                        <div className="inbox_details_header__price">
                            ${convertAmount(price)}
                        </div>
                    </div>
                    <UnlockPaypal galleryPieceId={galleryPieceId} />
                </div>
                <div className="inbox_details_content">
                    <Link className="nav_link" to={`/manager_edit/${galleryPieceId}`}>Edit Gallery Piece</Link>
                    <GalleryPieceImage imagePath={imagePath} />
                </div>
            </div>
        );
    }
}

ManagerDetails.propTypes = {
    galleryPiece: PropTypes.object,
};

