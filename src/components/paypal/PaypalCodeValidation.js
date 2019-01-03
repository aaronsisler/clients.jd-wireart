import React from 'react';
import PropTypes from 'prop-types';
import FormError from 'Core/FormError';
import PaypalPayment from 'Paypal/PaypalPayment';
import { paypalVerificationCode } from 'Src/config';

class PaypalCodeValidation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            isUserValidated: false,
            userPaypalCode: '',
        }
    }

    handleVerificationCodeInput = (e) => {
        const { value: userPaypalCode } = e.target;

        return this.setState(() => ({ userPaypalCode }));
    }

    handleValidateCode = () => {
        const { userPaypalCode } = this.state;
        if (userPaypalCode === paypalVerificationCode) {
            return this.setState(() => ({ isUserValidated: true }));
        }

        return this.setState(() => ({ error: 'Incorrect verification code' }));
    }

    render() {
        const { error, isUserValidated, userPaypalCode } = this.state;

        return isUserValidated
            ? <PaypalPayment price={this.props.price} />
            :
            (
                <div className="paypal_code_validation">
                    <div className="paypal_code_validation__input">
                        {error && <FormError error={error} />}
                        <input
                            type="password"
                            placeholder="Enter Paypal Code"
                            onChange={this.handleVerificationCodeInput}
                            value={userPaypalCode}
                        />
                    </div>
                    <button
                        className="paypal_code_validation__button"
                        disabled={!userPaypalCode}
                        onClick={this.handleValidateCode}
                    >
                        Unlock Paypal
                    </button>
                </div>
            )
    }
}

export default PaypalCodeValidation;

PaypalCodeValidation.propTypes = {
    price: PropTypes.number.isRequired,
};
