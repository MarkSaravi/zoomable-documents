import React from 'react';
import ReactHtmlParser  from 'react-html-parser';
import { Colors, END_OF_LINE } from '../../models/constants';
import { Sentences } from '../../models/types';
import { getMinLevelForSentence, getOrderedSentenceKeys, getSentencesByZoomLevel } from '../../models/utils';

function toHtml(s: string | Sentences) {
    return ReactHtmlParser(s as string);
}
  
function wrapInParagraph(paragraph:any[]) {
    return <p style={{textAlign: 'left'}} >{[...paragraph]}</p>;
}
  
function genParagraphs(sentences: Sentences, zoomLevel: number) {
    const levelSentences = getSentencesByZoomLevel(sentences, zoomLevel);
    const orderedKeys = getOrderedSentenceKeys(levelSentences);
     let paragraphs: any[] = [];
    let paragraph: any[] = [];
    orderedKeys.forEach(key => {
        const color = Colors[getMinLevelForSentence(levelSentences[key])];
        const content = levelSentences[key].content;
        if (content === END_OF_LINE) {
        paragraphs.push(wrapInParagraph(paragraph));
        paragraph = [];
        } else {
        paragraph.push (<span style={{color: color.color, backgroundColor: color.bgColor}}>{toHtml(content)}</span>);
        }
    });
    paragraphs.push(wrapInParagraph(paragraph));
    return paragraphs;
}
  
export default genParagraphs;