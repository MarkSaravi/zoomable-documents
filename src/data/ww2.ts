/* eslint-disable import/extensions */

import { Sentences } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';
import strategicconsiderations from './ww2-str-con';
import battles from './ww2-battles';

const DIVIDER = '<div style="width: 100%; border-bottom: solid 2px black; margin: 16px"/>';

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
