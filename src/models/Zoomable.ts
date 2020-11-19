/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// import { FIRST_SENTENCE_ID } from '../../constants';
import { Colors, END_OF_LINE } from './constants';
import type { Sentences, IZoomable, ZoomResult } from "./types";
import { getMaxLevel, getMinLevelForSentence, getSentencesByZoomLevel, getOrderedSentenceKeys } from "./utils";

class Zoomable implements IZoomable {
  maxLevel: number;

  level: number;

  constructor(readonly sentences: Sentences, readonly ascendingOrder: boolean) {
    this.maxLevel = getMaxLevel(sentences);
    this.level = ascendingOrder ? 0 : this.maxLevel;
  }

  getMaxLevel(): number {
    return this.maxLevel;
  }

  wrapInParagraph(s: string): string {
    return `<p style="text-align: left">${s}</p>`;
  }

  toString(): ZoomResult {
    const zoomLevel = this.level;
    const levelSentences = getSentencesByZoomLevel(this.sentences, zoomLevel);
    const orderedKeys = getOrderedSentenceKeys(levelSentences);
    let content = "";
    let paragraph = "";
    orderedKeys.forEach((id) => {
      const color = Colors[getMinLevelForSentence(levelSentences[id])];
      if (levelSentences[id].content as string) {
        if (levelSentences[id].content !== END_OF_LINE) {
          paragraph += `<span style="color: ${color.color}; background-color: ${color.bgColor};">${levelSentences[id].content}</span> `;
        } else {
          content += this.wrapInParagraph(paragraph);
          paragraph = "";
        }
      } else if (levelSentences[id].content as Sentences) {
        console.log('\x1b[34m%s\x1b[0m', `Sentence ${levelSentences[id].content}`);
      }
    });
    content += paragraph ? this.wrapInParagraph(paragraph) : "";
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

export default Zoomable;
