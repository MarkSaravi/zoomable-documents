/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { Zoomable } from "./Zoomable";
import { ZoomableArticleView } from '../ZoomableArticle';
import { FIRST_SENTENCE_ID } from '../../constants';
import { Sentence } from "../../zoomable-content/types";

const SENTENCE00 = 'sentence00';
const SENTENCE01 = 'sentence01';
const SENTENCE02 = 'sentence02';
const SENTENCE03 = 'sentence03';
const SENTENCE04 = 'sentence04';
const SENTENCE05 = 'sentence05';
const SENTENCE06 = 'sentence06';
const SENTENCE07 = 'sentence07';

const sentences: Array<Sentence> = [
    {
      id: SENTENCE00,
      positions: {
        0: {
          levelId: 0,
          after: FIRST_SENTENCE_ID,
        },
        1: {
          levelId: 1,
          after: SENTENCE03,
        },
      },
      content: 'This is sentence 00',
    },
    {
      id: SENTENCE01,
      positions: {
        0: {
          levelId: 0,
          after: SENTENCE00,
        },
        1: {
          levelId: 1,
          after: SENTENCE04,
        },
      },
      content: 'This is sentence 01',
    },
    {
      id: SENTENCE02,
      positions: {
        0: {
          levelId: 0,
          after: SENTENCE01,
        },
        1: {
          levelId: 1,
          after: SENTENCE05,
        },
      },
      content: 'This is sentence 02',
    },
    {
      id: SENTENCE03,
      positions: {
        1: {
          levelId: 1,
          after: FIRST_SENTENCE_ID,
        },
      },
      content: 'This is sentence 03',
    },
    {
      id: SENTENCE04,
      positions: {
        1: {
          levelId: 1,
          after: SENTENCE00,
        },
      },
      content: 'This is sentence 04',
    },
    {
      id: SENTENCE05,
      positions: {
        1: {
          levelId: 1,
          after: SENTENCE01,
        },
      },
      content: 'This is sentence 05',
    },
    {
      id: SENTENCE06,
      positions: {
        1: {
          levelId: 1,
          after: SENTENCE02,
        },
      },
      content: 'This is sentence 06',
    },
    {
      id: SENTENCE07,
      positions: {
        1: {
          levelId: 1,
          after: SENTENCE06,
        },
      },
      content: 'This is sentence 07',
    },
  ];

const ZoomableArticleContainer: React.FC = () => {
    const zoomable = new Zoomable(sentences);
  return (
    <>
      <div style={{ width: "480px", margin: "48px", textIndent: '24px' }}>
        <ZoomableArticleView content={zoomable} />
      </div>
    </>
  );
};

export { ZoomableArticleContainer };
