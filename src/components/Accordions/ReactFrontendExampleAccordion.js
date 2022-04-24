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

export default function ReactFrontendExampleAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container>
                    <Grid item sm={1} xs={0.5}/>
                    <Grid item sm={10.5} xs={11}>
                        <Typography fontSize={18} fontWeight="bolder" paragraph>React Front-end Example</Typography>
                    </Grid>
                    <Grid item sm={0.5} xs={0.5}/>
                    <Grid item sm={2.5} xs={2}/>
                    <Grid item sm={2} xs={3}>
                        <Link mr={2} href="https://unruffled-rosalind-21eb10.netlify.app/"><IconButton><OpenInBrowserIcon sx={{color:"black",fontSize:40}}/></IconButton></Link>
                    </Grid>
                    <Grid item sm={3} xs={1}/>
                    <Grid item sm={2} xs={3}>
                        <Link ml={2} href="https://github.com/D-M-Gonzalez/webshop.example.frontend"><IconButton><DevIcon style={devIconStyle} icon="github_badge"/></IconButton></Link>
                    </Grid>
                    <Grid item sm={2.5} xs={3}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontSize={12} paragraph={true}>
                    Challenge hecho integramente en React.js para poder manejar una API, obteniendo diferentes elementos en el modo público, aplicando filtros y manejando una UI
                    simple hecha en CSS. Este ejemplo integra el uso de Hooks para realizar las diferentes funciones como también AJAX para realizar la Comunicación. Además, consta de una página de administrador desbloqueada por medio de un login, utilizando JWT como seguridad, en la cual podemos
                    eliminar y/o editar productos y usuarios.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }