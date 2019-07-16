import React from "react";
import PropTypes from "prop-types";
import { sendEmail, isEmailValid } from "../../tools/email";
import FormError from "../form-error";
import Input from "../input";
import "./contact-form.scss";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Send It",
      emailAddress: "",
      emailError: false,
      emailSent: false,
      error: {},
      isSendButtonDisabled: true,
      message: "",
      name: "",
      phoneNumber: ""
    };
  }

  handleEmailValidation = e => {
    const { value: inputValue } = e.target;

    if (!isEmailValid(inputValue)) {
      return this.setState(
        prevState => ({
          ...prevState,
          error: {
            ...prevState.error,
            emailAddress: "Please enter a valid email address"
          }
        }),
        this.validateRequiredFields()
      );
    }

    return this.setState(
      prevState => ({
        ...prevState,
        error: { ...prevState.error, emailAddress: undefined }
      }),
      this.validateRequiredFields()
    );
  };

  handleInput = e => {
    const { name: inputName, value: inputValue } = e.target;

    return this.setState(prevState => ({
      ...prevState,
      [inputName]: inputValue
    }));
  };

  handleNameValidation = () => {
    if (!this.state.name) {
      return this.setState(
        prevState => ({
          ...prevState,
          error: { ...prevState.error, name: "Please enter your name" }
        }),
        this.validateRequiredFields()
      );
    }

    return this.setState(
      prevState => ({
        ...prevState,
        error: { ...prevState.error, name: undefined }
      }),
      this.validateRequiredFields()
    );
  };

  handlePhoneInput = e => {
    const phoneNumber = e.target.value;

    if (
      !phoneNumber ||
      (phoneNumber.match(/^[0-9]*$/) && phoneNumber.length <= 10)
    ) {
      return this.setState(() => ({ phoneNumber }));
    }
  };

  handlePhoneValidation = () => {
    const { phoneNumber } = this.state;
    if (phoneNumber && phoneNumber.length !== 10) {
      return this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          phoneNumber: "Phone number must be 10 digits"
        }
      }));
    }
    return this.setState(prevState => ({
      ...prevState,
      error: { ...prevState.error, phoneNumber: undefined }
    }));
  };

  validateRequiredFields = () => {
    const { emailAddress, error, name } = this.state;
    const { emailAddress: emailAddressError, name: nameError } = error;

    if (emailAddress && name && !emailAddressError && !nameError) {
      return this.setState({ isSendButtonDisabled: false });
    }

    return this.setState({ isSendButtonDisabled: true });
  };

  handleSubmitContactForm = () => {
    this.setState({ buttonText: "Sending", isSendButtonDisabled: true });

    const { emailAddress, message, name, phoneNumber } = this.state;
    const { galleryPieceId, galleryPieceName } = this.props;
    const data = {
      emailAddress,
      galleryPieceId,
      galleryPieceName,
      message,
      name,
      phoneNumber
    };

    const done = () => this.setState({ emailError: false, emailSent: true });
    const fail = () =>
      this.setState({
        emailError: true,
        isSendButtonDisabled: false,
        buttonText: "Send It"
      });

    sendEmail(data, done, fail);
  };

  render() {
    const { galleryPieceName, isCustom } = this.props;
    const {
      emailAddress,
      emailSent,
      emailError,
      error,
      isSendButtonDisabled,
      message,
      name,
      phoneNumber
    } = this.state;

    return (
      <div className="contact-form">
        {emailSent && (
          <div className="contact-form__email">
            Thank you for reaching out! We are excited to get back in touch with
            you.
          </div>
        )}
        {emailError && (
          <div className="contact-form__email contact-form__email--error">
            Something went wrong unfortunately. Please try sending again.
          </div>
        )}
        {!emailSent && (
          <React.Fragment>
            <div className="contact-form__header">
              <div className="contact-form__header-content">
                We are more than happy to answer any questions you may have.
              </div>
            </div>
            <div className="contact-form__form">
              <div className="contact-form__form-input">
                {error.name && <FormError error={error.name} />}
                <Input
                  label="Name"
                  name="name"
                  onBlur={this.handleNameValidation}
                  onChange={this.handleInput}
                  value={name}
                />
              </div>
              <div className="contact-form__form-input">
                {error.emailAddress && <FormError error={error.emailAddress} />}
                <Input
                  label="Email"
                  name="emailAddress"
                  onBlur={this.handleEmailValidation}
                  onChange={this.handleInput}
                  value={emailAddress}
                />
              </div>
              <div className="contact-form__form-input">
                {error.phoneNumber && <FormError error={error.phoneNumber} />}
                <Input
                  label="Phone (Digits only, no dashes, etc.)"
                  name="phone"
                  onBlur={this.handlePhoneValidation}
                  onChange={this.handlePhoneInput}
                  value={phoneNumber}
                />
              </div>
              {galleryPieceName && (
                <div className="contact-form__form-order">
                  I would like to {isCustom ? "custom order" : "purchase"} the
                  following piece: {galleryPieceName}
                </div>
              )}
              <textarea
                name="message"
                rows="4"
                placeholder="What's on your mind?"
                onChange={this.handleInput}
                value={message}
              />
              <button
                className="contact-form__form-button"
                disabled={isSendButtonDisabled}
                onClick={this.handleSubmitContactForm}
              >
                {this.state.buttonText}
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

ContactForm.propTypes = {
  galleryPieceId: PropTypes.string,
  galleryPieceName: PropTypes.string,
  isCustom: PropTypes.bool
};

export default ContactForm;
