// @flow
import React from 'react';
import {Box, Rating, styled} from "@mui/material";
import {Heading} from "../../components/Heading";
import {BasicText} from "../../components/BasicText";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CircleIcon from '@mui/icons-material/Circle';
import data from './data.json'

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#721d37',
    },
    '& .MuiRating-iconHover': {
        color: '#721d37',
    },
    '&.Mui-disabled': {
        opacity: 1
    }
});

export const Skills = () => {
    return (
        <div id="skills">
            <Heading word="Skills"/>
            {data.map((value: {name: string, ratings: number}, key: number) => (
                <Box key={key} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10px'}}>
                    <BasicText text={value.name}/>
                    <StyledRating
                        name="customized-color"
                        defaultValue={value.ratings}
                        disabled
                        icon={<CircleIcon style={{fontSize: '28px', marginInline: '5px'}} />}
                        emptyIcon={<PanoramaFishEyeIcon style={{fontSize: '28px', marginInline: '5px'}} />}
                    />
                </Box>
            ))}
        </div>
    );
};
