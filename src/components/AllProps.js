import React from 'react';
import AvailablePropsList from './AvailablePropsList';

import PropsData from "../data/PropsData";

const AllProps = () => {
    return <AvailablePropsList houses={PropsData} />;
};

export default AllProps;