import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import EditGalleryPieceDetailsContainer from "../../containers/edit-gallery-piece-details-container";
import UploadGalleryPieceImageContainer from "../../containers/upload-gallery-piece-image-container";
import PaymentUnlock from "../payment-unlock";
import "./manager-details.scss";

const ManagerDetails = ({ galleryPiece, galleryPieceId }) => {
  if (galleryPieceId && !galleryPiece) {
    return (
      <div className={`manager-details inbox__details-invalid`}>
        That galley piece does not exist. Please refer back to the gallery list.
      </div>
    );
  }

  if (!galleryPiece) {
    return (
      <div className={`manager-details inbox__details-empty inbox__mobile`}>
        Please select an item to view
      </div>
    );
  }

  const { imageSrc, isPaymentActive, isSold, name } = galleryPiece;

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
        <Tabs>
          <TabList>
            <Tab>Edit Details</Tab>
            <Tab>Upload Image</Tab>
          </TabList>

          <TabPanel>
            <EditGalleryPieceDetailsContainer galleryPiece={galleryPiece} />
          </TabPanel>
          <TabPanel>
            <UploadGalleryPieceImageContainer
              galleryPieceId={galleryPieceId}
              imageSrc={imageSrc}
              name={name}
            />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

ManagerDetails.propTypes = {
  galleryPiece: PropTypes.object
};

export default ManagerDetails;
