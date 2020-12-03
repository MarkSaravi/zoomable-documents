/* eslint-disable import/extensions */
/* eslint-disable max-len */

import { Sentences } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';

// depth-sen

const shahnamehpicturescarosel: Sentences = {
  id: 'shahnamehpicturescarosel',
  sentences: [
    {
      id: '4-0',
      content: '<img src="/shahnameh00.jpg" style="height: 150px;"  alt="" />',
      positions: {
        0: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '4-1',
      content: '<img src="/shahnameh01.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        0: { after: '4-0' },
        1: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '4-2',
      content: '<img src="/shahnameh02.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        0: { after: '4-1' },
        1: { after: '4-1' },
        2: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '4-3',
      content: '<img src="/shahnameh03.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        0: { after: '4-2' },
        1: { after: '4-2' },
        2: { after: '4-2' },
        3: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '4-4',
      content: '<img src="/shahnameh04.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        0: { after: '4-3' },
        1: { after: '4-3' },
        2: { after: '4-3' },
        3: { after: '4-3' },
        4: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '4-5',
      content: '<img src="/shahnameh05.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        1: { after: '4-4' },
        2: { after: '4-4' },
        3: { after: '4-4' },
        4: { after: '4-4' },
        5: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '4-6',
      content: '<img src="/shahnameh06.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        2: { after: '4-5' },
        3: { after: '4-5' },
        4: { after: '4-5' },
        5: { after: '4-5' },
        6: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '4-7',
      content: '<img src="/shahnameh07.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        3: { after: '4-6' },
        4: { after: '4-6' },
        5: { after: '4-6' },
        6: { after: '4-6' },
      }
    },
    {
      id: '4-8',
      content: '<img src="/shahnameh08.jpg" style="height: 150px;"  alt=""  />',
      positions: {
        4: { after: '4-7' },
        5: { after: '4-7' },
      }
    },
    {
      id: '4-9',
      content: '<img src="/shahnameh09.png" style="height: 150px;"  alt=""  />',
      positions: {
        5: { after: '4-8' },
        6: { after: '4-7' },
      }
    },
    {
      id: '4-10',
      content: '<img src="/shahnameh10.png" style="height: 150px;"  alt=""  />',
      positions: {
        6: { after: '4-9' },
      }
    },
  ]
};

const shahnamehpictures: Sentences = {
  id: 'shahnamehpictures',
  sentences: [
    {
      id: '3-0',
      content: '<img src="/shahnameh00.jpg" style="width: 200px; height: 200px;"  alt=""  />',
      positions: {
        0: { after: FIRST_SENTENCE_ID },
      }
    },
  ]
};

const Ferdowsi: Sentences = {
  id: 'ferdowsi',
  sentences: [
    {
      id: '2-2',
      content: '<h4>Ferdowsi</h2>',
      positions: {
        0: { after: FIRST_SENTENCE_ID },
        1: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '2-0',
      content: 'Abul-Qâsem Ferdowsi Tusi (ابوالقاسم فردوسی توسی) (935 or 940–between 1019 and 1026), or just Ferdowsi is celebrated as the most influential figure in Persian literature and one of the greatest in the history of literature.',
      positions: {
        0: { after: '2-2' },
        1: { after: '2-2' },
      }
    },
    {
      id: '2-1',
      content: 'Ferdowsi has a unique place in Persian history because of the strides he made in reviving and regenerating the Persian language and cultural traditions. His works are cited as a crucial component in the persistence of the Persian language, as those works allowed much of the tongue to remain codified and intact.',
      positions: {
        1: { after: '2-0' },
      }
    }
  ],
};

const shahnameh: Sentences = {
  id: 'shahnameh',
  sentences: [
    {
      id: '1-6',
      content: '<h4>Shahnameh</h2>',
      positions: {
        0: { after: FIRST_SENTENCE_ID },
        1: { after: FIRST_SENTENCE_ID },
      }
    },
    {
      id: '1-1',
      content: `Shahnameh ("Book of Kings") is one of the world's longest epic poems created by a single poet, and the national epic of Greater Iran.`,
      positions: {
        0: { after: '1-6' },
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
      id: '1-4',
      content: shahnamehpictures,
      positions: {
        0: { after: '1-2' },
      }
    },
    {
      id: '1-3',
      content: shahnamehpicturescarosel,
      positions: {
        1: { after: '1-2' },
      }
    },
    {
      id: '1-4',
      content: `The <b>Shahnameh</b> is a long epic poem written between c. 977 and 1010 CE and is the national epic of Greater Iran. Consisting of some 50,000 "distichs" or couplets (two-line verses), the Shahnameh is one of the world's longest epic poems. It tells mainly the mythical and to some extent the historical past of the Persian Empire from the creation of the world until the Muslim conquest in the seventh century. Iran, Azerbaijan, Afghanistan and the greater region influenced by Persian culture such as Georgia, Armenia, Turkey and Dagestan celebrate this national epic.`,
      positions: {
        1: { after: '1-6' }
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
