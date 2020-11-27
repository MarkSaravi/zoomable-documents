/* eslint-disable import/extensions */

import { Sentences } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';

const typeassertion: Sentences = {
    id: 'type-assertion-id',
    sentences: [
        {
            id: 'level00-sen-00',
            positions: {
                0: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'first sentence'
        },
    ],
};

export default typeassertion;
