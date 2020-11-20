/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React, { useState, useEffect, MouseEvent } from "react";
import ReactHtmlParser  from 'react-html-parser';
import { Colors, END_OF_LINE } from '../../models/constants';
import type { Sentence, Sentences } from '../../models/types';
import { getMinLevelForSentence, getOrderedSentenceKeys, getSentencesByZoomLevel } from "../../models/utils";

type CursorType = 'zoom-in' | 'zoom-out';

type OwnProps = {
  sentences: Sentences;
};

type Props = OwnProps;

function toHtml(s: string | Sentences) {
  return ReactHtmlParser(s as string);
}

function wrapInParagraph(paragraph:any[]) {
  return <p style={{textAlign: 'left'}} >{[...paragraph]}</p>;
}

function genParagraphs(orderedKeys: Array<string>, levelSentences: {[After: string]: Sentence}) {
  let paragraphs: any[] = [];
  let paragraph: any[] = [];
  orderedKeys.forEach(key => {
    const color = Colors[getMinLevelForSentence(levelSentences[key])];
    const content = levelSentences[key].content;
    // console.log('\x1b[34m%s\x1b[0m', content);
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

const ZoomableView: React.FC<Props> = (props: Props) => {
  const { sentences } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(0);
  const [cursor, setCursor] = useState<CursorType>('zoom-in');

  const levelSentences = getSentencesByZoomLevel(sentences, zoomLevel+1);
  const orderedKeys = getOrderedSentenceKeys(levelSentences);

  const onMouseClicked = (event: MouseEvent) => {
    if (event.shiftKey) {
      // setZoomLevel(sentences.zoomOut().level);
    } else {
      // setZoomLevel(content.zoomIn().level);
    }
  };

  const setMouseCursor = (event: MouseEvent) => {
    if (event.shiftKey && cursor != 'zoom-out') {
      setCursor('zoom-out');
    } else if (!event.shiftKey && cursor != 'zoom-in') {
      setCursor('zoom-in');
    }
  }

  const onMouseEntered = (event: MouseEvent) => {
    setMouseCursor(event);
  }
  const onMouseMoved = (event: MouseEvent) => {
    setMouseCursor(event);
  }

  useEffect(()=>{
    console.log('\x1b[34m%s\x1b[0m', `Cursor changed: ${cursor}`);
  },[cursor])

  useEffect(()=>{
    console.log('\x1b[34m%s\x1b[0m', `zoomLevel changed: ${zoomLevel}`);
  },[zoomLevel])

  return (
    <div>
      <section
        onClick={onMouseClicked}
        onMouseEnter={onMouseEntered}
        onMouseMove={onMouseMoved}
        style={{cursor}}
      >
        {genParagraphs(orderedKeys, levelSentences)}

      </section>
    </div>
  );
};

export { ZoomableView };
