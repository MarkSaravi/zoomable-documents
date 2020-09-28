/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { Zoomable } from "./Zoomable";
import { ZoomableArticleView } from '../ZoomableArticle';
import { FIRST_SENTENCE_ID } from '../../constants';
import { ZoomableSentences } from "../../types";

const LEVEL0 = 'l0';
const LEVEL1 = 'l1';
const SENTENCE00 = 'sentence00';
const SENTENCE01 = 'sentence01';
const SENTENCE02 = 'sentence02';
const SENTENCE03 = 'sentence03';
const SENTENCE04 = 'sentence04';
const SENTENCE05 = 'sentence05';
const SENTENCE06 = 'sentence06';
const SENTENCE07 = 'sentence07';

const zoomableSentences: ZoomableSentences = {
  levels: [LEVEL0, LEVEL1],
  sentences: [
    {
      id: SENTENCE00,
      positions: {
        [LEVEL0]: {
          levelId: LEVEL0,
          after: FIRST_SENTENCE_ID,
        },
        [LEVEL1]: {
          levelId: LEVEL1,
          after: SENTENCE03,
        },
      },
      content: 'This is sentence 00',
    },
    {
      id: SENTENCE01,
      positions: {
        [LEVEL0]: {
          levelId: LEVEL0,
          after: SENTENCE00,
        },
        [LEVEL1]: {
          levelId: LEVEL1,
          after: SENTENCE04,
        },
      },
      content: 'This is sentence 01',
    },
    {
      id: SENTENCE02,
      positions: {
        [LEVEL0]: {
          levelId: LEVEL0,
          after: SENTENCE01,
        },
        [LEVEL1]: {
          levelId: LEVEL1,
          after: SENTENCE05,
        },
      },
      content: 'This is sentence 02',
    },
    {
      id: SENTENCE03,
      positions: {
        [LEVEL1]: {
          levelId: LEVEL1,
          after: FIRST_SENTENCE_ID,
        },
      },
      content: 'This is sentence 03',
    },
    {
      id: SENTENCE04,
      positions: {
        [LEVEL1]: {
          levelId: LEVEL1,
          after: SENTENCE00,
        },
      },
      content: 'This is sentence 04',
    },
    {
      id: SENTENCE05,
      positions: {
        [LEVEL1]: {
          levelId: LEVEL1,
          after: SENTENCE01,
        },
      },
      content: 'This is sentence 05',
    },
    {
      id: SENTENCE06,
      positions: {
        [LEVEL1]: {
          levelId: LEVEL1,
          after: SENTENCE02,
        },
      },
      content: 'This is sentence 06',
    },
    {
      id: SENTENCE07,
      positions: {
        [LEVEL1]: {
          levelId: LEVEL1,
          after: SENTENCE06,
        },
      },
      content: 'This is sentence 07',
    },
  ],
};

const ZoomableArticleContainer: React.FC = () => {
    const zoomable = new Zoomable(zoomableSentences);
  return (
    <>
      <div style={{ width: "480px", margin: "48px", textIndent: '24px' }}>
        <ZoomableArticleView content={zoomable} />
      </div>
    </>
  );
};

export { ZoomableArticleContainer };
