import React from 'react';
import PropTypes from 'prop-types';
import { convertAmount } from 'Tools/amount';
import FormError from 'Core/FormError';

export default class GalleryPieceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.galleryPiece ? props.galleryPiece.name : '',
            price: props.galleryPiece ? convertAmount(props.galleryPiece.price) : '',
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
                price: convertAmount(price, false),
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
                <div className="gallery_piece_form__input">
                    <input
                        onChange={this.onNameChange}
                        placeholder="Name"
                        type="text"
                        value={name}
                    />
                </div>
                <div className="gallery_piece_form__input">
                    <input
                        onChange={this.onPriceChange}
                        placeholder="Price"
                        type="text"
                        value={price}
                    />
                </div>
                <div className="gallery_piece_form__button">
                    <button className="nav_link" onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        )
    }
}

GalleryPieceForm.propTypes = {
    galleryPiece: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
};
