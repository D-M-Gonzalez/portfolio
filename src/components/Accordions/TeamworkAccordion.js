import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import GroupsIcon from '@mui/icons-material/Groups';

export default function TeamworkAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={0.5}>
                        <GroupsIcon fontSize="large"/>
                    </Grid>
                    <Grid item xs={7.5}>
                        <Typography ml={5} fontSize={20} fontWeight="bold">Trabajo en Equipo</Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Box ml={5} sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" color="secondary" value={95} />
                        </Box>
                    </Grid>
                    <Grid item xs={1.5}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography paragraph={true}>
                    Tengo una amplia experiencia trabajando en equipo. Logro empatizar tanto con mis compañeros como con personas fuera de mi equipo, logrando mantener
                    excelentes relaciones que hacen ameno el trabajo. Tengo predisposición para enseñar y ayudar, sin miendo ni prejuicios, lo que hace que mis compañeros
                    y personas de afuera siempre acudan a mi cuando necesitan ayuda, como también para lograr coordinar con ellos. He liderado un equipo por varios años en el
                    pasado y pude cumplir todos los objetivos que se nos propusieron, sin poseer conflictos internos en el mismo, y dividiendo justamente nuestras tareas.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }