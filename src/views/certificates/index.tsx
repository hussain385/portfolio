// @flow
import React from 'react';
import {Heading} from "../../components/Heading";
import data from "./data.json";
import {BasicText} from "../../components/BasicText";

export const Certificates = () => {
    return (
        <div style={{marginTop: '2em'}}>
            <Heading word="certificates"/>
            <div style={{paddingLeft: '10px'}}>
                {data.map((value: {certificate_name: string}, key: number) => (
                    <BasicText text={value.certificate_name}/>
                ))}
            </div>
        </div>
    );
};
