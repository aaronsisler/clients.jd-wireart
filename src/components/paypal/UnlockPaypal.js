import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetPaypalActiveFlag } from 'Actions/galleryPiece';

class UnlockPaypal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isPaypalActive } = this.props;

        if (isPaypalActive) {
            return (
                <div className="unlock_paypal">
                    <div className="unlock_paypal__active">
                        Paypal Activated
                    </div>
                </div>
            )
        }

        return (
            <div className="unlock_paypal">
                <button
                    className="nav_link"
                    onClick={this.props.startSetPaypalActiveFlag}
                >
                    Click to Unlock Paypal
                </button>
            </div>
        )
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    startSetPaypalActiveFlag: () => dispatch(startSetPaypalActiveFlag(ownProps.galleryPieceId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnlockPaypal);

UnlockPaypal.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    isPaypalActive: PropTypes.bool,
    startSetPaypalActiveFlag: PropTypes.func.isRequired,
};
