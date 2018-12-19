import React from 'react';
import ContactForm from 'Core/ContactForm';

const ContactPage = (props) => (
    <div id='contact_page'>
        <h3>Contact Us</h3>
        <ContactForm {...props} />
    </div>
);

export default ContactPage;
