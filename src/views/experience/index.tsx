// @flow
import React from 'react';
import {Box} from "@mui/material";
import {Heading} from "../../components/Heading";
import './style.css'
import {ListBox} from "../../components/ListBox";
import {SubHeading} from "../../components/SubHeading";
import data from './data.json'

export const Experience = () => {
    return (
        <Box style={{width: '37%'}}>
            <Heading word="work experience"/>
            {data.map((experienceData: any, key: number) => (
                <Box key={key} style={{display: 'flex'}}>
                    <ListBox main={false}/>
                    <Box className="main-container-experience">
                        <SubHeading word={experienceData.title}/>
                        <div className='titleHeading'>{experienceData.company_title}</div>
                        <div className='dateHeading'>{experienceData.start_date}&nbsp;-&nbsp;{experienceData.end_date}</div>
                        <div className='dateHeading'>Achievements/Tasks</div>
                        <ul>
                            {experienceData.tasks.map((task: any, key: number) => (
                                <li key={key}>
                                    <div className='listValue'>{task}</div>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
