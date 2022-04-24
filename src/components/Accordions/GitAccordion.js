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

export default function GitAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={1}>
                        <DevIcon style={devIconStyle} icon="git"/>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography ml={5} fontSize={20} fontWeight="bold">Git</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box ml={5} sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" color="primary" value={30} />
                        </Box>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography paragraph={true}>
                    Soy capaz de manejar el nivel básico de Git. Conozco como manejar un repositorio y como modificarlo, añadiendo nuevas branches, como modificando y/o
                    eliminando las actuales. Se como actualizar un repositorio remoto y manejarlo directamente desde la consola.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }