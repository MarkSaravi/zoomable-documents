/* eslint-disable import/extensions */

import { Sentence } from "./types";

function getSentencesByZoomLevel(sentences: Array<Sentence>, zoomLevel: number) {
        const levelSentences: { [After: string]: Sentence } = {};
        sentences.forEach((sentence) => {
          if (sentence.positions[zoomLevel]) {
            levelSentences[sentence.positions[zoomLevel].after] = sentence;
          }
        });
        return levelSentences;
}

export { getSentencesByZoomLevel };
