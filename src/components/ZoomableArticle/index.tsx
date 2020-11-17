/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React, { useState } from "react";
import type { IZoomable } from '../../zoomable-content/types';
import { ZoomIn, ZoomOut } from "../Buttons";

type OwnProps = {
  content: IZoomable;
};

type Props = OwnProps;

const ZoomableArticleView: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(0);
return (
  <>
    <ZoomIn handler={()=> setZoomLevel(content.zoomIn().level) } />
    <ZoomOut handler={()=> setZoomLevel(content.zoomOut().level) } />
    
    <div dangerouslySetInnerHTML={{ __html: content.toString().content }} />
  </>
);
};

export { ZoomableArticleView };
