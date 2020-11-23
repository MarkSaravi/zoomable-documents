/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
import { FIRST_SENTENCE_ID } from '../models/constants';
import { Sentences } from '../models/types';
import news2 from './news01';

const contentUpdates: Sentences = {
    id: uuidv4(),
    sentences: [
        {
            id: 'CU-02-00',
            positions: {
                0: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'Third day new update 1'
        },
        {
            id: 'CU-02-01',
            positions: {
                1: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'Third day new update 2'
        },
        {
            id: 'CU-02-02',
            positions: {
                2: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'Third day new update 3'
        },
    ]
};

export const newsUpdates: Sentences = {
    id: uuidv4(),
    sentences: [
        ...news2.sentences,
        {
            id: 'H-03-00',
            positions: {
                0: {
                    after: 'E-02-00',
                },
            },
            content: '<h4>Third day news Headline</h4>',
        },
        {
            id: 'C-03-00',
            positions: {
                0: {
                    after: 'H-03-00',
                },
            },
            content: contentUpdates,
        },
    ],
};

export default newsUpdates;
