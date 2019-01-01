import React from 'react';
import PropTypes from 'prop-types';
import history from 'Tools/history';

export default class ManagerListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleItemClick = () => history.push(`/manager/${this.props.galleryPieceId}`);

    render() {
        return (
            <div className="manager_list_item nav_link" onClick={this.handleItemClick}>
                <div className="manager_list_item__content">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

ManagerListItem.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
