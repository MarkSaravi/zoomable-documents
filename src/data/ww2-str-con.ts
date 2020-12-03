/* eslint-disable import/extensions */

import { Sentences } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';

const DIVIDER = '<div style="width: 100%; border-bottom: solid 2px black; margin: 16px"/>';

const strtimeline: Sentences = {
    id: 'strtm',
    sentences: [
        {
            id: 'strtmh-0-b',
            content: '<b>Dec 1941</b>&nbsp;&nbsp;',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'strtmh-0',
            content: 'Dec 1941&nbsp;&nbsp;',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'strtmh-1-b',
            content: '<b>May 1942</b>&nbsp;&nbsp;',
            positions: {
                1: { after: 'strtmh-0' },
            }
        },
        {
            id: 'strtmh-1',
            content: 'May 1942&nbsp;&nbsp;',
            positions: {
                0: { after: 'strtmh-0-b' },
            }
        },
        {
            id: 'strtmhend',
            content: '<br>',
            positions: {
                0: { after: 'strtmh-1' },
                1: { after: 'strtmh-1-b' },
            }
        },
        {
            id: 'strtm-1',
            content: 'On 7 December 1941, Japanese forces attacked the United States Pacific Fleet at Naval Station Pearl Harbor, incorporated territory of Hawaii.',
            positions: {
                0: { after: 'strtmhend' }
            }
        },
        {
            id: 'strtm-3',
            content: 'The Japanese made two attempts to continue their strategic initiative, and offensively extend their outer defensive perimeter in the south and central Pacific to where they could threaten Australia and Hawaii or the U.S. West Coast.',
            positions: {
                1: { after: 'strtmhend' }
            }
        },
    ]
};

const strategicconsiderations: Sentences = {
    id: 'str',
    sentences: [
        {
            id: 'str-0',
            content: DIVIDER,
            positions: {
                0: { after: FIRST_SENTENCE_ID }
            }
        },
        {
            id: 'str-1',
            content: '<h3>Strategic considerations</h3>',
            positions: {
                0: { after: 'str-0' }
            }
        },
        {
            id: 'str-2',
            content: strtimeline,
            positions: {
                0: { after: 'str-1' },
            },
        },
    ]
};

export default strategicconsiderations;
