import { Sentence } from '../../models/types';
import { END_OF_LINE, FIRST_SENTENCE_ID } from '../../models/constants';

const ID00 = 'sentence-id00';
const ID01 = 'sentence-id01';
const ID02 = 'sentence-id02';
const ID03 = 'sentence-id03';
const ID04 = 'sentence-id04';
const ID05 = 'sentence-id05';
const ID06 = 'sentence-id06';
const ID07 = 'sentence-id07';
const ID08 = 'sentence-id08';
const ID09 = 'sentence-id09';

const sentences: Array<Sentence> = [
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
      id: ID01,
      positions: {
        0: {
          after: ID00,
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
      },
      content: `Shahnameh ("Book of Kings") is one of the world's longest epic poems created by a single poet, and the national epic of Greater Iran.`,
    },
    {
      id: ID04,
      positions: {
        2: {
          after: ID05,
        },
      },
      content: `The Shahnameh is a long epic poem written by the Persian poet Ferdowsi between c. 977 and 1010 CE and is the national epic of Greater Iran. Consisting of some 50,000 "distichs" or couplets (two-line verses), the Shahnameh is one of the world's longest epic poems. It tells mainly the mythical and to some extent the historical past of the Persian Empire from the creation of the world until the Muslim conquest in the seventh century. Iran, Azerbaijan, Afghanistan and the greater region influenced by Persian culture such as Georgia, Armenia, Turkey and Dagestan celebrate this national epic.`,
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
          after: ID04,
        },
      },
      content: END_OF_LINE,
    },
];

export default sentences;
