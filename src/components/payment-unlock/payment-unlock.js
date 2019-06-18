import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startSetPaymentActiveFlag } from "../../actions";
import "./payment-unlock.scss";

const PaymentUnlock = ({ isPaymentActive, startSetPaymentActiveFlag }) => {
  if (isPaymentActive) {
    return (
      <div className="payment-unlock">
        <div className="payment-unlock__text">Payment Activated</div>
      </div>
    );
  }

  return (
    <div className="payment-unlock">
      <button onClick={startSetPaymentActiveFlag}>Unlock Payment</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  startSetPaymentActiveFlag: () =>
    dispatch(startSetPaymentActiveFlag(ownProps.galleryPieceId))
});

PaymentUnlock.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  isPaymentActive: PropTypes.bool,
  startSetPaymentActiveFlag: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(PaymentUnlock);
