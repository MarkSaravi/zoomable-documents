/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-lonely-if */

import React from "react";
import type { Sentences, SentencesLevels } from '../models/types';
import { getMaxLevel } from "../models/utils";
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
  const maxLevel = getMaxLevel(sentences);

  return (
    <section style={{ position: 'relative' }}>
      <span style={{ color: 'red', position: 'absolute', left: 'calc(100% - 24px)', top: 0 }}>{zoomLevel + 1}/{maxLevel + 1}</span>
      <Paragraphs
        sentences={sentences}
        levels={levels}
        setZoomLevel={setZoomLevel}
      />
    </section>
  );
};

export { ZoomableView };
