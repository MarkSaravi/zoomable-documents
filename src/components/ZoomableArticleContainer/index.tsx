/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { ZoomableArticleView } from '../ZoomableArticle';
import { Sentence } from "../../zoomable-content/types";
import ZoomableContent from "../../zoomable-content";
import sentences from '../../data/sample-contents/Ferdowsi';

const ZoomableArticleContainer: React.FC = () => {
  const zoomable = new ZoomableContent(sentences, true);
  return (
    <>
      <div style={{ width: "800px", margin: "48px", textIndent: '24px' }}>
        <ZoomableArticleView content={zoomable} />
      </div>
    </>
  );
};

export default ZoomableArticleContainer;
