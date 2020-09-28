/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */

import { ZoomableSentences, ZoomableContent } from '../../types';

class Zoomable implements ZoomableContent {
    constructor(readonly sentences: ZoomableSentences) {}

    toString(_zoomLevel: number): string {
        return `${_zoomLevel}`;
    }
}

export { Zoomable };
