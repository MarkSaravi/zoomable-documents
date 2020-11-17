/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// import { FIRST_SENTENCE_ID } from '../../constants';
import type { Sentence, IZoomable, ZoomResult } from "./types";
import { getMaxLevel, getSentencesByZoomLevel, getOrderedSentenceKeys } from "./utils";

class ZoomableContent implements IZoomable {
  maxLevel: number;

  level: number;

  constructor(readonly sentences: Array<Sentence>, readonly ascendingOrder: boolean) {
    this.maxLevel = getMaxLevel(sentences);
    this.level = ascendingOrder ? 0 : this.maxLevel;
  }

  getMaxLevel(): number {
    return this.maxLevel;
  }

  toString(): ZoomResult {
    const zoomLevel = this.level;
    const levelSentences = getSentencesByZoomLevel(this.sentences, zoomLevel);
    const orderedKeys = getOrderedSentenceKeys(levelSentences);
    let content = "";
    let paragraph = "";
    orderedKeys.forEach((id) => {
      paragraph += `${levelSentences[id].content} `;
      if (levelSentences[id].positions[zoomLevel].eol) {
        paragraph = `<p class="text-left">${paragraph}</p>`;
        content += paragraph;
        paragraph = "";
      }
    });
    return { content, level: zoomLevel };
  }

  zoomIn(): ZoomResult {
    if (this.level < this.maxLevel) {
      this.level++;
    }
    return this.toString();
  }

  zoomOut(): ZoomResult {
    if (this.level > 0) {
      this.level--;
    }
    return this.toString();
  }
}

export default ZoomableContent;
