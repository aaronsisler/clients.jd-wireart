import React from "react";
import PropTypes from "prop-types";
import Payment from "../payment";
import FormError from "../form-error";
import { paypalVerificationCode } from "../../config";
import "./payment-code-validation.scss";

class PaymentCodeValidation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      isCodeValidated: false,
      userVerificationCode: ""
    };
  }

  handleVerificationCodeInput = e => {
    const { value: userVerificationCode } = e.target;

    return this.setState(() => ({ userVerificationCode }));
  };

  handleCodeValidation = () => {
    const { userVerificationCode } = this.state;

    if (userVerificationCode === paypalVerificationCode) {
      return this.setState(() => ({ isCodeValidated: true }));
    }

    return this.setState(() => ({ error: "Incorrect verification code" }));
  };

  render() {
    const { galleryPieceId, name, price } = this.props;
    const { error, isCodeValidated, userVerificationCode } = this.state;

    return isCodeValidated ? (
      <Payment galleryPieceId={galleryPieceId} name={name} price={price} />
    ) : (
      <div className="payment-code-validation">
        <div className="payment-code-validation__input">
          {error && <FormError error={error} />}
          <input
            type="password"
            placeholder="Enter Verification Code"
            onChange={this.handleVerificationCodeInput}
            value={userVerificationCode}
          />
        </div>
        <button
          className="payment-code-validation__button"
          disabled={!userVerificationCode}
          onClick={this.handleCodeValidation}
        >
          Validate Code
        </button>
      </div>
    );
  }
}

PaymentCodeValidation.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default PaymentCodeValidation;
