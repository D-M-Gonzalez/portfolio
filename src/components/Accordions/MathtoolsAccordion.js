import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import DevIcon from "devicon-react-svg";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const devIconStyle = {
	width:"40px",
	height:"auto",
}

export default function MathtoolsAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container>
                    <Grid item sm={4} xs={2}/>
                    <Grid item sm={6} xs={8}>
                        <Typography fontSize={18} fontWeight="bolder" paragraph>Math Tools</Typography>
                    </Grid>
                    <Grid item sm={2} xs={2}/>
                    <Grid item sm={2.5} xs={2}/>
                    <Grid item sm={2} xs={3}>
                        <Link mr={2} href="https://d-m-gonzalez.github.io/MathTools/"><IconButton><OpenInBrowserIcon sx={{color:"black",fontSize:40}}/></IconButton></Link>
                    </Grid>
                    <Grid item sm={3} xs={1}/>
                    <Grid item sm={2} xs={3}>
                        <Link ml={2} href="https://github.com/D-M-Gonzalez/MathTools"><IconButton><DevIcon style={devIconStyle} icon="github_badge"/></IconButton></Link>
                    </Grid>
                    <Grid item sm={2.5} xs={3}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontSize={12} paragraph={true}>
                    Herramienta hecha en HTML5/CSS3/JS que nos permite escribir un cálculo combinado y nos devuelve el resultado paso a paso. El gran desafío de esta herramienta
                    fué lograr el algoritmo que reconociera la fórmula ingresada, buscara errores y luego la transformara en un array útil para poder realizar las operaciones
                    una por una hasta obtener el resultado final. Todas las operaciones son guardadas para luego ser utilizadas a la hora de devolver el resultado.
                    Trabajo final del curso de JS CoderHouse, nota 10.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }