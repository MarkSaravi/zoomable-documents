/* eslint-disable import/extensions */

import {
    FIRST_SENTENCE_ID,
} from '../models/constants';
import { Sentences } from '../models/types';

export const newsUpdates: Sentences = [
    {
        id: 'H-01-00',
        positions: {
            0: {
                after: FIRST_SENTENCE_ID,
            },
        },
        content: '<h4>First day news Headline</h4>',
    },
    {
        id: 'C-01-00',
        positions: {
            0: {
                after: 'H-01-00',
            },
        },
        content: 'First day news, first level',
    },
    {
        id: 'E-01-00',
        positions: {
            0: {
                after: 'C-01-00',
            },
        },
        content: '<div style="margin-top: 24px; margin-bottom: 24px;border-bottom: solid 1px black"/>',
    },
];

export default newsUpdates;
