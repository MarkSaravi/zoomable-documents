/* eslint-disable import/extensions */

import { max, min } from 'lodash';
import { FIRST_SENTENCE_ID } from './constants';
import { Sentence } from "./types";

function getMinLevelForSentence(sentence :Sentence): number {
  return min(Object.keys(sentence.positions).map(k => parseInt(k, 10))) || 0;
}

function getMaxLevelForSentence(sentence :Sentence): number {
  return max(Object.keys(sentence.positions).map(k => parseInt(k, 10))) || 0;
}

function getMaxLevel(sentences: Array<Sentence>): number {
  let max = 0;
  sentences.forEach(s => {
    const m = getMaxLevelForSentence(s);
    if (m > max) {
      max = m;
    }
  });
  return max;
}

function getSentencesByZoomLevel(sentences: Array<Sentence>, zoomLevel: number) {
        const levelSentences: { [After: string]: Sentence } = {};
        sentences.forEach((sentence) => {
          if (sentence.positions[zoomLevel]) {
            levelSentences[sentence.positions[zoomLevel].after] = sentence;
          }
        });
        return levelSentences;
}

function getOrderedSentenceKeys(
    levelSentences: { [After: string]: Sentence }
    ): Array<string> {
    const orderedIds = [];
    const afterIds = Object.keys(levelSentences);
    let afterId = FIRST_SENTENCE_ID;
    for (let i = 0; i < afterIds.length; i++) {
        orderedIds.push(afterId);
        afterId = levelSentences[afterId].id;
    }
    return orderedIds;
}

export {
  getMaxLevel,
  getMinLevelForSentence,
  getOrderedSentenceKeys,
  getSentencesByZoomLevel,
};
