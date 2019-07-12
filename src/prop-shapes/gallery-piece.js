import PropTypes from "prop-types";

export default {
  category: PropTypes.string,
  description: PropTypes.string,
  galleryPieceId: PropTypes.string.isRequired,
  height: PropTypes.string,
  imageSrc: PropTypes.string,
  isPaymentActive: PropTypes.bool,
  isSold: PropTypes.bool,
  length: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  width: PropTypes.string
};
