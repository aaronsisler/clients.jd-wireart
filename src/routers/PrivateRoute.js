import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import LoginContainer from 'Core/LoginContainer';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...props
}) => (
        <Route {...props} component={(newProps) => (
            isAuthenticated ? (
                <Component {...newProps} />
            ) : (
                    <LoginContainer />
                )
        )} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: state.user,
    isAuthorized: state.user && !!state.user.isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
    component: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};
