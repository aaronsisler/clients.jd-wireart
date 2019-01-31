import React from 'react';
import PropTypes from 'prop-types';
import { convertPrice } from 'Tools/price';
import FormError from 'Core/FormError';

export default class GalleryPieceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.galleryPiece ? props.galleryPiece.name : '',
            price: props.galleryPiece ? convertPrice(props.galleryPiece.price) : '',
            error: '',
        };
    }

    handleSubmit = () => {
        const { name, price } = this.state
        if (!name || !price) {
            this.setState(() => ({ error: 'Please provide name and price' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name,
                price: convertPrice(price, false),
            })
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onPriceChange = (e) => {
        const price = e.target.value;

        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }));
        }
    }

    render() {
        const { error, name, price } = this.state;
        return (
            <div className="gallery_piece_form">
                {error && <FormError error={error} />}
                <input
                    className="gallery_piece_form__input"
                    onChange={this.onNameChange}
                    placeholder="Name"
                    type="text"
                    value={name}
                />
                <input
                    className="gallery_piece_form__input"
                    onChange={this.onPriceChange}
                    placeholder="Price"
                    type="text"
                    value={price}
                />
                <button
                    className="nav_link gallery_piece_form__button"
                    onClick={this.handleSubmit}
                >
                    Save
                </button>
            </div>
        )
    }
}

GalleryPieceForm.propTypes = {
    galleryPiece: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
};
