/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import ZoomableContainer from '../components/ZooambleContainer';
import data from '../data/color-tests';

const ColorsTest: React.FC = () => {
    return (<ZoomableContainer sentences={data} />);
};

export default ColorsTest;
