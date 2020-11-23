/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
import {
    FIRST_SENTENCE_ID,
} from '../models/constants';
import { Sentences } from '../models/types';

const contentUpdates: Sentences = {
    id: uuidv4(),
    sentences: [
        {
            id: 'CU-00-00',
            positions: {
                0: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'First day new update 1'
        },
        {
            id: 'CU-00-01',
            positions: {
                1: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'First day new update 2'
        },
        {
            id: 'CU-00-02',
            positions: {
                2: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'First day new update 3'
        },
    ]
};

export const newsUpdates: Sentences = {
    id: uuidv4(),
    sentences: [
        {
            id: 'H-00-00',
            positions: {
                0: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: '<h4>First day news Headline</h4>',
        },
        {
            id: 'C-00-00',
            positions: {
                0: {
                    after: 'H-00-00',
                },
            },
            content: contentUpdates,
        },
        {
            id: 'E-00-00',
            positions: {
                0: {
                    after: 'C-00-00',
                },
            },
            content: '<div style="margin-top: 24px; margin-bottom: 24px;border-bottom: solid 1px black"/>',
        },
    ],
};

export default newsUpdates;
