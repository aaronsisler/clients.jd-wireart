import React from 'react';
import PropTypes from 'prop-types';
import { convertAmount } from 'Tools/amount';

export default class GalleryPieceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.galleryPiece ? props.galleryPiece.name : '',
            price: props.galleryPiece ? convertAmount(props.galleryPiece.price) : '',
            error: '',
        };
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

    render() {
        const { error, name, price } = this.state;
        return (
            <div className="gallery_piece_form">
                {error && <p className="gallery_piece_form__error">{error}</p>}
                <div className="gallery_piece_form__input">
                    <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={name}
                        onChange={this.onNameChange}
                    />
                </div>
                <div className="gallery_piece_form__input">
                    <input
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={this.onPriceChange}
                    />
                </div>
                <div>
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
