/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { ZoomableArticleView } from '../ZoomableArticle';
import { FIRST_SENTENCE_ID } from '../../constants';
import { Sentence } from "../../zoomable-content/types";
import ZoomableContent from "../../zoomable-content";

const SENTENCE_ID00 = 'sentence-id00';
const SENTENCE_ID01 = 'sentence-id01';
const SENTENCE_ID02 = 'sentence-id02';
const SENTENCE_ID03 = 'sentence-id03';
const SENTENCE_ID04 = 'sentence-id04';

const sentences: Array<Sentence> = [
    {
      id: SENTENCE_ID00,
      positions: {
        0: {
          after: FIRST_SENTENCE_ID,
        },
        1: {
          after: SENTENCE_ID02,
          eol: true,
        },
        2: {
          after: SENTENCE_ID02,
          eol: true,
        },
      },
      content: '<b>Ferdowsi</b> was a Persian poet and the author of <b>Shahnameh</b>.',
    },
    {
      id: SENTENCE_ID01,
      positions: {
        0: {
          after: SENTENCE_ID00,
          eol: true,
        },
        1: {
          after: SENTENCE_ID03,
          eol: true,
        },
        2: {
          after: SENTENCE_ID04,
          eol: true,
        },
      },
      content: 'Ferdowsi is celebrated as the most influential figure in Persian literature and one of the greatest in the history of literature.',
    },
    {
      id: SENTENCE_ID02,
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
      id: SENTENCE_ID03,
      positions: {
        1: {
          after: SENTENCE_ID00,
          eol: true,
        },
      },
      content: `Shahnameh ("Book of Kings") is one of the world's longest epic poems created by a single poet, and the national epic of Greater Iran.`,
    },
    {
      id: SENTENCE_ID04,
      positions: {
        2: {
          after: SENTENCE_ID00,
          eol: true,
        },
      },
      content: `The Shahnameh is a long epic poem written by the Persian poet Ferdowsi between c. 977 and 1010 CE and is the national epic of Greater Iran. Consisting of some 50,000 "distichs" or couplets (two-line verses), the Shahnameh is one of the world's longest epic poems. It tells mainly the mythical and to some extent the historical past of the Persian Empire from the creation of the world until the Muslim conquest in the seventh century. Iran, Azerbaijan, Afghanistan and the greater region influenced by Persian culture such as Georgia, Armenia, Turkey and Dagestan celebrate this national epic.`,
    },
   ];

const ZoomableArticleContainer: React.FC = () => {
  const zoomable = new ZoomableContent(sentences);
  return (
    <>
      <div style={{ width: "800px", margin: "48px", textIndent: '24px' }}>
        <ZoomableArticleView content={zoomable} />
      </div>
    </>
  );
};

export default ZoomableArticleContainer;
