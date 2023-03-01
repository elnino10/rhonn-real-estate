import React from "react";

import LandItem from "./LandItem";
import classes from "./AvailablePropsList.module.css";

const AvailableLandsList = (props) => {
  const { state, category, lands } = props;

  return (
    <ul className={classes.houses}>
      {lands ? lands.map((item) => (
        <LandItem
          key={item._id}
          id={item._id}
          name={item.name}
          image={item.image}
          images={item.images}
          description={item.description}
          location={item.location}
          features={item.features}
          featureDesc={item.featureDesc}
          state={state}
          category={category}
        />
      )) : <h3>No Lands on-listing! Please check back later</h3>}
    </ul>
  );
};

export default AvailableLandsList;
