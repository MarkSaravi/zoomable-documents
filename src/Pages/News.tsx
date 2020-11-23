/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define

import React from "react";
import { useParams } from "react-router-dom";
import ZoomableContainer from '../components/ZooambleContainer';
import { Sentences } from "../models/types";
import news1 from '../data/news1';
import news2 from '../data/news2';
import news3 from '../data/news3';

const NewsPage: React.FC = () => {
    const { day } = useParams<{ day?: string}>();
    let news: Sentences = news1;
    switch (day) {
        case '1':
            news = news1;
            break;
        case '2':
            news = news2;
            break;
        case '3':
            news = news3;
            break;
        default:
            news = news1;
    }
    return (<ZoomableContainer sentences={news} />);
};

export default NewsPage;
