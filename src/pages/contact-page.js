import React from "react";
import ContactContainer from "../containers/contact-container";

const ContactPage = props => (
  <main className="contact-page">
    <ContactContainer {...props} />
  </main>
);

export default ContactPage;
