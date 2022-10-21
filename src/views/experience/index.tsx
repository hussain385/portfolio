// @flow
import React from 'react';
import {Box} from "@mui/material";
import {Heading} from "../../components/Heading";
import './style.css'
import data from './data.json'
import {Section} from "../../components/Section";
import {BasicText} from "../../components/BasicText";

export const Experience = () => {
    return (
        <div id="experience">
            <Heading margin={true} word="work experience"/>
            {data.map((experienceData: any, key: number) => (
                <Section key={key} heading={experienceData.title} title={experienceData.company_title}
                         start_date={experienceData.start_date} end_date={experienceData.end_date}>
                    <div>
                        <div className='dateHeading'>Achievements/Tasks</div>
                        <ul>
                            {experienceData.tasks.map((task: any, key: number) => (
                                <li key={key} style={{marginBottom: '8px'}}>
                                    <BasicText text={task}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>
            ))}
        </div>
    );
};
