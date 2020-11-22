import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import ReactHtmlParser  from 'react-html-parser';
import { ZoomableView } from './index';
import { Colors, END_OF_LINE } from '../../models/constants';
import { Sentences } from '../../models/types';
import { getMinLevelForSentence, getOrderedSentenceKeys, getSentencesByZoomLevel, getSentenceType } from '../../models/utils';

type Props = {
    sentences: Sentences;
    zoomLevel: number;
}

function toHtml(s: string | Sentences) {
    return ReactHtmlParser(s as string);
}
  
function wrapInParagraph(paragraph:any[]) {
    return <p style={{textAlign: 'left'}} key={uuidv4()}>{[...paragraph]}</p>;
}
  
function genParagraphs(sentences: Sentences, zoomLevel: number) {
    const levelSentences = getSentencesByZoomLevel(sentences.sentences, zoomLevel);
    const orderedKeys = getOrderedSentenceKeys(levelSentences);
     let paragraphs: any[] = [];
    let paragraph: any[] = [];
    orderedKeys.forEach(key => {
        const color = Colors[getMinLevelForSentence(levelSentences[key])];
        const content = levelSentences[key].content;
        const contentType = getSentenceType(content);
        switch (contentType) {
            case 'string':
                if (content === END_OF_LINE) {
                    paragraphs.push(wrapInParagraph(paragraph));
                    paragraph = [];
                } else {
                    paragraph.push (<span style={{color: color.color, backgroundColor: color.bgColor}} key={uuidv4()}>{toHtml(content)}</span>);
                }
                break;
            case 'sentences':
                paragraph.push(<ZoomableView sentences={content as Sentences} key={uuidv4()}/>);
                break;
        }
    });
    paragraphs.push(wrapInParagraph(paragraph));
    return paragraphs;
}

const Paragraphs: React.FC<Props> = (props: Props) => {
    const { sentences, zoomLevel } = props;
    return <>{genParagraphs(sentences, zoomLevel)}</>;
};
export default Paragraphs;