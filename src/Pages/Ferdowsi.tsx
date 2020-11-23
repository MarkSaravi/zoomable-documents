/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import ZoomableContainer from '../components/ZooambleContainer';
import ferdowsiData from '../data/Ferdowsi';

const FerdowsiPage: React.FC = () => {
    return (<ZoomableContainer sentences={ferdowsiData} />);
};

export default FerdowsiPage;
