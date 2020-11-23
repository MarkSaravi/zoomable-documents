/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { Sentences } from "../models/types";
import { ZoomableView } from './ZoomableView';

type Props = {
    sentences: Sentences;
};

const ZoomableContainer: React.FC<Props> = (props: Props) => {
    const { sentences } = props;
    return (
        <div style={{ width: '800px' }}>
            <ZoomableView sentences={sentences} />
        </div>
    );
};

export default ZoomableContainer;
