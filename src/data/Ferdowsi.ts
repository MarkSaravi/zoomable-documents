/* eslint-disable import/extensions */

import { v4 as uuidv4 } from 'uuid';
import { Sentences } from '../models/types';
import {
  END_OF_LINE, FIRST_SENTENCE_ID,
  ID00,
  ID01,
  ID02,
  ID03,
  ID05,
  ID06,
  ID07,
  ID10,
  ID11,
} from '../models/constants';

const shahnameh: Sentences = {
  id: uuidv4(),
  sentences: [
    {
      id: ID10,
      positions: {
        0: {
          after: FIRST_SENTENCE_ID,
        },
      },
      content: `Shahnameh ("Book of Kings") is one of the world's longest epic poems created by a single poet, and the national epic of Greater Iran.`,
    },
    {
      id: ID11,
      positions: {
        1: {
          after: FIRST_SENTENCE_ID,
        },
      },
      content: `The Shahnameh is a long epic poem written by the Persian poet Ferdowsi between c. 977 and 1010 CE and is the national epic of Greater Iran. Consisting of some 50,000 "distichs" or couplets (two-line verses), the Shahnameh is one of the world's longest epic poems. It tells mainly the mythical and to some extent the historical past of the Persian Empire from the creation of the world until the Muslim conquest in the seventh century. Iran, Azerbaijan, Afghanistan and the greater region influenced by Persian culture such as Georgia, Armenia, Turkey and Dagestan celebrate this national epic.`,
    },
  ]
};

const sentences: Sentences = {
  id: uuidv4(),
  sentences: [
    {
      id: ID00,
      positions: {
        0: {
          after: FIRST_SENTENCE_ID,
        },
        1: {
          after: ID02,
        },
        2: {
          after: ID02,
        },
      },
      content: '<b>Ferdowsi</b> was a Persian poet and the author of <b>Shahnameh</b>.',
    },
    {
      id: ID07,
      positions: {
        0: {
          after: ID00,
        },
      },
      content: END_OF_LINE,
    },
    {
      id: ID01,
      positions: {
        0: {
          after: ID07,
        },
        1: {
          after: ID06,
        },
        2: {
          after: ID06,
        },
      },
      content: 'Ferdowsi is celebrated as the most influential figure in Persian literature and one of the greatest in the history of literature.',
    },
    {
      id: ID02,
      positions: {
        1: {
          after: FIRST_SENTENCE_ID,
        },
        2: {
          after: FIRST_SENTENCE_ID,
        },
      },
      content: 'Abul-Qâsem Ferdowsi Tusi (935 or 940–between 1019 and 1026), or just',
    },
    {
      id: ID03,
      positions: {
        1: {
          after: ID05,
        },
        2: {
          after: ID05,
        },
      },
      content: shahnameh,
    },
    {
      id: ID05,
      positions: {
        1: {
          after: ID00,
        },
        2: {
          after: ID00,
        },
      },
      content: END_OF_LINE,
    },
    {
      id: ID06,
      positions: {
        1: {
          after: ID03,
        },
        2: {
          after: ID03,
        },
      },
      content: END_OF_LINE,
    },
  ],
};

export default sentences;
