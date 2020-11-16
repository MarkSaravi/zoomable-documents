/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// import { FIRST_SENTENCE_ID } from '../../constants';
import type { Sentence, IZoomable } from "./types";
import { getSentencesByZoomLevel, getOrderedSentenceKeys } from "./utils";

class ZoomableContent implements IZoomable {
  constructor(readonly sentences: Array<Sentence>) {}

  toString(zoomLevel: number): string {
    const levelSentences = getSentencesByZoomLevel(this.sentences, zoomLevel);
    const orderedKeys = getOrderedSentenceKeys(levelSentences);
    let content = "";
    orderedKeys.forEach((id) => {
      content += `${levelSentences[id].content}`;
    });
    return content;
  }
}

export default ZoomableContent;
