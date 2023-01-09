import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import { CiLocationOn } from "react-icons/ci";
import classes from "./PropDetailsPage.module.css";

const PropDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState({});
  const [error, setError] = useState(false); 
  const [image, setImage] = useState(null);
  const [imageClicked, setImageClicked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [response, setResponse] = useState("");
  const params = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `http://127.0.0.1:5000/api/properties/${params.itemId}`
          );
          if (res.data) {
            setProperty(res.data.data.property);
            setLoading(false);
            setPropertyId(params.itemId);
        }
      };
      fetchData();
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }, [params.itemId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewImageHandler = (id) => {
    if (image !== null) {
      setImageClicked(false);
    }
    setImageClicked(true);
    const viewImage = property.images.find((el) => el.id === id);
    setImage(viewImage.view);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    setMessageSent(false);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    setMessageSent(false);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
    setMessageSent(false);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    setMessageSent(false);
  };

  const formIsValid =
    name.trim().length > 1 &&
    message.trim().length > 1 &&
    phone.length > 3 &&
    email;

  const messageSubmitHandler = (e) => {
    e.preventDefault();

    const sendMessage = async () => {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/users/post-message",
        {
          name,
          email,
          phone,
          message,
          propertyId,
        }
      );
      if (res.data) {
        setMessageSent(true);
        setResponse(res.data.status)
        console.log(res.data.message);
      }
    };
    sendMessage();
    setName("");
    setMessage("");
    setEmail("");
    setPhone("");
  };

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

  if (error) return <h3>Ooops Something Went Wrong!</h3>;
  let msgColor = "#1b9883"
  if (response.includes('not')) msgColor = "#fc1703"

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
          {loading ? (
            <p>LOADING...</p>
          ) : (
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
                    {property &&
                      property.images.map((img) => (
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
                  <h4>Price</h4>
                  <p>{`${property.price}M`}</p>
                </div>
                <div>
                  <h4>Title</h4>
                  <p>{property.title}</p>
                </div>
                <div>
                  <h4>Contact Us</h4>
                  <p>Call on: 080*******</p>
                  <p>WhatsApp on: 080*******</p>
                </div>
                <div>
                  <h4>Features</h4>
                  <ul>
                    {property &&
                      property.features.map((el) => <li key={el}>{el}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <div className={classes.form}>
            <h4>Drop A message</h4>
            <form onSubmit={messageSubmitHandler}>
              <textarea
                name="message"
                placeholder="message..."
                rows="5"
                cols="35"
                value={message}
                onChange={messageHandler}
              />
              <br></br>
              <label htmlFor="name">Name</label>
              <input type="text" value={name} onChange={nameHandler} />
              <br></br>
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={emailHandler} />
              <br></br>
              <label htmlFor="phone number">Phone Number</label>
              <input type="tel" value={phone} onChange={phoneHandler} />
              <br></br>
              {messageSent ? (
                <p style={{ color: msgColor }}>{response}</p>
              ) : (
                <button type="submit" disabled={!formIsValid ? true : ""}>
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropDetailsPage;
