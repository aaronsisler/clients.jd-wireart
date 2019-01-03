import React from 'react';
import {
    paypalEnvironment,
    paypalProductionClientId,
    paypalSandboxClientId,
} from 'Src/config';
import PropTypes from 'prop-types';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { convertPriceForPaypal } from 'Tools/price';
import history from 'Tools/history';
import FormError from 'Core/FormError';

class PaypalPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }

    style = {
        size: 'responsive',
    };

    render() {
        const client = {
            production: paypalProductionClientId,
            sandbox: paypalSandboxClientId,
        }

        const onCancel = () => this.setState(() => ({ error: 'Payment was cancelled' }))

        const onError = () => this.setState(() => ({ error: 'Something went wrong' }))

        const onSuccess = () => history.push('/confirm_payment')

        const { error } = this.state;

        return (
            <div className="paypal_payment">
                {error && <FormError error={error} />}
                <PaypalExpressBtn
                    env={paypalEnvironment}
                    client={client}
                    currency='USD'
                    total={convertPriceForPaypal(this.props.price)}
                    onCancel={onCancel}
                    onError={onError}
                    onSuccess={onSuccess}
                    style={this.style}
                />
            </div>
        );
    }
}

export default PaypalPayment;

PaypalPayment.propTypes = {
    price: PropTypes.number.isRequired,
};
