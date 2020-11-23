/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React, { useEffect, useState } from "react";
import { Sentences, SentencesLevels } from "../models/types";
import { getSentenceType } from "../models/utils";
import { ZoomableView } from './ZoomableView';

type Props = {
    sentences: Sentences;
};

const getNestedLevels = (sentences: Sentences, depth: number, levels: SentencesLevels) => {
    const { id, sentences: snts } = sentences;
    levels[id] = {
        zoomLevel: 0,
        depth,
    };
    snts.forEach(sentence => {
        const { content } = sentence;
        if (getSentenceType(content) === 'sentences') {
            getNestedLevels(content as Sentences, depth + 1, levels);
        }
    });
};

const ZoomableContainer: React.FC<Props> = (props: Props) => {
    const { sentences } = props;
    const l = {};
    getNestedLevels(sentences, 0, l);
    const [levels, setLevels] = useState<SentencesLevels>(l);
    const setZoomLevel = (id: string, zoomLevel: number) => {
        setLevels({
            ...levels,
            [id]: {
                ...levels[id],
                zoomLevel,
            },
        });
    };

    useEffect(() => {
        console.log('\x1b[34m%s\x1b[0m', JSON.stringify(levels));
    }, [levels]);

    return (
        <div style={{ width: '800px' }}>
            <ZoomableView
                sentences={sentences}
                levels={levels}
                setZoomLevel={setZoomLevel}
            />
        </div>
    );
};

export default ZoomableContainer;
