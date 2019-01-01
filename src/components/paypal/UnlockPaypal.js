import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UnlockPaypal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPieceId } = this.props;
        return (
            <div className="unlock_paypal">
                <input type='text'></input>
                <button className="nav_link">Click to Unlock {galleryPieceId}</button>
            </div>
        )
    }
}

const mapStateToProps = () => ({
});


const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UnlockPaypal);

UnlockPaypal.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
};
