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

export default function JavasScriptAccordion() {
  return (
    <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={1}>
                    <DevIcon style={devIconStyle} icon="javascript"/>
                </Grid>
                <Grid item xs={5}>
                    <Typography ml={5} fontSize={20} fontWeight="bold">JavaScript</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box ml={5} sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" color="primary" value={80} />
                    </Box>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </AccordionSummary>
        <AccordionDetails>
            <Typography paragraph={true}>
                Soy capaz de escribir código de manera casi autónoma solamente revisando la documentación para algunos items. 
                Domino todos los métodos de Arrays de JavaScript como por ejemplo los de transformacion forEach, map, filter, etc.,
                los de recorrido y modificación como pop, push, shift, unshift, etc. Conozco acerca de AJAX, y se utilizar una API sin 
                revisar la documentación, como también Promises, async y await.
            </Typography>
        </AccordionDetails>
    </Accordion>
  )
}
