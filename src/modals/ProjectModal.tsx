// @flow
import React from 'react';
import {Dialog} from '@mui/material'
import {Heading} from "../components/Heading";

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProjectModal = ({open, setOpen}: props) => {

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog
            sx={{
                '& .css-1kjw2u2-MuiPaper-root-MuiDialog-paper': {
                    maxWidth: '35em',
                },
                '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
                    backgroundColor: 'rgba(255,255,255,0.50)'
                },
                '& .css-tlc64q-MuiPaper-root-MuiDialog-paper': {
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;'
                }
            }}
            fullWidth
            maxWidth='sm'
            open={open}
            onClose={handleClose}
        >
            <Heading word='hello'/>
        </Dialog>
    );
};
