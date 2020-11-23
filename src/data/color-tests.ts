/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
import { FIRST_SENTENCE_ID } from '../models/constants';
import { Sentences } from '../models/types';

const data: Sentences = {
    id: uuidv4(),
    sentences: [
        {
            id: 'id01',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
                1: { after: FIRST_SENTENCE_ID },
                2: { after: FIRST_SENTENCE_ID },
                3: { after: FIRST_SENTENCE_ID },
                4: { after: FIRST_SENTENCE_ID },
            },
            content: 'LEVEL 1: THIS IS A TEST FOR LEVEL COLOR<br>'
        },
        {
            id: 'id02',
            positions: {
                1: { after: 'id01' },
                2: { after: 'id01' },
                3: { after: 'id01' },
                4: { after: 'id01' },
            },
            content: 'LEVEL 2: THIS IS A TEST FOR LEVEL COLOR<br>'
        },
        {
            id: 'id03',
            positions: {
                2: { after: 'id02' },
                3: { after: 'id02' },
                4: { after: 'id02' },
            },
            content: 'LEVEL 3: THIS IS A TEST FOR LEVEL COLOR<br>'
        },
        {
            id: 'id04',
            positions: {
                3: { after: 'id03' },
                4: { after: 'id03' },
            },
            content: 'LEVEL 4: THIS IS A TEST FOR LEVEL COLOR<br>'
        },
        {
            id: 'id05',
            positions: {
                4: { after: 'id04' },
            },
            content: 'LEVEL 5: THIS IS A TEST FOR LEVEL COLOR<br>'
        },
    ],
};

export default data;
