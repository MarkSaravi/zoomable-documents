import {
    FIRST_SENTENCE_ID,
} from '../../models/constants';
import { Sentences } from '../../models/types';
import news2 from './news2';

export const newsUpdates: Sentences = [
    ...news2,
    {
        id: 'H-03-00',
        positions: {
            0: {
                after: 'C-02-00',
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
        content: 'Third day news, first level',
    },
];

export default newsUpdates;