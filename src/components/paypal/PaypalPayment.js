import React from 'react';
import { connect } from 'react-redux';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import PropTypes from 'prop-types';
import { paypalEnvironment } from 'Src/config';
import { paypalProductionClientId, paypalSandboxClientId } from 'Src/secrets';
import history from 'Tools/history';
import FormError from 'Core/FormError';
import { startSetSoldFlag } from 'Actions/galleryPiece';
import { createTransaction } from 'Paypal/transaction';

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

        const { error } = this.state;
        const { galleryPieceId, name, price } = this.props;

        const paymentOptions = createTransaction({ galleryPieceId, name, price });

        const onCancel = () => this.setState(() => ({ error: 'Payment was cancelled' }))

        const onError = () => this.setState(() => ({ error: 'Something went wrong' }))

        const onSuccess = async () => {
            await this.props.startSetSoldFlag(this.props.galleryPieceId);
            history.push('/confirm_payment');
        }

        return (
            <div className="paypal_payment">
                {error && <FormError error={error} />}
                <PaypalExpressBtn
                    env={paypalEnvironment}
                    client={client}
                    currency='USD'
                    total={0}
                    onCancel={onCancel}
                    onError={onError}
                    onSuccess={onSuccess}
                    style={this.style}
                    paymentOptions={paymentOptions}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetSoldFlag: (galleryPieceId) => dispatch(startSetSoldFlag(galleryPieceId))
});

export default connect(undefined, mapDispatchToProps)(PaypalPayment);

PaypalPayment.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    startSetSoldFlag: PropTypes.func.isRequired,
};
