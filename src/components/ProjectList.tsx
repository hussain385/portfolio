// @flow
import React, {useState} from 'react';
import {ProjectModal} from "../modals/ProjectModal";

type Props = {
    project: { title: string, points: string[] }
};
export const ProjectList = ({project}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(true)} className='projectDiv'>
            <p style={{fontSize: '20px', marginBlock: '5px'}} className='BasicTextStyle'>{project.title}</p>
            {project.points.map((point: string, key: number) => (
                <ul key={key}>
                    <li>
                        <p style={{fontSize: '16px', marginBlock: '3px'}} className='BasicTextStyle'>{point}</p>
                    </li>
                </ul>
            ))}
            <ProjectModal open={open} setOpen={setOpen} />
        </div>
    );
};
