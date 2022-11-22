import React from "react";

import PropsItem from "./PropsItem";
import classes from "./AvailablePropsList.module.css";

const AvailablePropsList = (props) => {
  return (
    <ul className={classes.houses}>
      {props.houses.map((item) => (
        <PropsItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          images={item.images}
          description={item.description}
          location={item.location}
          features={item.features}
          featureDesc={item.featureDesc}
        />
      ))}
    </ul>
  );
};

export default AvailablePropsList;
