import React from 'react';
import { paypalSandboxClientID } from 'Src/config';
import PropTypes from 'prop-types';
// import PayPalButton from 'react-paypal-button';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class PaypalPayment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const env = 'sandbox'; // you can set here to 'production' for production
        const client = {
            sandbox: paypalSandboxClientID,
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency='USD'
                total={this.props.amount / 100}
                onCancel={onCancel}
                onError={onError}
                onSuccess={onSuccess}
            />
        );
    }
}

export default PaypalPayment;

PaypalPayment.propTypes = {
    amount: PropTypes.number.isRequired,
};
