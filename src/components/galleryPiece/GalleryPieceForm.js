import React from 'react';
import PropTypes from 'prop-types';
import { convertPrice } from 'Tools/price';
import FormError from 'Core/FormError';

export default class GalleryPieceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.galleryPiece ? props.galleryPiece.description : '',
            name: props.galleryPiece ? props.galleryPiece.name : '',
            price: props.galleryPiece ? convertPrice(props.galleryPiece.price) : '',
            length: props.galleryPiece ? props.galleryPiece.length : '',
            width: props.galleryPiece ? props.galleryPiece.width : '',
            height: props.galleryPiece ? props.galleryPiece.height : '',
            error: '',
        };
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        return this.setState(() => ({ description: description ? description : '' }));
    }

    handleDimensionChange = (e) => {
        const { name: inputName, value: inputValue } = e.target;

        if (!inputValue || inputValue.match(/^[0-9]*$/)) {
            return this.setState({ [inputName]: inputValue });
        }

        return this.setState({ [inputName]: '' });
    }

    handleNameChange = (e) => {
        const name = e.target.value;
        return this.setState(() => ({ name }));
    }

    handlePriceChange = (e) => {
        const price = e.target.value;

        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            return this.setState(() => ({ price }));
        }
    }

    handleSubmit = () => {
        const { name, price } = this.state
        if (!name || !price) {
            return this.setState(() => ({ error: 'Please provide name and price' }));
        } else if (this.validateDimensions()) {
            return this.setState(() => ({ error: 'Please provide all three dimensions' }));
        }
        else {
            this.setState(() => ({ error: '' }));
            const { error, ...submitObject } = Object.assign({}, this.state); // eslint-disable-line no-unused-vars

            this.props.onSubmit({
                ...submitObject,
                price: convertPrice(price, false),
            })
        }
    }

    validateDimensions = () => {
        const { height, length, width } = this.state;
        if (height.length && length, length && width.length) {
            return false;
        }
        if (!height.length && !length.length && !width.length) {
            return false;
        }
        return true;
    }

    render() {
        const { description, error, height, length, name, price, width } = this.state;
        return (
            <div className="gallery_piece_form">
                {error && <FormError error={error} />}
                <div>Name</div>
                <input
                    className="gallery_piece_form__input"
                    onChange={this.handleNameChange}
                    placeholder="Name"
                    type="text"
                    value={name}
                />
                <div>Price</div>
                <input
                    className="gallery_piece_form__input"
                    onChange={this.handlePriceChange}
                    placeholder="Price"
                    type="text"
                    value={price}
                />
                <div className="gallery_piece_form__dimensions">
                    <div>Length&nbsp;(in.)
                    <input
                            className="gallery_piece_form__input"
                            name="length"
                            onChange={this.handleDimensionChange}
                            placeholder="Length"
                            type="text"
                            value={length}
                        />
                    </div>
                    <div>Width&nbsp;(in.)
                    <input
                            className="gallery_piece_form__input"
                            name="width"
                            onChange={this.handleDimensionChange}
                            placeholder="Width"
                            type="text"
                            value={width}
                        />
                    </div>
                    <div>Height&nbsp;(in.)
                    <input
                            className="gallery_piece_form__input"
                            name="height"
                            onChange={this.handleDimensionChange}
                            placeholder="Height"
                            type="text"
                            value={height}
                        />
                    </div>
                </div>
                <div>Description</div>
                <textarea
                    className="gallery_piece_form__input"
                    maxLength="160"
                    onChange={this.handleDescriptionChange}
                    placeholder="Describe your piece"
                    rows="6"
                    value={description}
                ></textarea>
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
