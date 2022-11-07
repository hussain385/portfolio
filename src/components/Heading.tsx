// @flow
import React from 'react';
import './style.css';

type Props = {
    word: string
    margin?: boolean
};
export const Heading = ({word, margin}: Props) => {
    return (
        <div style={{marginLeft: margin ? 'calc(48px + 28px)' : '10px'}} className='headingStyle'>{word}</div>
    );
};
