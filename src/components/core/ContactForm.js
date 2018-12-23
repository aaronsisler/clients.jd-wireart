import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmailValid, sendEmail } from 'Tools/email';
import ContactFormError from 'Core/ContactFormError';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonText: "Send It",
            error: {},
            emailError: false,
            emailSent: false,
            isSendButtonDisabled: true,
            emailAddress: "",
            name: "",
            phoneNumber: "",
            message: "",
        }
    }

    handleEmailInput = (e) => {
        const { value } = e.target;
        const emailAddress = value.trim();
        return this.setState(() => ({ emailAddress }), this.validateRequiredFields);
    }

    handleEmailValidation = () => {
        if (!isEmailValid(this.state.emailAddress)) {
            return this.handleError('emailAddress', 'Enter a valid email address');
        }

        return this.handleError('emailAddress');
    }

    handleError = (inputName, inputValue = undefined) => {
        //Remove from Error
        if (!inputValue) {
            const { [inputName]: unused, ...error } = this.state.error; // eslint-disable-line no-unused-vars
            return this.setState(() => ({
                error
            }), this.validateRequiredFields);
        }
        //Add to Error
        return this.setState(() => ({
            error: { ...this.state.error, [inputName]: inputValue }
        }), this.validateRequiredFields);
    }

    handleNameInput = (e) => {
        const { value: name } = e.target;

        return this.setState(() => ({ name }), this.validateRequiredFields);
    }

    handleMessageInput = (e) => {
        const { value: message } = e.target;

        return this.setState(() => ({ message }));
    }

    handleNameValidation = (e) => {
        const { name: inputName, value } = e.target;
        if (!value) {
            return this.handleError(inputName, 'Name is a required field');
        }
        return this.handleError(inputName);
    }

    handlePhoneInput = (e) => {
        const { value: phoneNumber } = e.target;

        if (!phoneNumber || (phoneNumber.match(/^[0-9]*$/))) {
            return this.setState(() => ({ phoneNumber }));
        }
    }

    handlePhoneValidation = () => {
        const { phoneNumber } = this.state;
        if (phoneNumber && phoneNumber.length != 10) {
            return this.handleError('phoneNumber', 'Phone number must be 10 digits');
        }
        return this.handleError('phoneNumber');
    }

    handleSubmitContact = () => {
        this.setState(() => ({
            buttonText: "Sending",
            isSendButtonDisabled: true
        }));

        const { emailAddress, message, name, phoneNumber } = this.state;
        const { galleryPieceId, galleryPieceName } = this.props;
        const data = {
            emailAddress,
            galleryPieceId,
            galleryPieceName,
            message,
            name,
            phoneNumber,
        };
        const done = () => this.setState(() => ({ emailSent: true }));
        const fail = () => this.setState(() => ({ emailError: true }));
        sendEmail(data, done, fail);
    }

    validateRequiredFields = () => {
        const { emailAddress, error, name } = this.state;

        if (emailAddress && name && Object.keys(error).length === 0) {
            return this.setState(() => ({ isSendButtonDisabled: false }));
        }

        return this.setState(() => ({ isSendButtonDisabled: true }));
    }

    render() {
        const { emailAddress, error, isSendButtonDisabled, message, name, phoneNumber } = this.state;

        return (
            <div className="contact_form">
                {
                    (!this.state.emailSent && !this.state.emailError)
                    &&
                    <div className="contact_form__form">
                        <div className="contact_form__input">
                            {error.name && <ContactFormError error={error.name} />}
                            <input
                                type="text"
                                name="name"
                                placeholder="Name (Required)"
                                onChange={this.handleNameInput}
                                onBlur={this.handleNameValidation}
                                value={name}
                            />
                        </div>
                        <div className="contact_form__input">
                            {error.emailAddress && <ContactFormError error={error.emailAddress} />}
                            <input
                                type="text"
                                name="emailAddress"
                                placeholder="Email (Required)"
                                onBlur={this.handleEmailValidation}
                                onChange={this.handleEmailInput}
                                value={emailAddress}
                            />
                        </div>
                        <div className="contact_form__input">
                            {error.phoneNumber && <ContactFormError error={error.phoneNumber} />}
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone (Digits only, no dashes, etc.)"
                                onBlur={this.handlePhoneValidation}
                                onChange={this.handlePhoneInput}
                                value={phoneNumber}
                            />
                        </div>
                        {
                            this.props.galleryPieceName
                            &&
                            <div className="contact_form__gallery_piece">
                                I would like to purchase the following piece:
                                <br />
                                {this.props.galleryPieceName}
                            </div>
                        }
                        <div className="contact_form__input">
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="What's on your mind?"
                                onChange={this.handleMessageInput}
                                value={message}
                            ></textarea>
                        </div>
                        <button
                            className="contact_form__button"
                            disabled={isSendButtonDisabled}
                            onClick={this.handleSubmitContact}
                        >
                            {this.state.buttonText}
                        </button>
                    </div>
                }
                {
                    this.state.emailSent &&
                    <div className="contact_form__email">
                        <p>Thank you for reaching out! We are excited to get back in touch with you.</p>
                    </div>
                }
                {
                    this.state.emailError &&
                    <div className="contact_form__email">
                        <p>Something went wrong unfortunately. Please try reloading the page.</p>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { id: galleryPieceId } = props.match.params;
    const galleryPieceName = galleryPieceId
        ? state.gallery.find((galleryPiece) => galleryPiece.galleryPieceId == galleryPieceId).name
        : undefined;
    return ({
        galleryPieceId,
        galleryPieceName,
    });
};


const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    galleryPieceId: PropTypes.string,
    galleryPieceName: PropTypes.string,
};
