/* eslint-disable import/extensions */

import { Sentences, Sentence } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';

const WHITE_BRICK = `<img src="/white-block-half.png"  style="width: 30px; height: 20px" alt="" crossorigin />`;
const GREEN_BRICK = `<img src="/green-block-half.png"  style="width: 30px; height: 20px" alt="" crossorigin />`;
const GRAY_BRICK = `<img src="/gray-block-half.png"  style="width: 30px; height: 20px" alt="" crossorigin />`;

const addLevel1 = (sentences: Sentences): Sentences => {
    return sentences;
};

const addLevel2 = (sentences: Sentences): Sentences => {
    return sentences;
};

const addLevel3 = (sentences: Sentences): Sentences => {
    return sentences;
};

const createLevel0 = (numRow: number, numCol: number): Sentences => {
    const sentences: Sentence[] = [];
    let after = FIRST_SENTENCE_ID;
    for (let row = 0; row < numRow; row++) {
        let id = "";
        for (let col = 0; col < numCol; col++) {
            id = `white-${row}-${col}`;
            sentences.push({
                id,
                content: WHITE_BRICK,
                positions: {
                    0: {
                        after,
                    },
                },
            });
            after = id;
        }
        id = `white-${row}-${numCol}`;
        sentences.push({
            id,
            content: "<br>",
            positions: {
                0: {
                    after,
                },
            },
        });
        after = id;
    }
    return {
        id: 'logo',
        sentences
    };
};

const logo: Sentences = addLevel3(addLevel2(addLevel1(createLevel0(24, 24))));

export default logo;
