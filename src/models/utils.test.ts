/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import { v4 as uuidv4 } from 'uuid';
import { FIRST_SENTENCE_ID } from "./constants";
import { Sentences } from "./types";
import { getSentencesByZoomLevel, getOrderedSentenceKeys, isSentenceType } from "./utils";

const SENTENCE00 = "sentence00";
const SENTENCE01 = "sentence01";
const SENTENCE02 = "sentence02";
const SENTENCE03 = "sentence03";
const SENTENCE04 = "sentence04";
const SENTENCE05 = "sentence05";
const SENTENCE06 = "sentence06";
const SENTENCE07 = "sentence07";

const sentences: Sentences = {
  id: uuidv4(),
  sentences: [
    {
      id: SENTENCE00,
      positions: {
        0: {
          after: FIRST_SENTENCE_ID,
        },
        1: {
          after: SENTENCE03,
        },
      },
      content: "This is sentence 00",
    },
    {
      id: SENTENCE01,
      positions: {
        0: {
          after: SENTENCE00,
        },
        1: {
          after: SENTENCE04,
        },
      },
      content: "This is sentence 01",
    },
    {
      id: SENTENCE02,
      positions: {
        0: {
          after: SENTENCE01,
        },
        1: {
          after: SENTENCE05,
        },
      },
      content: "This is sentence 02",
    },
    {
      id: SENTENCE03,
      positions: {
        1: {
          after: FIRST_SENTENCE_ID,
        },
      },
      content: "This is sentence 03",
    },
    {
      id: SENTENCE04,
      positions: {
        1: {
          after: SENTENCE00,
        },
      },
      content: "This is sentence 04",
    },
    {
      id: SENTENCE05,
      positions: {
        1: {
          after: SENTENCE01,
        },
      },
      content: "This is sentence 05",
    },
    {
      id: SENTENCE06,
      positions: {
        1: {
          after: SENTENCE02,
        },
      },
      content: "This is sentence 06",
    },
    {
      id: SENTENCE07,
      positions: {
        1: {
          after: SENTENCE06,
        },
      },
      content: "This is sentence 07",
    },
  ],
};
describe("getSentencesByZoomLevel", () => {
    test("zoom level 0", () => {
        const sentencesByZoomLevel = getSentencesByZoomLevel(sentences, 0);
        const keys = Object.keys(sentencesByZoomLevel);
        expect(keys).toStrictEqual([FIRST_SENTENCE_ID, "sentence00", "sentence01"]);
    });
    test("zoom leve 1", () => {
        const sentencesByZoomLevel = getSentencesByZoomLevel(sentences, 1);
        const keys = Object.keys(sentencesByZoomLevel);
        expect(keys).toStrictEqual([
          "sentence03",
          "sentence04",
          "sentence05",
          FIRST_SENTENCE_ID,
          "sentence00",
          "sentence01",
          "sentence02",
          "sentence06",
        ]);
    });
});

describe('getOrderedSentenceKeys', () => {
    test('zoom level 0', () => {
        const sentencesByZoomLevel = getSentencesByZoomLevel(sentences, 0);
        const orderedKeys = getOrderedSentenceKeys(sentencesByZoomLevel);
        expect(orderedKeys).toStrictEqual([FIRST_SENTENCE_ID, "sentence00", "sentence01"]);
    });
    test("zoom level 1", () => {
      const sentencesByZoomLevel = getSentencesByZoomLevel(sentences, 1);
      const orderedKeys = getOrderedSentenceKeys(sentencesByZoomLevel);
      expect(orderedKeys).toStrictEqual([
        FIRST_SENTENCE_ID,
        "sentence03",
        "sentence00",
        "sentence04",
        "sentence01",
        "sentence05",
        "sentence02",
        "sentence06",
      ]);
    });
});

describe('isSentenceType', () => {
  test('is Sentences type', () => {
    expect(isSentenceType(sentences)).toBe(true);
    expect(isSentenceType("this is a content")).toBe(false);
  });
});
