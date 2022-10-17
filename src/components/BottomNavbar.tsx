import React, {useState} from 'react';
import {Box} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {BsBriefcaseFill} from 'react-icons/bs';
import {IoIosPerson, IoIosSchool} from 'react-icons/io'
import {GiOpenFolder} from 'react-icons/gi'
import {MdOutlineDeveloperMode} from 'react-icons/md'
import './style.css'

const navbarValues = [
    {
        label: 'About',
        value: 'about',
        icon: <IoIosPerson className="iconNav"/>
    },
    {
        label: 'Experience',
        value: 'experience',
        icon: <BsBriefcaseFill className="iconNav"/>
    },
    {
        label: 'Skills',
        value: 'skills',
        icon: <MdOutlineDeveloperMode className="iconNav"/>
    },
    {
        label: 'Education',
        value: 'education',
        icon: <IoIosSchool className="iconNav"/>
    },
    {
        label: 'Projects',
        value: 'projects',
        icon: <GiOpenFolder className="iconNav"/>
    }
]

export default function BottomNavbar() {
    const [value, setValue] = useState<string>('about');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box className='navbar'>
            <BottomNavigation showLabels className='navbar-style' value={value} onChange={handleChange}>
                {navbarValues.map((navbarOpt, key) => (
                    <BottomNavigationAction
                        key={key}
                        style={{
                            color: (navbarOpt.value === value) ? '#721d37' : 'rgba(81,81,81,0.84)',
                            borderRadius: '1em',
                            margin: '5px',
                            padding: '5px',
                            fontSize: '10px',
                            minWidth: 'auto',
                            maxWidth: 'auto'
                        }}
                        label={navbarOpt.label}
                        value={navbarOpt.value}
                        icon={navbarOpt.icon}
                    />
                ))}
            </BottomNavigation>
        </Box>
    );
}
