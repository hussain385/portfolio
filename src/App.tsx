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

function App() {
    return (
        <Box style={{paddingBlock: '44px'}}>
            <Header/>
            <Box>
                <Experience />
            </Box>
            <BottomNavbar />
        </Box>
    );
}

export default App;
