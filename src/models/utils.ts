/* eslint-disable import/extensions */

import { max, min } from 'lodash';
import { FIRST_SENTENCE_ID } from './constants';
import { LevelSentences, Sentence, Sentences } from "./types";

function getMinLevelForSentence(sentence :Sentence): number {
  return min(Object.keys(sentence.positions).map(k => parseInt(k, 10))) || 0;
}

function getMaxLevelForSentence(sentence :Sentence): number {
  return max(Object.keys(sentence.positions).map(k => parseInt(k, 10))) || 0;
}

function getMaxLevel(sentences: Sentences): number {
  let max = 0;
  sentences.sentences.forEach(s => {
    const m = getMaxLevelForSentence(s);
    if (m > max) {
      max = m;
    }
  });
  return max;
}

function getSentencesByZoomLevel(sentences: Sentences, zoomLevel: number) {
        const levelSentences: LevelSentences = {};
        sentences.sentences.forEach((sentence) => {
          if (sentence.positions[zoomLevel]) {
            levelSentences[sentence.positions[zoomLevel].after] = sentence;
          }
        });
        return levelSentences;
}

function getOrderedSentenceKeys(levelSentences: LevelSentences): Array<string> {
    const orderedIds = [];
    const afterIds = Object.keys(levelSentences);
    let afterId = FIRST_SENTENCE_ID;
    for (let i = 0; i < afterIds.length; i++) {
        orderedIds.push(afterId);
        afterId = levelSentences[afterId].id;
    }
    return orderedIds;
}

function isSentenceType(content: string | Sentences): content is Sentences {
  return (content as Sentences).id !== undefined;
}

function getSentenceType(content: string | Sentences): 'sentences' | 'string' {
  if (isSentenceType(content)) {
    return 'sentences';
  }
  return 'string';
}

export {
  getMaxLevel,
  getMinLevelForSentence,
  getOrderedSentenceKeys,
  getSentencesByZoomLevel,
  getSentenceType,
  isSentenceType,
};
