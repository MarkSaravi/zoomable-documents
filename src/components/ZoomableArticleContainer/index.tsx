/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { Zoomable } from "./Zoomable";
import { ZoomableArticleView } from '../ZoomableArticle';

const ZoomableArticleContainer: React.FC = () => {
    const zoomable = new Zoomable({ levels: [], sentences: [] });
  return (
    <>
      <ZoomableArticleView content={zoomable} />
    </>
  );
};

export { ZoomableArticleContainer };
