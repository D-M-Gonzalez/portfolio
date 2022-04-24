import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import BuildIcon from '@mui/icons-material/Build';

export default function ProblemSolvingAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={0.5}>
                        <BuildIcon fontSize="large"/>
                    </Grid>
                    <Grid item xs={7.5}>
                        <Typography ml={5} fontSize={20} fontWeight="bold">Brindar Soluciones</Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Box ml={5} sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" color="secondary" value={100} />
                        </Box>
                    </Grid>
                    <Grid item xs={1.5}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography paragraph={true}>
                    He trabajado buscando y generando soluciones por años. Mi experiencia me hace capaz de buscar, diseñar y aplicar soluciones, utilizando tanto mi
                    conocimiento como también las herramientas disponibles en mi entorno para cuando mi conocimiento no es suficente. De esta manera, soy totalmente
                    autónomo a la hora de solucionar problemas.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }