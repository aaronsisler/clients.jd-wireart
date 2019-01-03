import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginContainer from 'Auth/LoginContainer';

const AuthorizationContainer = ({
    isAuthenticated,
}) => (
        isAuthenticated
            ? (
                <div className="authorization_container">
                    <img src="/images/magic_word.gif" />
                </div>
            )
            : <LoginContainer />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user,
});

export default connect(mapStateToProps)(AuthorizationContainer);

AuthorizationContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
};
