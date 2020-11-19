/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React, { useState } from "react";
import { ICON_SIZE } from '../../models/constants';
import type { IZoomable } from '../../models/types';
import { ZoomIn, ZoomOut } from "../Buttons";

type OwnProps = {
  content: IZoomable;
};

type Props = OwnProps;

const ZoomableView: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(0);
  const maxLevel = content.getMaxLevel();
  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: content.toString().content }} />
    {zoomLevel < maxLevel && <ZoomIn handler={()=> setZoomLevel(content.zoomIn().level) } />}
    {zoomLevel > 0 && <ZoomOut handler={()=> setZoomLevel(content.zoomOut().level) } />}
    </div>
  );
};

export { ZoomableView };
