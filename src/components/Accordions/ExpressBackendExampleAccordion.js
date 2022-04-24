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

export default function ExpressBackendExampleAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container>
                    <Grid item sm={0.5} xs={0.5}/>
                    <Grid item sm={11} xs={11}>
                        <Typography fontSize={18} fontWeight="bolder" paragraph>Express Back-end Example</Typography>
                    </Grid>
                    <Grid item sm={0.5} xs={0.5}/>
                    <Grid item sm={2.5} xs={2}/>
                    <Grid item sm={2} xs={3}>
                        <Link mr={2} href="https://webshop-example-backend.herokuapp.com/"><IconButton><OpenInBrowserIcon sx={{color:"black",fontSize:40}}/></IconButton></Link>
                    </Grid>
                    <Grid item sm={3} xs={1}/>
                    <Grid item sm={2} xs={3}>
                        <Link ml={2} href="https://github.com/D-M-Gonzalez/webshop.example.backend"><IconButton><DevIcon style={devIconStyle} icon="github_badge"/></IconButton></Link>
                    </Grid>
                    <Grid item sm={2.5} xs={3}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontSize={12} paragraph={true}>
                    Challenge hecho integramente en Express.js, que nos ofrece de 3 end-points, los cuales nos permiten obtener listas de objetos, eliminar objetos, editar objetos o buscar
                    uno en particular. Además, consta de una verificación de JWT para poder realizar cambios en la DB, como también de un sistema de respuestas dinámico basado en objetos
                    para poder dar un feedback acorde al usuario. 
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }