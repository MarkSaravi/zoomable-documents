/* eslint-disable import/extensions */
/* eslint-disable max-len */

import { Sentences } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';

// depth-sen

const Ferdowsi: Sentences = {
  id: 'ferdowsi',
  sentences: [
    {
      id: '2-0',
      content: 'Abul-Qâsem Ferdowsi Tusi (ابوالقاسم فردوسی توسی) (935 or 940–between 1019 and 1026), or just Ferdowsi is celebrated as the most influential figure in Persian literature and one of the greatest in the history of literature.',
      positions: {
        0: { after: FIRST_SENTENCE_ID },
      }
    },
  ],
};

const shahnameh: Sentences = {
  id: 'shahnameh',
  sentences: [
    {
      id: '1-1',
      content: `Shahnameh ("Book of Kings") is one of the world's longest epic poems created by a single poet, and the national epic of Greater Iran.`,
      positions: {
        0: { after: FIRST_SENTENCE_ID },
        1: { after: '1-5' },
      }
    },
    {
      id: '1-2',
      content: "<br>",
      positions: {
        0: { after: '1-1' },
        1: { after: '1-4' },
      }
    },
    {
      id: '1-3',
      content: '<img src="/shahnameh3.jpg" style="width: 200px; height: 200px;"  alt=""  />',
      positions: {
        0: { after: '1-2' },
        1: { after: '1-2' },
      }
    },
    {
      id: '1-4',
      content: `The Shahnameh is a long epic poem written by the Persian poet Ferdowsi between c. 977 and 1010 CE and is the national epic of Greater Iran. Consisting of some 50,000 "distichs" or couplets (two-line verses), the Shahnameh is one of the world's longest epic poems. It tells mainly the mythical and to some extent the historical past of the Persian Empire from the creation of the world until the Muslim conquest in the seventh century. Iran, Azerbaijan, Afghanistan and the greater region influenced by Persian culture such as Georgia, Armenia, Turkey and Dagestan celebrate this national epic.`,
      positions: {
        1: { after: FIRST_SENTENCE_ID }
      }
    },
    {
      id: '1-5',
      content: "<br>",
      positions: {
        1: { after: '1-3' },
      }
    },
  ]
};

const sentences: Sentences = {
  id: 'iran',
  sentences: [
    {
      id: '0-0',
      content: '<img src="/ferdowsi.jpg" style="width: 110px; height: 126px;"  alt=""  />',
      positions: {
        0: { after: FIRST_SENTENCE_ID },
        1: { after: '0-1' },
      }
    },
    {
      id: '0-1',
      content: '<br>',
      positions: {
        0: { after: '0-0' }
      },
    },
    {
      id: '0-2',
      content: '<b>Ferdowsi</b> was a Persian poet and the author of <b>Shahnameh</b>.',
      positions: {
        0: { after: '0-1' }
      },
    },
    {
      id: '0-1',
      content: Ferdowsi,
      positions: {
        1: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '0-2',
      content: shahnameh,
      positions: {
        1: { after: '0-0' },
      }
    }
  ],
};

export default sentences;
