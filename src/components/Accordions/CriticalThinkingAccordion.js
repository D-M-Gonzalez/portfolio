import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function CriticalThinkingAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={0.5}>
                        <PsychologyIcon fontSize="large"/>
                    </Grid>
                    <Grid item xs={7.5}>
                        <Typography ml={5} fontSize={20} fontWeight="bold">Pensamiento Crítico</Typography>
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
                    Mi amplia experiencia trabjando en ingeniería me enseñó como pensar. Desarrollo soluciones teniendo en cuenta cada uno de los aspectos
                    del problema, analizando uno por uno los razonamientos propuestos para poder llegar a la solución más óptima. Esta capacidad me dió las herramientas
                    necesarias para solucionar hasta los problemas más complejos en el área de la electro-mecánica y hoy me encuentro aplicandolo en IT.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }