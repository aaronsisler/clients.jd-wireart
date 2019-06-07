import React from "react";
import PropTypes from "prop-types";
import PaymentUnlock from "../payment-unlock";
import "./manager-details.scss";

const ManagerDetails = ({ galleryPiece }) => {
  if (!galleryPiece) {
    return (
      <div className={`manager-details inbox__details-empty inbox__mobile`}>
        Please select an item to view
      </div>
    );
  }

  const {
    galleryPieceId,
    imageURL,
    isPaymentActive,
    isSold,
    name
  } = galleryPiece;

  return (
    <div className="manager-details inbox__details">
      <div className="manager-details__header">
        <div className="manager-details__header-name">{name}</div>
        <div className="manager-details__header-payment">
          {isSold ? (
            "Sold Out"
          ) : (
            <PaymentUnlock
              galleryPieceId={galleryPieceId}
              isPaymentActive={isPaymentActive}
            />
          )}
        </div>
      </div>
      <div className="manager-details__content">
        <div className="manager-details__content-edit">Edit</div>
        <div className="manager-details__content-Image">Image: {imageURL}</div>
      </div>
    </div>
  );
};

ManagerDetails.propTypes = {
  galleryPiece: PropTypes.object
};

export default ManagerDetails;
