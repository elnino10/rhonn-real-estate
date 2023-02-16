import React from "react";

import LandItem from "./LandItem";
import classes from "./AvailablePropsList.module.css";

const AvailableLandsList = (props) => {
  const { state, category, houses } = props;

  return (
    <ul className={classes.lands}>
      {houses ? houses.map((item) => (
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
      )) : <h3>Nothing come out!</h3>}
    </ul>
  );
};

export default AvailableLandsList;
