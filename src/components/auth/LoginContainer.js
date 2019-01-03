import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogin } from 'Actions/auth';

const LoginContainer = (props) => (
    <div className="login_container">
        <div className="login_container__button">
            <button className="button" onClick={props.startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginContainer);

LoginContainer.propTypes = {
    startLogin: PropTypes.func.isRequired,
};
