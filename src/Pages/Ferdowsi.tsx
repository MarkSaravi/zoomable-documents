/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { ZoomableView } from '../components/ZoomableView';
import ZoomableContent from "../models/Zoomable";
import ferdowsiData from '../data/sample-contents/Ferdowsi';

const FerdowsiPage: React.FC = () => {
    const zoomable = new ZoomableContent(ferdowsiData, true);
    return (<ZoomableView content={zoomable} />);
};

export default FerdowsiPage;
