import React from 'react';
import "../styles/Contact.css";
import { PhoneCall, Mail, Twitter, Linkedin, MapPin } from 'react-feather'


const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__container--body">
        <div className="contact__body--title">
          <h2>Contact Info</h2>
          <div className="contact__title--details">
            <h3>
              <PhoneCall />
            </h3>
            <span>+254795029709</span>
          </div>
          <div className="contact__title--details">
            <h3>
              <Mail />
            </h3>
            <span>Johnkatua99@gmail.com</span>
          </div>
          <div className="contact__title--details">
            <h3>
              <Twitter />
            </h3>
            <span>@realKatua_</span>
          </div>
          <div className="contact__title--details">
            <h3>
              <Linkedin />
            </h3>
            <span>John Katua</span>
          </div>
          <div className="contact__title--details">
            <h3>
              <MapPin />
            </h3>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
        <div className="contact__body--form">
          <form className="contact__form">
            <div className="contact__form--name">
              <span>
                <label className="contact__label--name">
                  Name:
                  <input />
                </label>
              </span>
              <span>
                <label className="contact__label--email">
                  Email:
                  <input />
                </label>
              </span>
            </div>
            <div className="contact__form--message">
              <label>
                <span>Message:</span>
                <textarea></textarea>
              </label>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
