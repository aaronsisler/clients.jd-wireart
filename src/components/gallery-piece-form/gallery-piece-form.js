import React from "react";
import PropTypes from "prop-types";
import {
  convertPriceForDatabase,
  convertPriceFromDatabase
} from "../../tools/price";
import FormError from "../form-error";
import Input from "../input";
import categories from "../../content/categories";
import "./gallery-piece-form.scss";

class GalleryPieceForm extends React.Component {
  disableSaveButtonTimeout;

  constructor(props) {
    super(props);

    this.state = {
      category: props.galleryPiece ? props.galleryPiece.category : "NONE",
      description: props.galleryPiece ? props.galleryPiece.description : "",
      height: props.galleryPiece ? props.galleryPiece.height : "",
      length: props.galleryPiece ? props.galleryPiece.length : "",
      name: props.galleryPiece ? props.galleryPiece.name : "",
      price: props.galleryPiece
        ? convertPriceFromDatabase(props.galleryPiece.price)
        : "",
      width: props.galleryPiece ? props.galleryPiece.width : "",
      isSaveButtonDisabled: false,
      error: ""
    };
  }

  componentWillUnmount() {
    clearTimeout(this.disableSaveButtonTimeout);
  }

  handleCategoryChange = e => {
    const category = e.target.value;

    return this.setState(() => ({ category }));
  };

  handleDescriptionChange = e => {
    const description = e.target.value;

    return this.setState(() => ({
      description: description ? description : ""
    }));
  };

  handleDimensionChange = e => {
    const { name: inputName, value: inputValue } = e.target;

    if (!inputValue || inputValue.match(/^[0-9]*$/)) {
      return this.setState({ [inputName]: inputValue });
    }
  };

  handleNameChange = e => {
    const name = e.target.value;
    return this.setState(() => ({ name }));
  };

  handlePriceChange = e => {
    const price = e.target.value;

    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      return this.setState(() => ({ price }));
    }
  };

  handleSubmit = () => {
    const timeoutLengthInMilliseconds = 3000;
    const {
      category,
      description,
      height,
      length,
      name,
      price,
      width
    } = this.state;

    if (!name || !price || category === "NONE") {
      return this.setState(() => ({
        error: "Please provide name, price, and category"
      }));
    }

    if (!this.validateDimensions()) {
      return this.setState(() => ({
        error: "Please provide all three dimensions"
      }));
    }

    this.setState(() => ({ error: "", isSaveButtonDisabled: true }));
    this.disableSaveButtonTimeout = setTimeout(
      () => this.setState({ isSaveButtonDisabled: false }),
      timeoutLengthInMilliseconds
    );

    const submitObject = {
      category,
      description,
      height,
      length,
      name,
      width,
      price: convertPriceForDatabase(price)
    };

    this.props.onSubmit(submitObject);
  };

  validateDimensions = () => {
    const { height, length, width } = this.state;

    if (height && length && width) {
      return true;
    }

    if (!height && !length && !width) {
      return true;
    }

    return false;
  };

  render() {
    const {
      category,
      description,
      error,
      height,
      isSaveButtonDisabled,
      length,
      name,
      price,
      width
    } = this.state;

    return (
      <div className="gallery-piece-form">
        <div className="gallery-piece-form__error">
          {error && <FormError error={error} />}
        </div>
        <Input
          label="Name"
          name="name"
          onChange={this.handleNameChange}
          value={name}
        />
        <Input
          label="Price"
          name="price"
          onChange={this.handlePriceChange}
          value={price}
        />
        <div className="gallery-piece-form__input">
          <div className="gallery-piece-form__input-title">Category</div>
          <select onChange={this.handleCategoryChange} value={category}>
            {categories.map(categoryMap => {
              const { key, value } = categoryMap;
              if (key === "ALL") {
                return (
                  <option key="NONE" value="NONE">
                    Please select a category
                  </option>
                );
              }
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className="gallery-piece-form__dimensions">
          <Input
            label="Length&nbsp;(in.)"
            name="length"
            onChange={this.handleDimensionChange}
            value={length}
          />
          <Input
            label="Width&nbsp;(in.)"
            name="width"
            onChange={this.handleDimensionChange}
            value={width}
          />
          <Input
            label="Height&nbsp;(in.)"
            name="height"
            onChange={this.handleDimensionChange}
            value={height}
          />
        </div>
        <div className="gallery-piece-form__input">
          <div className="gallery-piece-form__input-title">Description</div>
          <textarea
            maxLength="160"
            onChange={this.handleDescriptionChange}
            placeholder="Describe your piece"
            rows="6"
            value={description}
          />
        </div>
        <button
          className="gallery-piece-form__button"
          disabled={isSaveButtonDisabled}
          onClick={this.handleSubmit}
        >
          Save
        </button>
      </div>
    );
  }
}

GalleryPieceForm.propTypes = {
  galleryPiece: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};

export default GalleryPieceForm;
