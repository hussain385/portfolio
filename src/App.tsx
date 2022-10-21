import React from 'react';
import './App.css';
import './fonts/Helvetica.ttf'
import './fonts/Helvetica-Bold.ttf'
import './fonts/Helvetica-BoldOblique.ttf'
import './fonts/helvetica-compressed.otf'
import './fonts/helvetica-light.ttf'
import './fonts/helvetica-rounded-bold.otf'
import './fonts/Helvetica-Oblique.ttf'
import {Box} from "@mui/material";
import {Header} from "./views/header";
import BottomNavbar from "./components/BottomNavbar";
import {Experience} from "./views/experience";
import {Skills} from "./views/skills";
import {Education} from "./views/education";
import {Certificates} from "./views/certificates";

function App() {
    return (
        <Box style={{paddingBlock: '44px'}}>
            <Header/>
            <Box style={{display: 'flex'}}>
                <Box style={{width: '48%', paddingRight: '10%'}}>
                    <Experience />
                    <Education />
                </Box>
                <Box style={{width: '50%', paddingRight: '50px'}}>
                    <Skills />
                    <Certificates />
                </Box>
            </Box>
            <BottomNavbar />
        </Box>
        // <div style={{height: '100vh'}}>
        //     <object width="100%" height="100%" data="http://www.africau.edu/images/default/sample.pdf" type="application/pdf">   </object>
        // </div>
    );
}

export default App;
