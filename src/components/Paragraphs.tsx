/* eslint-disable import/extensions */
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { ZoomableView } from './ZoomableView';
import { Colors, END_OF_LINE } from '../models/constants';
import { Sentences, SentencesLevels } from '../models/types';
import { getMinLevelForSentence, getOrderedSentenceKeys, getSentencesByZoomLevel, getSentenceType } from '../models/utils';

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
    ) {
    const { id } = sentences;
    const { zoomLevel, depth } = levels[id];
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
                            style={{ color: color.color, backgroundColor: color.bgColor }}
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
    return <>{genParagraphs(sentences, levels, setZoomLevel)}</>;
};
export default Paragraphs;
