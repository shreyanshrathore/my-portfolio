"use client";

import {
  ChevronDown,
  MailOutline,
  PhonePortraitOutline,
  CalendarOutline,
  LocationOutline,
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
} from "react-ionicons";
const Aside = () => {
  return (
    <div>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src="./assets/images/my-avatar-3.jpg"
              alt="Shreyansh Rathore"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Shreyansh Rathore">
              Shreyansh Rathore
            </h1>

            <p className="title">Web developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ChevronDown />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <MailOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">
                  shreyansh4rathore.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <PhonePortraitOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +91 6263878588
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <CalendarOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time>June 29, 2003</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <LocationOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Indore, INDIA</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <LogoFacebook />
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <LogoTwitter />
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <LogoInstagram />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
