import React from "react";
import AvailablePropsList from "./AvailablePropsList";

// import PropsData from "../data/PropsData";

const AllProps = (props) => {
  const { state, category, data } = props;

  return (
    <AvailablePropsList
      state={state}
      category={category}
      houses={data}
    />
  );
};

export default AllProps;
