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

export default function ResumeAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container>
                <Grid item sm={5} xs={2}/>
                    <Grid item sm={4} xs={8}>
                        <Typography fontSize={18} fontWeight="bolder" paragraph>Resume</Typography>
                    </Grid>
                    <Grid item sm={3} xs={2}/>
                    <Grid item sm={2.5} xs={2}/>
                    <Grid item sm={2} xs={3}>
                        <Link mr={2} href="https://d-m-gonzalez.github.io/Resume/"><IconButton><OpenInBrowserIcon sx={{color:"black",fontSize:40}}/></IconButton></Link>
                    </Grid>
                    <Grid item sm={3} xs={1}/>
                    <Grid item sm={2} xs={3}>
                        <Link ml={2} href="https://github.com/D-M-Gonzalez/Resume"><IconButton><DevIcon style={devIconStyle} icon="github_badge"/></IconButton></Link>
                    </Grid>
                    <Grid item sm={2.5} xs={3}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontSize={12} paragraph={true}>
                    Mi CV online, totalmente hecho en HTML5/CSS3, con cambio de idioma, links interactivos y modo impresión.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }