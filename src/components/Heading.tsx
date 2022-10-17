// @flow
import React from 'react';
import './style.css';

type Props = {
    word: string
};
export const Heading = ({word}: Props) => {
    return (
        <div className='headingStyle'>{word}</div>
    );
};
