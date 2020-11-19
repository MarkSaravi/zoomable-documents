import {
    END_OF_LINE, FIRST_SENTENCE_ID,
    ID00,
    ID01,
    ID02,
    ID03,
    ID04,
    ID05,
    ID06,
    ID07,
    ID08,
    ID09,
    ID10,
    ID11,
    ID12,
    ID13,
    ID14,
    ID15,
    ID16,
} from '../../models/constants';
import { Sentences } from '../../models/types';

const firstDay: Sentences = [
    {
        id: ID10,
        positions: {
            0: {
                after: FIRST_SENTENCE_ID
            },
        },
        content: 'First day, first updates',
    },
    {
        id: ID11,
        positions: {
            1: {
                after: FIRST_SENTENCE_ID
            },
        },
        content: 'First day, second updates',
    }
];

export const newsUpdates: Sentences = [
    {
        id: ID00,
        positions: {
            0: {
                after: FIRST_SENTENCE_ID,
            },
        },
        content: firstDay,
    },
    {
        id: ID01,
        positions: {
            1: {
                after: FIRST_SENTENCE_ID,
            },
        },
        content: 'Second day news',
    },
    {
        id: ID02,
        positions: {
            2: {
                after: FIRST_SENTENCE_ID,
            },
        },
        content: 'Third day news',
    },
];