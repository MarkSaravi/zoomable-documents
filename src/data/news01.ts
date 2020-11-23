/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
import { FIRST_SENTENCE_ID } from '../models/constants';
import { Sentences } from '../models/types';
import news1 from './news00';

const contentUpdates: Sentences = {
    id: uuidv4(),
    sentences: [
        {
            id: 'CU-01-00',
            positions: {
                0: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'Second day new update 1'
        },
        {
            id: 'CU-01-01',
            positions: {
                1: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'Second day new update 2'
        },
        {
            id: 'CU-01-02',
            positions: {
                2: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'Second day new update 3'
        },
    ]
};

export const newsUpdates: Sentences = {
    id: uuidv4(),
    sentences: [
        ...news1.sentences,
        {
            id: 'H-02-00',
            positions: {
                0: {
                    after: 'E-00-00',
                },
            },
            content: '<h4>Second day news Headline</h4>',
        },
        {
            id: 'C-02-00',
            positions: {
                0: {
                    after: 'H-02-00',
                },
            },
            content: contentUpdates,
        },
        {
            id: 'E-02-00',
            positions: {
                0: {
                    after: 'C-02-00',
                },
            },
            content: '<div style="margin-top: 24px; margin-bottom: 24px;border-bottom: solid 1px black"/>',
        },
    ],
};

export default newsUpdates;
