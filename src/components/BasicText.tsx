// @flow
import React from 'react';
import './style.css'

type Props = {
    text: string
};
export const BasicText = ({text}: Props) => {
    return (
        <p className='BasicTextStyle'>{text}</p>
    );
};
