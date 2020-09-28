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
      positions: [
        {
          levelId: LEVEL0,
          isVisible: true,
          after: FIRST_SENTENCE_ID,
          isEndOfLine: false,
        },
        {
          levelId: LEVEL1,
          isVisible: true,
          after: SENTENCE03,
          isEndOfLine: false,
        },
      ],
      content: 'This is sentence 00',
    },
    {
      id: SENTENCE01,
      positions: [
        {
          levelId: LEVEL0,
          isVisible: true,
          after: SENTENCE00,
          isEndOfLine: false,
        },
        {
          levelId: LEVEL1,
          isVisible: true,
          after: SENTENCE04,
          isEndOfLine: false,
        },
      ],
      content: 'This is sentence 01',
    },
    {
      id: SENTENCE02,
      positions: [
        {
          levelId: LEVEL0,
          isVisible: true,
          after: SENTENCE01,
          isEndOfLine: true,
        },
        {
          levelId: LEVEL1,
          isVisible: true,
          after: SENTENCE05,
          isEndOfLine: false,
        },
      ],
      content: 'This is sentence 02',
    },
    {
      id: SENTENCE03,
      positions: [
        {
          levelId: LEVEL1,
          isVisible: true,
          after: FIRST_SENTENCE_ID,
          isEndOfLine: false,
        },
      ],
      content: 'This is sentence 03',
    },
    {
      id: SENTENCE04,
      positions: [
        {
          levelId: LEVEL1,
          isVisible: true,
          after: SENTENCE00,
          isEndOfLine: false,
        },
      ],
      content: 'This is sentence 04',
    },
    {
      id: SENTENCE05,
      positions: [
        {
          levelId: LEVEL1,
          isVisible: true,
          after: SENTENCE01,
          isEndOfLine: false,
        },
      ],
      content: 'This is sentence 05',
    },
    {
      id: SENTENCE06,
      positions: [
        {
          levelId: LEVEL1,
          isVisible: true,
          after: SENTENCE02,
          isEndOfLine: false,
        },
      ],
      content: 'This is sentence 06',
    },
    {
      id: SENTENCE07,
      positions: [
        {
          levelId: LEVEL1,
          isVisible: true,
          after: SENTENCE06,
          isEndOfLine: true,
        },
      ],
      content: 'This is sentence 07',
    },
  ],
};

const ZoomableArticleContainer: React.FC = () => {
    const zoomable = new Zoomable(zoomableSentences);
  return (
    <>
      <ZoomableArticleView content={zoomable} />
    </>
  );
};

export { ZoomableArticleContainer };
