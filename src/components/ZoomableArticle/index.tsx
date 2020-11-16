/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React, { useState } from "react";
import type { IZoomable } from '../../zoomable-content/types';

type OwnProps = {
  content: IZoomable;
};

type Props = OwnProps;

const ZoomableArticleView: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(0);
return (
  <>
    <input
      type="button"
      value="zoom in"
      onClick={() => {
        if (zoomLevel < 2) {
          setZoomLevel(zoomLevel + 1);
        }
      }}
    />
    <input
      type="button"
      value="zoom out"
      onClick={() => {
        if (zoomLevel > 0) {
          setZoomLevel(zoomLevel - 1);
        }
      }}
    />
    <p style={{ textAlign: "left" }}>{content.toString(zoomLevel)}</p>
  </>
);
};

export { ZoomableArticleView };
