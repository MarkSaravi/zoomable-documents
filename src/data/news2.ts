/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
// import { FIRST_SENTENCE_ID } from '../models/constants';
import { Sentences } from '../models/types';
// import news1 from './news1';

// const new1Updates: Sentences = {
//     id: uuidv4(),
//     sentences: [
//         {
//             id: 'C-01-00-00',
//             positions: {
//                 0: {
//                     after: FIRST_SENTENCE_ID,
//                 },
//             },
//             content: 'First day news, first level updated',
//         },
//         {
//             id: 'C-01-00-01',
//             positions: {
//                 1: {
//                     after: FIRST_SENTENCE_ID,
//                 },
//             },
//             content: 'First day news, first level updated with more details',
//         },
//         {
//             id: 'C-01-00-02',
//             positions: {
//                 2: {
//                     after: FIRST_SENTENCE_ID,
//                 },
//             },
//             content: 'First day news, first level updated with more, more details',
//         },
//     ],
// };

// news1[1].content = new1Updates;

export const newsUpdates: Sentences = {
    id: uuidv4(),
    sentences: [
        {
            id: 'H-02-00',
            positions: {
                0: {
                    after: 'E-01-00',
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
