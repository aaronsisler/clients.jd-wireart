import React from "react";
import { connect } from "react-redux";
import PaypalExpressBtn from "react-paypal-express-checkout";
import PropTypes from "prop-types";
import {
  paypalEnvironment,
  paypalProductionClientId,
  paypalSandboxClientId
} from "../../config";
import history from "../../tools/history";
import FormError from "../form-error";
import { startMarkAsSold } from "../../actions";
import createTransaction from "../../tools/create-transaction";
import "./payment.scss";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  style = {
    size: "responsive"
  };

  render() {
    const client = {
      production: paypalProductionClientId,
      sandbox: paypalSandboxClientId
    };

    const { error } = this.state;
    const { galleryPieceId, name, price } = this.props;

    const paymentOptions = createTransaction({ galleryPieceId, name, price });

    const onCancel = () =>
      this.setState(() => ({ error: "Payment was cancelled" }));

    const onError = () =>
      this.setState(() => ({ error: "Something went wrong" }));

    const onSuccess = async () => {
      await this.props.startMarkAsSold(this.props.galleryPieceId);
      history.push("/confirm_payment");
    };

    return (
      <div className="payment">
        {error && <FormError error={error} />}
        <PaypalExpressBtn
          env={paypalEnvironment}
          client={client}
          currency="USD"
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

const mapDispatchToProps = dispatch => ({
  startMarkAsSold: galleryPieceId => dispatch(startMarkAsSold(galleryPieceId))
});

Payment.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  startMarkAsSold: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(Payment);
