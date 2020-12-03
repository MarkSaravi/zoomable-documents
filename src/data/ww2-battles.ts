/* eslint-disable import/extensions */

import { Sentences } from '../models/types';
import {
  FIRST_SENTENCE_ID,
} from '../models/constants';

const DIVIDER = '<div style="width: 100%; border-bottom: solid 2px black; margin: 16px"/>';

const savoisland: Sentences = {
    id: 'si',
    sentences: [
        {
            id: 'si-0',
            content: 'As the transports unloaded on the night of 8–9 August, two groups of screening Allied cruisers and destroyers, under the command of British Rear Admiral Victor Crutchley VC, were surprised and defeated by a Japanese force of seven cruisers and one destroyer from the 8th Fleet based at Rabaul and Kavieng and commanded by Japanese Vice Admiral Gunichi Mikawa.',
            positions: {
                0: { after: FIRST_SENTENCE_ID }
            }
        },
        {
            id: 'si-1',
            content: 'One Australian and three American cruisers were sunk and one American cruiser and two destroyers were damaged. ',
            positions: {
                1: { after: FIRST_SENTENCE_ID }
            }
        },
        {
            id: 'si-2',
            content: 'Turner decided to withdraw his remaining naval forces by the evening of 9 August and in so doing left the Marines ashore without much of the heavy equipment, provisions and troops still aboard the transports.',
            positions: {
                2: { after: FIRST_SENTENCE_ID }
            }
        }
    ]
};

const tenaru: Sentences = {
    id: 'te',
    sentences: [
        {
            id: 'te-0',
            content: `In response to the Allied landings on Guadalcanal, the Japanese Imperial General Headquarters assigned the Imperial Japanese Army's (IJA) 17th Army, a corps-sized command based at Rabaul and under the command of Lieutenant General Harukichi Hyakutake, the task of retaking Guadalcanal.`,
            positions: {
                0: { after: FIRST_SENTENCE_ID }
            }
        },
        {
            id: 'te-1',
            content: `Underestimating the strength of Allied forces on Guadalcanal, Ichiki's unit conducted a nighttime frontal assault on Marine positions at Alligator Creek (often called the "Ilu River" on U.S. Marine maps) on the east side of the Lunga perimeter in the early morning hours of 21 August.`,
            positions: {
                1: { after: FIRST_SENTENCE_ID }
            }
        },
        {
            id: 'te-2',
            content: ` Jacob Vouza, a Solomon Islands Coastwatcher scout, warned the Americans of the impending attack minutes before Ichiki's assault which was subsequently defeated with heavy losses to the Japanese.`,
            positions: {
                2: { after: FIRST_SENTENCE_ID }
            }
        }
    ]
};

const battlestimeline: Sentences = {
    id: 'batl',
    sentences: [
        {
            id: 'batl-0',
            content: '<h4>8-9 Aug 1942<h4>',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'batl-1',
            content: '<h4>Battle of Savo Island</h4>',
            positions: {
                0: { after: 'batl-0' }
            }
        },
        {
            id: 'batl-2',
            content: savoisland,
            positions: {
                0: { after: 'batl-1' }
            }
        },
        {
            id: 'batl-3',
            content: '<h4>21 Aug 1942<h4>',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'batl-4',
            content: '<h4>Battle of the Tenaru</h4>',
            positions: {
                1: { after: 'batl-3' }
            }
        },
        {
            id: 'batl-5',
            content: tenaru,
            positions: {
                1: { after: 'batl-4' }
            }
        },
    ]
};

const battles: Sentences = {
    id: 'bat',
    sentences: [
        {
            id: 'bat-0',
            content: DIVIDER,
            positions: {
                0: { after: FIRST_SENTENCE_ID }
            }
        },
        {
            id: 'bat-1',
            content: '<h3>Battles</h3>',
            positions: {
                0: { after: 'bat-0' }
            }
        },
        {
            id: 'bat-2',
            content: battlestimeline,
            positions: {
                0: { after: 'bat-1' },
            },
        },
    ]
};

export default battles;
