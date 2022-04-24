import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DevIcon from "devicon-react-svg";
import LinearProgress from '@mui/material/LinearProgress';

const devIconStyle = {
	width:"40px",
	height:"auto",
}

export default function ReactAccordion() {
  return (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={1}>
                    <DevIcon style={devIconStyle} icon="react"/>
                </Grid>
                <Grid item xs={5}>
                    <Typography ml={5} fontSize={20} fontWeight="bold">React.js</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box ml={5} sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color="primary" value={65} />
                    </Box>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </AccordionSummary>
        <AccordionDetails>
            <Typography paragraph={true}>
                Soy capaz de escribir códico de manera casi autónoma. Domino los Hooks básicos como useState, useEffect, useContext y useRef, pero tengo
                que revisar la documentación para otros, como para crear customHooks. Se como comunicar mi APP con un server y se como utilizar Promises, async y await, dentro de React.
                Soy capaz de manejar diferentes librerias, como MUI, styled-components y sweet-alert-2. 
            </Typography>
        </AccordionDetails>
    </Accordion>
  )
}