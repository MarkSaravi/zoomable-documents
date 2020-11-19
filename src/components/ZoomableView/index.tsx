/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React, { useState } from "react";
import { ICON_SIZE } from '../../constants';
import type { IZoomable } from '../../models/types';
import { ZoomIn, ZoomOut } from "../Buttons";

type OwnProps = {
  content: IZoomable;
};

type Props = OwnProps;

const ZoomableView: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(0);
  return (
    <table>
      <tr>
        <td>
          <div dangerouslySetInnerHTML={{ __html: content.toString().content }} />
        </td>
        <td style={{ width:`${ICON_SIZE+8}px`, padding: '4px' }}>
          <ZoomIn handler={()=> setZoomLevel(content.zoomIn().level) } />
          <ZoomOut handler={()=> setZoomLevel(content.zoomOut().level) } />
          <span style={{width:`${ICON_SIZE+2}px`, padding: 'auto'}}>{zoomLevel+1}</span>
        </td>
      </tr>
    </table>
  );
};

export { ZoomableView };
