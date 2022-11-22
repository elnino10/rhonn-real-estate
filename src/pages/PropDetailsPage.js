import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import classes from "./PropDetailsPage.module.css";

import PropsData from "../data/PropsData";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const PropDetailsPage = () => {
  const [image, setImage] = useState(null);
  const [imageClicked, setImageClicked] = useState(false);
  const params = useParams();

  const property = PropsData.find((item) => item.id === params.itemId);

  console.log(property);

  const viewImageHandler = (id) => {
    if (image !== null) {
      setImageClicked(false);
    }
    setImageClicked(true);
    const viewImage = property.images.find((el) => el.id === id);
    setImage(viewImage.view);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  const details = (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{property.name}</h2>
      <p>You Can Never Go Wrong With Rhonn</p>
    </div>
  );

  return (
    <>
      <Header headerMsg={details} />
      <div className={classes.details}>
        <div className={classes.header}>
          <h3>{property.name}</h3>
          <p>{property.description}</p>
          <p>
            <span>
              <CiLocationOn />
            </span>
            {property.location}
          </p>
        </div>
        <div className={classes.section}>
          <div className={classes["prop-details"]}>
            <div className={classes.images}>
              <div className={classes["top-image"]}>
                <img
                  src={!imageClicked ? property.image : image}
                  alt={`${property.name}-img`}
                />
              </div>
              <div className={classes["sub-images"]}>
                <ul>
                  {property.images.map((img) => (
                    <li key={img.id}>
                      <img
                        src={img.view}
                        alt={`${img.id}-img`}
                        onClick={viewImageHandler.bind(null, img.id)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.features}>
              <div>
                <h4>Description</h4>
                <p>{property.featureDesc}</p>
              </div>
              <div>
                <h4>Contact Us</h4>
                <p>Call on: 080*******</p>
                <p>WhatsApp on: 080*******</p>
              </div>
              <div>
                <h4>Features</h4>
                <ul>
                  {property.features.map((el) => (
                    <li key={el.id}>{el.feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.form}>
            <h4>Drop A message</h4>
            <form>
              <textarea
                name="message"
                placeholder="message..."
                rows="5"
                cols="35"
              />
              <br></br>
              <label htmlFor="name">Name</label>
              <input type="text" />
              <br></br>
              <label htmlFor="email">Email</label>
              <input type="email" />
              <br></br>
              <label htmlFor="phone number">Phone Number</label>
              <input type="number" />
              <br></br>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropDetailsPage;
