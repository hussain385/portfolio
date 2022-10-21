// @flow
import React from 'react';
import {Heading} from "../../components/Heading";
import data from './data.json'
import {Section} from "../../components/Section";

export const Education = () => {
    return (
        <div id="education" style={{marginTop: '3.5em'}}>
            <Heading margin={true} word="education"/>
            {data.map((value: {degree: string, university: string, start_date: string, end_date: string}, key: number) => (
                <Section heading={value.degree} title={value.university}
                         start_date={value.start_date} end_date={value.end_date}>
                    <div />
                </Section>
            ))}
        </div>
    );
};
