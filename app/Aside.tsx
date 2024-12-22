"use client";
// import motion from "motion/react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  MailOutline,
  PhonePortraitOutline,
  CalendarOutline,
  LocationOutline,
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
  LogoLinkedin,
  LogoGithub,
} from "react-ionicons";
const Aside = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag
          >
            <img
              src="./assets/images/my-avatar-3.jpg"
              alt="Shreyansh Rathore"
              width="80"
            />
          </motion.button>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Shreyansh Rathore">
            Shreyansh Rathore
          </h1>

          <p className="title">Full Stack developer</p>
          <div className="mt-4">
            <ul className="social-list">
              <li className="social-item">
                <a href="#" className="social-link">
                  <LogoLinkedin color={"#FFDB6E"} />
                </a>
              </li>

              <li className="social-item">
                <a href="#" className="social-link">
                  <LogoTwitter color={"#FFDB6E"} />
                </a>
              </li>

              <li className="social-item">
                <a href="#" className="social-link">
                  <LogoGithub color={"#FFDB6E"} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <div className="text-blue-500">
            <ChevronDown />
          </div>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline color={"#FFDB6E"} />
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
              <PhonePortraitOutline color={"#FFDB6E"} />
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
              <CalendarOutline color={"#FFDB6E"} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time>April 29, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOutline color={"#FFDB6E"} />
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
              <LogoFacebook color={"#FFDB6E"} />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <LogoTwitter color={"#FFDB6E"} />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <LogoInstagram color={"#FFDB6E"} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
