/* eslint-disable import/extensions */

import { Sentences } from '../models/types';
import {
    END_OF_LINE,
  FIRST_SENTENCE_ID,
} from '../models/constants';

const typeassertion: Sentences = {
    id: 'type-assertion-id',
    sentences: [
        {
            id: 'main-defenition',
            positions: {
                0: {
                    after: FIRST_SENTENCE_ID,
                },
            },
            content: 'A type assertion provides access to an interface value\'s underlying concrete value.'
        },
        {
            id: 'main-defenition-eol',
            positions: {
                0: { after: 'main-defenition' },
            },
            content: END_OF_LINE,
        },
        {
            id: 'first-example',
            positions: {
                0: { after: 'main-defenition-eol' },
            },
            content: '<pre>t := i.(T)</pre>',
        },
        {
            id: 'first-example-eol',
            positions: {
                0: { after: 'first-example' },
            },
            content: END_OF_LINE,
        },
        {
            id: 'assertion-succeeded',
            positions: {
                0: { after: 'first-example-eol' },
            },
            content: 'To test whether an interface value holds a specific type, a type assertion can return two values',
        },
        {
            id: 'assertion-succeeded-eol',
            positions: {
                0: { after: 'assertion-succeeded' },
            },
            content: END_OF_LINE,
        },
        {
            id: 'second-example',
            content: '<pre>t, ok := i.(T)</pre>',
            positions: {
                0: { after: 'assertion-succeeded-eol' },
            },
        }
    ],
};

export default typeassertion;
