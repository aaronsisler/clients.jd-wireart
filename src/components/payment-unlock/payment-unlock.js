import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startSetPaymentActiveFlag } from "../../actions";
import "./payment-unlock.scss";

const PaymentUnlock = ({ isPaymentActive, startSetPaymentActiveFlag }) => {
  if (isPaymentActive) {
    return <div className="payment-unlock">Payment Activated</div>;
  }

  return (
    <div className="payment-unlock">
      <button onClick={startSetPaymentActiveFlag}>
        Click to Unlock Paypal
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  startSetPaymentActiveFlag: () =>
    dispatch(startSetPaymentActiveFlag(ownProps.galleryPieceId))
});

PaymentUnlock.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  isPaypalActive: PropTypes.bool,
  startSetPaymentActiveFlag: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(PaymentUnlock);
