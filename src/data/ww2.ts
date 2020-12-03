/* eslint-disable import/extensions */

import { Sentences } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';
import battles from './ww2-battles';

const DIVIDER = '<div style="width: 100%; border-bottom: solid 2px black; margin: 16px"/>';

const strtimeline: Sentences = {
    id: 'strtm',
    sentences: [
        {
            id: 'strtm-0',
            content: '<h4>Dec 1941<h4>',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'strtm-1',
            content: 'On 7 December 1941, Japanese forces attacked the United States Pacific Fleet at Naval Station Pearl Harbor, incorporated territory of Hawaii.',
            positions: {
                0: { after: 'strtm-0' }
            }
        },
        {
            id: 'strtm-2',
            content: '<h4>May 1942<h4>',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'strtm-3',
            content: 'The Japanese made two attempts to continue their strategic initiative, and offensively extend their outer defensive perimeter in the south and central Pacific to where they could threaten Australia and Hawaii or the U.S. West Coast.',
            positions: {
                1: { after: 'strtm-2' }
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

const taskforcetimeline: Sentences = {
    id: 'tftl',
    sentences: [
        {
            id: 'tftl-0',
            content: '<h4>May 1942<h4>',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'tftl-1',
            content: 'In preparation for the offensive in the Pacific in May 1942, U.S. Marine Major General Alexander Vandegrift was ordered to move his 1st Marine Division from the United States to New Zealand.',
            positions: {
                0: { after: 'tftl-0' }
            }
        },
        {
            id: 'tftl-2',
            content: '<h4>Jul 1942<h4>',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'tftl-3',
            content: 'The Watchtower force, numbering 75 warships and transports (of vessels from the U.S. and Australia), assembled near Fiji on 26 July and engaged in one rehearsal landing prior to leaving for Guadalcanal on 31 July.',
            positions: {
                1: { after: 'tftl-2' }
            }
        },
    ]
};

const taskforce: Sentences = {
    id: 'tf',
    sentences: [
        {
            id: 'tf-0',
            content: DIVIDER,
            positions: {
                0: { after: FIRST_SENTENCE_ID }
            }
        },
        {
            id: 'tf-1',
            content: '<h3>Task force</h3>',
            positions: {
                0: { after: 'tf-0' }
            }
        },
        {
            id: 'tf-2',
            content: taskforcetimeline,
            positions: {
                0: { after: 'tf-1' },
            },
        },
    ]
};

const timeline: Sentences = {
    id: 'guadalcanal',
    sentences: [
        {
            id: 'gua-title',
            content: '<h2>Guadalcanal campaign</h2>',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            },
        },
        {
            id: 'str-con',
            content: strategicconsiderations,
            positions: {
                0: { after: 'gua-title' },
            },
        },
        {
            id: 'str-tf',
            content: taskforce,
            positions: {
                0: { after: 'str-con' },
            },
        },
        {
            id: 'str-bat',
            content: battles,
            positions: {
                0: { after: 'str-tf' },
            },
        },
    ],
};

export default timeline;
