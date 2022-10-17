// @flow
import React from 'react';
import {Box} from '@mui/material';
import './style.css';

type Props = {
    main?: boolean
}

export const ListBox = ({main}: Props) => {
    return (
        <Box className='space-between' style={{flexDirection: 'column'}}>
            <Box className={main ? 'boxDesign1' : 'boxDesign2'}/>
            <Box/>
        </Box>
    );
};
