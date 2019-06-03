import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactForm from "../../components/contact-form";
import ContactPhone from "../../components/contact-phone";
import "./contact-container.scss";

const ContactContainer = ({ galleryPieceName, isCustom }) => (
  <div className="contact-container">
    <div className="contact-container__email">
      <div className="contact-container__email-title">Send us a message</div>
      <ContactForm galleryPieceName={galleryPieceName} isCustom={isCustom} />
    </div>
    <div className="contact-container__phone">
      <ContactPhone />
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  const { galleryPieceId } = props.match.params;
  const { search } = props.location;
  const isCustom = search && search.includes("custom") ? true : false;
  let galleryPieceName;
  if (galleryPieceId) {
    const galleryPiece = state.gallery.find(
      galleryPiece => galleryPiece.galleryPieceId === galleryPieceId
    );
    galleryPieceName = galleryPiece ? galleryPiece.name : undefined;
  } else {
    galleryPieceName = undefined;
  }

  return {
    galleryPieceId,
    galleryPieceName,
    isCustom
  };
};

ContactForm.propTypes = {
  galleryPieceId: PropTypes.string,
  galleryPieceName: PropTypes.string,
  isCustom: PropTypes.bool
};

export default connect(mapStateToProps)(ContactContainer);
