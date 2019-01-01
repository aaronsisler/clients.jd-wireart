import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetPaypalFlag } from 'Actions/galleryPiece';

class UnlockPaypal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPieceId } = this.props;
        return (
            <div className="unlock_paypal">
                <input type='text'></input>
                <button
                    className="nav_link"
                    onClick={this.props.startSetPaypalFlag}
                >
                    Click to Unlock {galleryPieceId}
                </button>
            </div>
        )
    }
}

const mapStateToProps = () => ({
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    startSetPaypalFlag: () => dispatch(startSetPaypalFlag(ownProps.galleryPieceId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnlockPaypal);

UnlockPaypal.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    startSetPaypalFlag: PropTypes.func.isRequired,
};
