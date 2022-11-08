import React from "react";

import classes from "./ContactUs.module.css";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";
import { FaLocationArrow, FaTiktok } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div id="contact" className={classes["contact-us"]}>
      <div className={classes["contact-header"]}>
        <img src="#" alt="rhonn-logo" />
        <div className={classes.registered}>R</div>
        <h1>Rhonn</h1>
        <p>Real Estate</p>
      </div>
      <div className={classes["contact-address"]}>
        <h4>Contact Us</h4>
        <div className={classes.phone}>
          <div>
            <AiOutlinePhone />
          </div>
          <div className={classes["phone-numbers"]}>
            <p>080*********</p>
          </div>
        </div>
        <div className={classes.email}>
          <div>
            <AiOutlineMail />
          </div>
          <div>
            <p>contact@rhonn.com</p>
          </div>
        </div>
        <div className={classes.address}>
          <div>
            <FaLocationArrow />
          </div>
          <div>
            <p>No.1 lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className={classes.socials}>
        <h4>Social Media</h4>
        <div className={classes.facebook}>
          <div>
            <AiOutlineFacebook />
          </div>
          <div>
            <p>facebook.com/RhonnRealEstate</p>
          </div>
        </div>
        <div className={classes.instagram}>
          <div>
            <AiOutlineInstagram />
          </div>
          <div>
            <p>rhonnInstagram</p>
          </div>
        </div>
        <div className={classes.twitter}>
          <div>
            <AiOutlineTwitter />
          </div>
          <div>
            <p>rhonnTwitter</p>
          </div>
        </div>
        <div className={classes.tiktok}>
          <div>
            <FaTiktok />
          </div>
          <div>
            <p>rhonnTiktok</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
