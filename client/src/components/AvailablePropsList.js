import React from "react";

import PropsItem from "./PropsItem";
import classes from "./AvailablePropsList.module.css";

const AvailablePropsList = (props) => {
  const { state, category, houses } = props;

  // console.log(houses[0].image)

  return (
    <ul className={classes.houses}>
      {houses.map((item) => (
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
          state={state}
          category={category}
        />
      ))}
    </ul>
  );
};

export default AvailablePropsList;
