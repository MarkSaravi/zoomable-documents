import {
    FIRST_SENTENCE_ID,
} from '../../models/constants';
import { Sentences } from '../../models/types';
import news1 from './news1';

export const newsUpdates: Sentences = [
    ...news1,
    {
        id: 'H-02-00',
        positions: {
            0: {
                after: 'C-01-00',
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
        content: 'Second day news, first level',
    },
];

export default newsUpdates;