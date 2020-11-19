/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React, { useState, useEffect, MouseEvent } from "react";
import ReactHtmlParser  from 'react-html-parser';
import type { IZoomable } from '../../models/types';
import { ZoomIn, ZoomOut } from "../Buttons";

type CursorType = 'zoom-in' | 'zoom-out';

type OwnProps = {
  content: IZoomable;
};

type Props = OwnProps;



const ZoomableView: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(0);
  const [cursor, setCursor] = useState<CursorType>('zoom-in');

  const onMouseClicked = (event: MouseEvent) => {
    if (event.shiftKey) {
      setZoomLevel(content.zoomOut().level);
    } else {
      setZoomLevel(content.zoomIn().level);
    }
  };

  const setMouseCursor = (event: MouseEvent) => {
    if (event.shiftKey && cursor != 'zoom-out') {
      setCursor('zoom-out');
    } else if (!event.shiftKey && cursor != 'zoom-in') {
      setCursor('zoom-in');
    }
  }

  const onMouseEntered = (event: MouseEvent) => {
    setMouseCursor(event);
  }
  const onMouseMoved = (event: MouseEvent) => {
    setMouseCursor(event);
  }

  useEffect(()=>{
    console.log('\x1b[34m%s\x1b[0m', `Cursor changed: ${cursor}`);
  },[cursor])

  useEffect(()=>{
    console.log('\x1b[34m%s\x1b[0m', `zoomLevel changed: ${zoomLevel}`);
  },[zoomLevel])

  return (
    <div>
      <section
        onClick={onMouseClicked}
        onMouseEnter={onMouseEntered}
        onMouseMove={onMouseMoved}
        style={{cursor}}
      >
        {ReactHtmlParser(content.toString().content)}
      </section>
    </div>
  );
};

export { ZoomableView };
