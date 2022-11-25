import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import formUrl from "../../config/form-url"; // The endpoint

import SideLink from "./SideLink";
import InputField from "./InputField";

import "animate.css";

const Contact = () => {
  const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const [userInput, setUserInput] = useState(initialState);

  useEffect(() => {
    document.title = "Contact me"; // making the document title dynamic
  }, []);

  const handleChange = (e) => {
    // onChange handler
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUserInput({ ...initialState }); // Reset the form to the 'initialState'
  };

  const sendData = (e) => {
    e.preventDefault();
    axios // Make the request to the backend
      .post(formUrl, { formData: userInput }) // e.g. "http://localhost:5050/form-data"
      .then((res) => success()) // If we got the response, show the 'success' toast
      .catch((err) => failed()) // Catch any error and show he 'error' toast
      .finally(resetForm()); // Reset the form, errors, responseData
  };

  // My custom toast
  const success = () => {
    toast.warning(() => (
      <div className="myToast">
        <p>
          {" "}
          Thank you for reaching out{" "}
          <span role="img" aria-label="text">
            👍
          </span>
        </p>
        <span style={{ float: "right" }} role="img" aria-label="author">
          <b>-</b> Dzenis
        </span>
      </div>
    ));
  };

  const failed = () => {
    toast.error(() => (
      <div className="myToast">
        <p>
          {" "}
          Network error, please try again later{" "}
          <span role="img" aria-label="text">
            😥
          </span>
        </p>
      </div>
    ));
  };

  const { name, company, phone, email, message } = userInput;

  return (
    <main id="contact">
      <h1 className="lg-heading textShadow">
        <span className="heading-about">Contact</span>
        <i className="dark-heading gold-headings"> Me</i>{" "}
      </h1>

      <div className="contact-container">
        <div className="wrapper animate__animated bounceInLeft">
          <div className="company-info">
            <h2 className="lead">Additional info:</h2>
            <small className="post-title" style={{ color: "firebrick" }}>
              For convenience, the contact info is clickable.
            </small>
            <ul className="contact-list">
              <SideLink
                link="https://www.linkedin.com/in/dzenis-h"
                linkAlt="LinkedIn field"
                icon="fab fa-linkedin-in"
                text="Find me on LinkedIn"
              />
              <SideLink
                link="mailto:dzenis.hankusic@gmail.com"
                linkAlt="Email field"
                icon="fas fa-at"
                text="Send me an Email"
              />
              <SideLink
                link="tel:00387644543006"
                linkAlt="Phone number field"
                icon="fas fa-mobile-alt"
                text="Call my Phone"
              />
              <SideLink
                link="skype:dzenis.hankusic?call"
                linkAlt="Skype field"
                icon="fab fa-skype"
                text="Call me via Skype"
              />
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="contact">
            <h1 className="contact-heading">Contact Form</h1>
            <p className="contact-plus">
              For any queries please contact me using this form or by other
              provided contact info.
            </p>

            <form id="contact-form" onSubmit={sendData}>
              <InputField
                label="Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                isRequired="required"
                placeholder="REQUIRED"
              />
              <InputField
                label="Company"
                type="text"
                name="company"
                value={company}
                onChange={handleChange}
                isRequired=""
                placeholder="OPTIONAL"
              />
              <InputField
                label="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                isRequired="required"
                placeholder="REQUIRED"
              />
              <InputField
                label="Phone Number"
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
                isRequired=""
                placeholder="OPTIONAL"
              />
              <InputField
                textarea
                className="full"
                label="Message"
                rows="5"
                name="message"
                value={message}
                onChange={handleChange}
                isRequired="required"
                placeholder="REQUIRED"
              />
              <div className="full">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer autoClose={4000} closeOnClick />
      </div>
    </main>
  );
};

export default Contact;
