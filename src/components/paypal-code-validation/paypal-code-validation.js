import React from "react";
import PropTypes from "prop-types";
import PaypalPayment from "../paypal-payment";
import FormError from "../form-error";
import { paypalVerificationCode } from "../../config";
import "./paypal-code-validation.scss";

class PaypalCodeValidation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      isCodeValidated: false,
      userPaypalCode: ""
    };
  }

  handleVerificationCodeInput = e => {
    const { value: userPaypalCode } = e.target;

    return this.setState(() => ({ userPaypalCode }));
  };

  handleValidateCode = () => {
    const { userPaypalCode } = this.state;

    if (userPaypalCode === paypalVerificationCode) {
      return this.setState(() => ({ isCodeValidated: true }));
    }

    return this.setState(() => ({ error: "Incorrect verification code" }));
  };

  render() {
    const { galleryPieceId, name, price } = this.props;
    const { error, isCodeValidated, userPaypalCode } = this.state;

    return isCodeValidated ? (
      <PaypalPayment
        galleryPieceId={galleryPieceId}
        name={name}
        price={price}
      />
    ) : (
      <div className="paypal-code-validation">
        <div className="paypal-code-validation__input">
          {error && <FormError error={error} />}
          <input
            type="password"
            placeholder="Enter Paypal Code"
            onChange={this.handleVerificationCodeInput}
            value={userPaypalCode}
          />
        </div>
        <button
          className="paypal-code-validation__button"
          disabled={!userPaypalCode}
          onClick={this.handleValidateCode}
        >
          Unlock Paypal
        </button>
      </div>
    );
  }
}

PaypalCodeValidation.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default PaypalCodeValidation;
