/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// import { FIRST_SENTENCE_ID } from '../../constants';
import type { Sentence, ZoomableContent } from "../../zoomable-content/types";
import { getSentencesByZoomLevel, getOrderedSentenceKeys } from "../../zoomable-content/utils";

class Zoomable implements ZoomableContent {
  constructor(readonly sentences: Array<Sentence>) {}

  toString(zoomLevel: number): string {
    const levelSentences = getSentencesByZoomLevel(this.sentences, zoomLevel);
    const afterIds = Object.keys(levelSentences);
    const orderedKeys = getOrderedSentenceKeys(levelSentences);
    let content = "";
    orderedKeys.forEach((id, i) => {
      content += `${levelSentences[id].content}${i === afterIds.length - 1 ? "" : ". "}`;
    });
    return content;
  }
}

export { Zoomable };
