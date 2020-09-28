/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// import { FIRST_SENTENCE_ID } from '../../constants';
import type { Sentence, ZoomableSentences, ZoomableContent } from "../../types";

class Zoomable implements ZoomableContent {
  constructor(readonly zoomableSentences: ZoomableSentences) {}

  toString(zoomLevel: number): string {
    const { levels, sentences } = this.zoomableSentences;
    const levelId = levels[zoomLevel];
    const levelSentences: {[After: string]: Sentence} = {};
    sentences.forEach(sentence => {
        if (sentence.positions[levelId]) {
          levelSentences[sentence.positions[levelId].after] = sentence;
        }
    });
    const afterIds = Object.keys(levelSentences);
    let content = '';
    let afterId = '';
    for (let i = 0; i < afterIds.length; i++) {
        content += `${levelSentences[afterId].content}${i === afterIds.length - 1 ? '' : '. '}`;
        afterId = levelSentences[afterId].id;
    }
    return content;
  }
}

export { Zoomable };
