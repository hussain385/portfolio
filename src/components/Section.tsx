// @flow
import React from 'react';
import {ListBox} from "./ListBox";
import {Box} from "@mui/material";
import {SubHeading} from "./SubHeading";

type Props = {
    heading: string;
    title: string;
    start_date: string;
    end_date: string;
    children: JSX.Element;
};
export const Section = (props: Props) => {
    return (
        <Box style={{display: 'flex', marginBottom: '1em'}}>
            <ListBox main={false}/>
            <Box className="main-container-experience">
                <SubHeading word={props.heading}/>
                <div className='titleHeading'>{props.title}</div>
                <div className='dateHeading'>{props.start_date}&nbsp;-&nbsp;{props.end_date}</div>
                {props.children}
            </Box>
        </Box>
    );
};
