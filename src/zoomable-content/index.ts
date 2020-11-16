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
    let paragraph = "";
    orderedKeys.forEach((id) => {
      paragraph += `${levelSentences[id].content} `;
      if (levelSentences[id].positions[zoomLevel].eol) {
        paragraph = `<p>${paragraph}</p>`;
        content += paragraph;
        paragraph = "";
      }
    });
    return content;
  }
}

export default ZoomableContent;
