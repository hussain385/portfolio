// @flow
import React from 'react';
import './style.css';

type Props = {
    word: string
};
export const SubHeading = ({word}: Props) => {
    return (
        <div className='subHeadingStyle'>{word}</div>
    );
};
