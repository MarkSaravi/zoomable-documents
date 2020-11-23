/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
import { Sentences } from '../models/types';
import news1 from './news00';

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
            content: 'Second day news, first level',
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
