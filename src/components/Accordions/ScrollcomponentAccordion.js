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

export default function ScrollcomponentAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container>
                <Grid item sm={3} xs={2}/>
                    <Grid item sm={8} xs={8}>
                        <Typography fontSize={18} fontWeight="bolder" paragraph>Scroll Component</Typography>
                    </Grid>
                    <Grid item sm={1} xs={2}/>
                    <Grid item sm={2.5} xs={2}/>
                    <Grid item sm={2} xs={3}>
                        <Link mr={2} href="https://admirable-piroshki-8c2b5a.netlify.app/#/seccion1"><IconButton><OpenInBrowserIcon sx={{color:"black",fontSize:40}}/></IconButton></Link>
                    </Grid>
                    <Grid item sm={3} xs={1}/>
                    <Grid item sm={2} xs={3}>
                        <Link ml={2} href="https://github.com/D-M-Gonzalez/scrollcomponent"><IconButton><DevIcon style={devIconStyle} icon="github_badge"/></IconButton></Link>
                    </Grid>
                    <Grid item sm={2.5} xs={3}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontSize={12} paragraph={true}>
                    Componente hecho en React.js que es capas de redireccionar nuestra pantalla hacia el componente seleccionado y cambiar la URL. Además, este componente reconoce
                    cambios de URL manuales y nos lleva hacia donde queremos. Y por último, al recorrer todo el componente, cambia la URL dependiendo en que elemento estemos parados.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }