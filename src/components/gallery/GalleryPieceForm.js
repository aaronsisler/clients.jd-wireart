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
            length: props.galleryPiece ? props.galleryPiece.length : '',
            width: props.galleryPiece ? props.galleryPiece.width : '',
            height: props.galleryPiece ? props.galleryPiece.height : '',
            error: '',
        };
    }

    handleSubmit = () => {
        const { name, price } = this.state
        if (!name || !price) {
            this.setState(() => ({ error: 'Please provide name and price' }));
        } else {
            this.setState(() => ({ error: '' }));
            const { error, ...submitObject } = Object.assign({}, this.state); // eslint-disable-line no-unused-vars

            this.props.onSubmit({
                ...submitObject,
                price: convertPrice(price, false),
            })
        }
    }

    onDimensionChange = (e) => {
        const { name: inputName, value: inputValue } = e.target;

        if (!inputValue || inputValue.match(/^[0-9]*$/)) {
            return this.setState({ [inputName]: inputValue });
        }

        return this.setState({ [inputName]: '' });
    }

    onNameChange = (e) => {
        const name = e.target.value;
        return this.setState(() => ({ name }));
    }

    onPriceChange = (e) => {
        const price = e.target.value;

        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            return this.setState(() => ({ price }));
        }
    }

    render() {
        const { error, height, length, name, price, width } = this.state;
        return (
            <div className="gallery_piece_form">
                {error && <FormError error={error} />}
                <div>Name</div>
                <input
                    className="gallery_piece_form__input"
                    onChange={this.onNameChange}
                    placeholder="Name"
                    type="text"
                    value={name}
                />
                <div>Price</div>
                <input
                    className="gallery_piece_form__input"
                    onChange={this.onPriceChange}
                    placeholder="Price"
                    type="text"
                    value={price}
                />
                <div className="gallery_piece_form__dimensions">
                    <div>Length&nbsp;(in.)
                    <input
                            className="gallery_piece_form__input"
                            name="length"
                            onChange={this.onDimensionChange}
                            placeholder="Length"
                            type="text"
                            value={length}
                        />
                    </div>
                    <div>Width&nbsp;(in.)
                    <input
                            className="gallery_piece_form__input"
                            name="width"
                            onChange={this.onDimensionChange}
                            placeholder="Width"
                            type="text"
                            value={width}
                        />
                    </div>
                    <div>Height&nbsp;(in.)
                    <input
                            className="gallery_piece_form__input"
                            name="height"
                            onChange={this.onDimensionChange}
                            placeholder="Height"
                            type="text"
                            value={height}
                        />
                    </div>
                </div>
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
