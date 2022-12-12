import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import classes from "./PropertiesPage.module.css";

const PropertiesPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [propsData, setPropsData] = useState({});
  const [error, setError] = useState(false);
  const { state, category } = props;

  console.log(state, category);

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const res = await axios.get(
  //         `http://127.0.0.1:5000/api/properties/?state=${state}&category=${category}`
  //       );
  //       if (res) setPropsData(res.data.data);
  //       setLoading(false);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     setError(true);
  //     console.log(error);
  //   }
  // }, [state, category]);

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

  if (error) return <h3>Oops Something!</h3>;

  return (
    <div>
      <Header headerMsg={propHeader} />
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <div className={classes.section}>
          {propsData.map((property) => (
            <div key={property._id} className={classes.content}>
              <div className={classes.image}>
                <Link to={`/props/${property._id}`}>
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
                <p>
                  <span>Title:</span>
                  {` ${property.title}`}
                </p>
                <h4>Description</h4>
                <p>{property.description}</p>
                <h4>Location</h4>
                <p>{property.location}</p>
                <div className={classes.button}>
                  <Link to={`/props/${property._id}`}>View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesPage;
