/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { VscZoomIn, VscZoomOut } from "react-icons/vsc";
import { ICON_SIZE } from '../models/constants';

type Props = {
    handler: () => void;
}

const style = {
    cursor: 'pointer',
};

const ZoomIn = (props: Props) => {
    const { handler } = props;
    return (<a style={style} onClick={handler}> <VscZoomIn size={ICON_SIZE} /></a>);
};

const ZoomOut = (props: Props) => {
    const { handler } = props;
    return (<a style={style} onClick={handler}> <VscZoomOut size={ICON_SIZE} /></a>);
};

export { ZoomIn, ZoomOut };
