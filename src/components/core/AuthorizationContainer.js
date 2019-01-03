import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginContainer from 'Core/LoginContainer';

const AuthorizationContainer = ({
    isAuthenticated,
}) => (
        isAuthenticated
            ? (
                <div>
                    {`Ah ah ah... You didn't say the magic word`}
                </div>
            )
            : <LoginContainer />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: state.user,
});

export default connect(mapStateToProps)(AuthorizationContainer);

AuthorizationContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
};
