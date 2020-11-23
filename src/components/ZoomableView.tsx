/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-lonely-if */

import React, { useState, useEffect, MouseEvent } from "react";
import type { Sentences, SentencesLevels } from '../models/types';
import { getMaxLevel } from "../models/utils";
import Paragraphs from './Paragraphs';

type CursorType = 'zoom-in' | 'zoom-out';

type Props = {
  sentences: Sentences;
  levels: SentencesLevels;
  setZoomLevel: (id: string, zoomLevel: number) => void;
};

const ZoomableView: React.FC<Props> = (props: Props) => {
  const { sentences, levels, setZoomLevel } = props;
  const { id } = sentences;
  const maxLevel = getMaxLevel(sentences);
  const [cursor, setCursor] = useState<CursorType>('zoom-in');
  const { zoomLevel } = levels[id];

  const onMouseClicked = (event: MouseEvent) => {
    if (event.shiftKey) {
      if (zoomLevel > 0) {
        setZoomLevel(id, zoomLevel - 1);
      }
    } else {
      if (zoomLevel < maxLevel) {
        setZoomLevel(id, zoomLevel + 1);
      }
    }
  };

  const setMouseCursor = (event: MouseEvent) => {
    if (event.shiftKey && cursor !== 'zoom-out') {
      setCursor('zoom-out');
    } else if (!event.shiftKey && cursor !== 'zoom-in') {
      setCursor('zoom-in');
    }
  };

  const onMouseEntered = (event: MouseEvent) => {
    setMouseCursor(event);
  };

  const onMouseMoved = (event: MouseEvent) => {
    setMouseCursor(event);
  };

  useEffect(() => {
    console.log('\x1b[34m%s\x1b[0m', `zoomLevel: ${zoomLevel}`);
  }, [zoomLevel]);

  return (
      <section
        onClick={onMouseClicked}
        onMouseEnter={onMouseEntered}
        onMouseMove={onMouseMoved}
        style={{ cursor }}
      >
        <Paragraphs
          sentences={sentences}
          levels={levels}
          setZoomLevel={setZoomLevel}
        />
      </section>
  );
};

export { ZoomableView };
