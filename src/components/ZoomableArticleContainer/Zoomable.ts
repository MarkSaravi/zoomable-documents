/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { FIRST_SENTENCE_ID } from '../../constants';
import type { Sentence, ZoomableSentences, ZoomableContent } from "../../types";

class Zoomable implements ZoomableContent {
  constructor(readonly zoomableSentences: ZoomableSentences) {}

  toString(zoomLevel: number): string {
    const { levels, sentences } = this.zoomableSentences;
    const levelId = levels[zoomLevel];
    const levelSentences: Array<Sentence> = [];
    sentences.forEach(sentence => {
        sentence.positions.forEach(position => {
            if (position.levelId === levelId) {
                levelSentences.push(sentence);
            }
        });
    });

    const contentSentences: Array<Sentence> = [];
    let afterId = FIRST_SENTENCE_ID;
    const numLoops = levelSentences.length;
    for (let i = 0; i < numLoops; i++) {
        for (let j = 0; j < levelSentences.length; j++) {
            const { positions } = levelSentences[j];
            let found = false;
            // eslint-disable-next-line no-loop-func
            positions.forEach(position => {
                if (position.levelId === levelId && position.after === afterId) {
                    found = true;
                    const { id } = levelSentences[j];
                    afterId = id;
                }
            });
            if (found) {
                contentSentences.push(levelSentences[j]);
                break;
            }
        }
    }

    let str = '';
    contentSentences.forEach(sentence => {
        str += `${sentence.content}, `;
    });

    return str;
  }
}

export { Zoomable };
