/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-lonely-if */

import React, { useEffect } from "react";
import type { Sentences, SentencesLevels } from '../models/types';
import Paragraphs from './Paragraphs';

type Props = {
  sentences: Sentences;
  levels: SentencesLevels;
  setZoomLevel: (id: string, zoomLevel: number) => void;
};

const ZoomableView: React.FC<Props> = (props: Props) => {
  const { sentences, levels, setZoomLevel } = props;
  const { id } = sentences;

  const { zoomLevel } = levels[id];

  useEffect(() => {
    console.log('\x1b[34m%s\x1b[0m', `zoomLevel: ${zoomLevel}`);
  }, [zoomLevel]);

  return (
      <section>
        <Paragraphs
          sentences={sentences}
          levels={levels}
          setZoomLevel={setZoomLevel}
        />
      </section>
  );
};

export { ZoomableView };
