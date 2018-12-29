import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ManagerList from 'Manager/ManagerList';
import ManagerDetails from 'Manager/ManagerDetails';

class ManagerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gallery } = this.props;
        return (
            <div className="inbox_container">
                <div className="inbox_widget">
                    <div className="inbox_list">
                        <Link className="nav_link" to="/manager_add">Add Gallery Piece</Link>
                        <ManagerList gallery={gallery} />
                    </div>
                    <ManagerDetails />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gallery: state.gallery,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerContainer);

ManagerContainer.propTypes = {
    gallery: PropTypes.array,
};
