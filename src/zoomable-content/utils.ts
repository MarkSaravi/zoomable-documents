/* eslint-disable import/extensions */

import { Sentence } from "./types";

function getMaxLevel(sentences: Array<Sentence>): number {
  let max = 0;
  sentences.forEach(s => {
    const keys = Object.keys(s.positions);
    keys.forEach(k => {
      const v = parseInt(k, 10);
      if (v > max) {
        max = v;
      }
    });
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
    let afterId = "";
    for (let i = 0; i < afterIds.length; i++) {
        orderedIds.push(afterId);
        afterId = levelSentences[afterId].id;
    }
    return orderedIds;
}

export { getMaxLevel, getSentencesByZoomLevel, getOrderedSentenceKeys };
