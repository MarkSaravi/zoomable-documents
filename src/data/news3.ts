/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
import { Sentences } from '../models/types';
import news2 from './news2';

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
            content: 'Third day news, first level',
        },
    ],
};

export default newsUpdates;
