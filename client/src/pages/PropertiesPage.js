import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import PropsData from "../data/PropsData";

import classes from "./PropertiesPage.module.css";

const PropertiesPage = () => {
  useEffect(() => {
    
  }, []);

  const propHeader = (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Available Properties</h2>
      <p>You Can Never Go Wrong With Rhonn</p>
    </div>
  );
  return (
    <div>
      <Header headerMsg={propHeader} />
      <div className={classes.section}>
        {PropsData.map((property) => (
          <div key={property.id} className={classes.content}>
            <div className={classes.image}>
              <Link to={`/props/${property.id}`}>
                <img src={property.image} alt={`${property.name}-pic`} />
              </Link>
              <p>{`${property.price}M`}</p>
            </div>
            <div className={classes.description}>
              <h3>{property.name}</h3>
              <p>
                <span>Price:</span>
                {` ${property.price}M`}
              </p>
              <p><span>Title:</span>{` ${property.title}`}</p>
              <h4>Description</h4>
              <p>{property.description}</p>
              <h4>Location</h4>
              <p>{property.location}</p>
              <div className={classes.button}>
                <Link to={`/props/${property.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
