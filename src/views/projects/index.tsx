// @flow
import React from 'react';
import {Heading} from "../../components/Heading";
import data from './data.json'
import './style.css'
import {ProjectList} from "../../components/ProjectList";

export const Projects = () => {

    return (
        <div id="projects" style={{marginTop: '1.5em'}}>
            <Heading word="PERSONAL PROJECTS"/>
            {data.map((project: any, key: number) => (
                <ProjectList key={key} project={project}/>
            ))}
        </div>
    );
};
