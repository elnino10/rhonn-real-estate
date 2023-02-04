import React from "react";

import classes from "./AboutUs.module.css";
import Header from "../components/Header";

const AboutUs = () => {
  window.scrollTo(0, 0);

  const aboutUs = (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Welcome To Rhonn</h2>
      <p>You Can Never Go Wrong With Rhonn</p>
    </div>
  );

  return (
    <>
      <Header headerMsg={aboutUs} />
      <div className={classes["about-us"]}>
        <div className={classes.welcome}>
          <h1>Welcome To Rhonn Real Estate</h1>
          <p>
            Rhonn Real Estate, which was established in 2021 but only officially
            registered in 2022 with the corporate affairs commission, has
            effectively carved out a position for itself as one of the top
            companies in the real estate sector since its start. We are
            dedicated to offering our customers professional real estate
            services. As required by our sector, our services are founded on
            integrity and good etiquette.
          </p>
        </div>
        <div className={classes.goals}>
          <div className={classes.vision}>
            <h3>Our Vision</h3>
            <p>
              Rhonn Real Estate's mission is to advance efficiency, trust, and
              transparency in Nigeria's real estate sector. We are dedicated to
              resolving the issues that property seekers and potential buyers
              encounter. Additionally, we assist property sellers in speeding up
              transactions.
            </p>
          </div>
          <div className={classes.mission}>
            <h3>Our Mission</h3>
            <p>
              At Rhonn Real Estate our aim is to employ contemporary technical
              advancements to address issues facing the real estate sector. Our
              objectives also include giving millions of Nigerians access to
              standardized housing.
            </p>
          </div>
        </div>
        <div className={classes.values}>
          <h3>Core Values</h3>
          <p>
            At Rhonn Real Estate our aim is to employ contemporary technical
            advancements to address issues facing the real estate sector. Our
            objectives also include giving millions of Nigerians access to
            standardized housing.
          </p>
        </div>
        <div className={classes["video-link"]}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/vqJUcdHXXrk?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
