// @flow
import React from 'react';
import {Box} from "@mui/material";
import {ListBox} from "../../components/ListBox";
import './style.css'
import {BsFillEnvelopeFill, BsPhoneFill, BsLinkedin, BsGithub} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'

export const Header = () => {
    return (
        <Box id="" style={{display: 'flex', borderBottom: '1px solid #721d37', marginBottom: '24px', paddingBottom: '28px'}}>
            <ListBox main={true}/>
            <Box className='main-container'>
                <Box style={{width: '53%'}}>
                    <div className='name'>Hussain Quettawala</div>
                    <div className='title'>Front-end Developer</div>
                    <div className='about'>I aim to present myself as a dedicated and detail-oriented front-end developer who aims to thrive in
                        a fast-paced environment. I seek to practice my learning through extensive hands on experience while
                        helping organizations achieve their goal of excellence.</div>
                </Box>
                <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'end'}}>
                    <div className='center'>
                        <a target="_blank" rel="noreferrer" href="mailto:hussainquetta53@gmail.com" className="value">hussainquetta53@gmail.com</a>
                        <BsFillEnvelopeFill className='icon'/>
                    </div>
                    <div className='center'>
                        <a target="_blank" rel="noreferrer" href="tel:+923236501386" className="value">(+92) 3236501386</a>
                        <BsPhoneFill className='icon'/>
                    </div>
                    <div className='center'>
                        <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/dCW94dmFR36ctNBT8" className="value">Karachi, Sindh, Pakistan</a>
                        <ImLocation2 className='icon'/>
                    </div>
                    <div className='center'>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hussain-saifuddin786" className="value">linkedin.com/in/hussain-saifuddin786</a>
                        <BsLinkedin className='icon'/>
                    </div>
                    <div className='center'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/hussain385" className="value">github.com/hussain385</a>
                        <BsGithub className='icon'/>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};
