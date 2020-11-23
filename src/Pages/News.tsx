/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { useParams } from "react-router-dom";
import ZoomableContainer from '../components/ZooambleContainer';
import { Sentences } from "../models/types";
import news00 from '../data/news00';
import news01 from '../data/news01';
import news02 from '../data/news02';

const NewsPage: React.FC = () => {
    const { day } = useParams<{ day?: string}>();
    let news: Sentences = news00;
    switch (day) {
        case '0':
            news = news00;
            break;
        case '1':
            news = news01;
            break;
        case '2':
            news = news02;
            break;
        default:
            news = news00;
    }
    return (<ZoomableContainer sentences={news} />);
};

export default NewsPage;
