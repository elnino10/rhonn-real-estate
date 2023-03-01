import React from "react";

import rhonn from "../assets/images/rhonn-logo.png";

import classes from "./ContactUs.module.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
  return (
    <>
      <div id="contact" className={classes["contact-us"]}>
        <div className={classes["contact-header"]}>
          <img src={rhonn} alt="rhonn-logo" />
          <div className={classes.registered}>R</div>
          <h1>Rhonn</h1>
          <p>Real Estate</p>
        </div>
        <div className={classes.links}>
          <div className={classes["contact-address"]}>
            <h4>Contact Us</h4>
            <div className={classes.phone}>
              <div>
                <AiOutlinePhone />
              </div>
              <div className={classes["phone-numbers"]}>
                <p>+2348100382301</p>
              </div>
            </div>
            <div className={classes.email}>
              <div>
                <AiOutlineMail />
              </div>
              <div>
                <p>real.rhonn@gmail.com</p>
              </div>
            </div>
            <div className={classes.address}>
              <div>
                <CiLocationOn />
              </div>
              <div>
                <p>No.1 lorem ipsum</p>
              </div>
            </div>
          </div>
          <div className={classes.socials}>
            <h4>Social Media</h4>
            <div className={classes.socialLink}>
              <div>
                <AiOutlineFacebook />
              </div>
              <div>
                <a
                  href="https://web.facebook.com/profile.php?id=100063538042434"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    facebook{" "}
                    <span className={classes.tooltiptext}>
                      follow us on facebook
                    </span>
                  </p>
                </a>
              </div>
            </div>
            <div className={classes.socialLink}>
              <div>
                <AiOutlineInstagram />
              </div>
              <div>
                <a
                  href="instagram.com/rhonn_real_estate/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    Instagram{" "}
                    <span className={classes.tooltiptext}>
                      follow us on intagram
                    </span>
                  </p>
                </a>
              </div>
            </div>
            <div className={classes.socialLink}>
              <div>
                <AiOutlineTwitter />
              </div>
              <div>
                <a href="twitter.com" target="_blank" rel="noreferrer">
                  <p>
                    Twitter{" "}
                    <span className={classes.tooltiptext}>
                      follow us on twitter
                    </span>
                  </p>
                </a>
              </div>
            </div>
            <div className={classes.socialLink}>
              <div>
                <FaTiktok />
              </div>
              <div>
                <p>
                  Tiktok{" "}
                  <span className={classes.tooltiptext}>follows on tiktok</span>
                </p>
              </div>
            </div>
            <div className={classes.socialLink}>
              <div>
                <AiOutlineYoutube />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@rhonnrealestate2551"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    Youtube
                    <span className={classes.tooltiptext}>
                      join us on youtube
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>
          copyright
          <span>
            <AiOutlineCopyrightCircle />
          </span>{" "}
          Rhonn Real Estate 2022. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default ContactUs;
