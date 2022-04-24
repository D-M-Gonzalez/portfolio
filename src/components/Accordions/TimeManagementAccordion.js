import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import TimerIcon from '@mui/icons-material/Timer';

export default function TimeManagementAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={0.5}>
                        <TimerIcon fontSize="large"/>
                    </Grid>
                    <Grid item xs={7.5}>
                        <Typography ml={5} fontSize={20} fontWeight="bold">Manejo del tiempo</Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Box ml={5} sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" color="secondary" value={90} />
                        </Box>
                    </Grid>
                    <Grid item xs={1.5}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography paragraph={true}>
                    Soy capaz de evaluar cada uno de mis trabajos y asignar mis tiempos de manera adecuada. Mi experiencia trabajando en el exterior me hizo generar
                    practicas en donde tengo que calcular mis tiempos con una alta precisión para poder cumplir con límites inflexibles, fijados mucho antes de siquiera
                    poder revisar el problema.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }