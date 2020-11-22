/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { ZoomableView } from '../components/ZoomableView';
import ferdowsiData from '../data/Ferdowsi';

const FerdowsiPage: React.FC = () => {
    return (
        <div style={{ width: '800px' }}>
            <ZoomableView sentences={ferdowsiData} />
        </div>
    );
};

export default FerdowsiPage;
