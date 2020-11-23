/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */

import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { ZoomableView } from './ZoomableView';
import { Colors, END_OF_LINE } from '../models/constants';
import { Sentences, SentencesLevels } from '../models/types';
import { getMinLevelForSentence, getOrderedSentenceKeys, getSentencesByZoomLevel, getSentenceType } from '../models/utils';

type CursorType = 'zoom-in' | 'zoom-out';

type Props = {
    sentences: Sentences;
    levels: SentencesLevels;
    setZoomLevel: (id: string, zoomLevel: number) => void;
}

function toHtml(s: string | Sentences) {
    return ReactHtmlParser(s as string);
}

function wrapInParagraph(paragraph:any[], depth: number) {
    return <p style={{ textAlign: 'left', zIndex: depth * 100, position: 'relative', backgroundColor: Colors[depth].bgColor }} key={uuidv4()}>{[...paragraph]}</p>;
}

function genParagraphs(
        sentences: Sentences,
        levels: SentencesLevels,
        setZoomLevel: (id: string, zoomLevel: number) => void,
        onMouseEntered: (e: React.MouseEvent<HTMLElement>) => void,
        onMouseMoved: (e: React.MouseEvent<HTMLElement>) => void,
        cursor: CursorType,
    ) {
    const { id } = sentences;
    const { zoomLevel, depth, maxLevel } = levels[id];
    const levelSentences = getSentencesByZoomLevel(sentences, zoomLevel);
    const orderedKeys = getOrderedSentenceKeys(levelSentences);
    const paragraphs: any[] = [];
    let paragraph: any[] = [];
    orderedKeys.forEach(key => {
        const color = Colors[getMinLevelForSentence(levelSentences[key])];
        const { content } = levelSentences[key];
        const contentType = getSentenceType(content);
        switch (contentType) {
            case 'sentences':
                paragraph.push(
                    <ZoomableView
                        sentences={content as Sentences}
                        levels={levels}
                        setZoomLevel={setZoomLevel}
                        key={uuidv4()}
                    />
                );
                break;
            default:
                if (content === END_OF_LINE) {
                    paragraphs.push(wrapInParagraph(paragraph, depth));
                    paragraph = [];
                } else {
                    paragraph.push(
                        <span
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                                if (e.shiftKey && zoomLevel > 0) {
                                    setZoomLevel(id, zoomLevel - 1);
                                } else if (!e.shiftKey && zoomLevel < maxLevel) {
                                    setZoomLevel(id, zoomLevel + 1);
                                }
                            }}
                            onMouseEnter={onMouseEntered}
                            onMouseMove={onMouseMoved}
                            style={{ color: color.color, backgroundColor: color.bgColor, cursor }}
                            key={uuidv4()}
                        >
                            {toHtml(content)}
                        </span>
                    );
                }
        }
    });
    paragraphs.push(wrapInParagraph(paragraph, depth));
    return paragraphs;
}

const Paragraphs: React.FC<Props> = (props: Props) => {
    const { sentences, levels, setZoomLevel } = props;
    const [cursor, setCursor] = useState<CursorType>('zoom-in');

    const setMouseCursor = (event: React.MouseEvent<HTMLElement>) => {
        if (event.shiftKey && cursor !== 'zoom-out') {
          setCursor('zoom-out');
        } else if (!event.shiftKey && cursor !== 'zoom-in') {
          setCursor('zoom-in');
        }
    };

    const onMouseEntered = (e: React.MouseEvent<HTMLElement>) => {
        setMouseCursor(e);
    };

    const onMouseMoved = (e: React.MouseEvent<HTMLElement>) => {
        setMouseCursor(e);
    };

    return (<>{genParagraphs(sentences, levels, setZoomLevel, onMouseEntered, onMouseMoved, cursor)}</>);
};
export default Paragraphs;
