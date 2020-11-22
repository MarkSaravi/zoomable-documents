import {
    FIRST_SENTENCE_ID,
} from '../../models/constants';
import { Sentences } from '../../models/types';

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
];

export default newsUpdates;