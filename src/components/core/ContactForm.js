import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactFormError from 'Core/ContactFormError';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonText: "Send It",
            error: {},
            errorText: "",
            isSendButtonDisabled: true,
            name: "",
        }
    }

    handleSubmitContactForm = (e) => {
        e.preventDefault();
        this.setState(() => ({
            buttonText: "Sending"
        }));
        console.log(this.state.name);
    }

    handleNameInput = (e) => {
        const { value: name } = e.target;
        return this.setState(() => ({ name, isSendButtonDisabled: false, }));
    }

    handleRequiredInput = (e) => {
        const { name: inputName, value } = e.target;
        if (!value) {
            this.handleError(inputName, 'Required field');
            return this.setState(() => ({ errorText: `${inputName} must be supplied` }));
        }
        this.handleError(inputName);
        return this.setState(() => ({ errorText: "" }));
    }

    handleError = (inputName, inputValue = undefined) => {
        //Remove from Error
        if (!inputValue) {
            const { [inputName]: undefined, ...error } = this.state.error; // eslint-disable-line no-unused-vars
            return this.setState(() => ({
                error
            }));
        }
        //Add to Error
        return this.setState(() => ({
            error: { ...this.state.error, [inputName]: inputValue }
        }));
    }

    render() {
        const { error, isSendButtonDisabled, name } = this.state;
        return (
            <div className="contact_form">
                <p>GalleryPieceId: {this.props.galleryPieceId}</p>
                <form onSubmit={this.handleSubmitContactForm}>
                    {error.name && <ContactFormError error={error.name} />}
                    <input
                        type="text"
                        name="name"
                        className='contact_form__input'
                        placeholder="Name (Required)"
                        onChange={this.handleNameInput}
                        onBlur={this.handleRequiredInput}
                        value={name}
                    />
                    <button
                        className="contact_form__button"
                        disabled={isSendButtonDisabled}
                    >
                        {this.state.buttonText}
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    galleryPieceId: props.match.params.id,
});


const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    galleryPieceId: PropTypes.string,
};
