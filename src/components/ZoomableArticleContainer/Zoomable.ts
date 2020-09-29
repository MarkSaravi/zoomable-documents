/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// import { FIRST_SENTENCE_ID } from '../../constants';
import type { Sentence, ZoomableContent } from "../../types";

class Zoomable implements ZoomableContent {
  constructor(readonly sentences: Array<Sentence>) {}

  toString(levelId: number): string {
    const levelSentences: { [After: string]: Sentence } = {};
    this.sentences.forEach((sentence) => {
      if (sentence.positions[levelId]) {
        levelSentences[sentence.positions[levelId].after] = sentence;
      }
    });
    const afterIds = Object.keys(levelSentences);
    let content = "";
    let afterId = "";
    for (let i = 0; i < afterIds.length; i++) {
      content += `${levelSentences[afterId].content}${i === afterIds.length - 1 ? "" : ". "}`;
      afterId = levelSentences[afterId].id;
    }
    return content;
  }
}

export { Zoomable };
