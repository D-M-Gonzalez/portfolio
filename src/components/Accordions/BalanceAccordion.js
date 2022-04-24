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

export default function BalanceAccordion() {
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
                        <Link mr={2} href="https://brilliant-cocada-34996f.netlify.app/"><IconButton><OpenInBrowserIcon sx={{color:"black",fontSize:40}}/></IconButton></Link>
                    </Grid>
                    <Grid item sm={3} xs={1}/>
                    <Grid item sm={2} xs={3}>
                        <Link ml={2} href="https://github.com/D-M-Gonzalez/AlkemyChallenge/tree/frontend"><IconButton><DevIcon style={devIconStyle} icon="github_badge"/></IconButton></Link>
                    </Grid>
                    <Grid item sm={2.5} xs={3}/>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontSize={12} paragraph={true}>
                    Herramienta realizada en React.js, Express.js y MongoDB utilizando como framework Material UI. Esta misma, fué diseñada con la intención de ofrecer una herramienta capaz de ofrecer un resumen
                    de balance de cuentas personal, el cual se pueda listar cada uno de los ingresos/egresos, filtrar los mismos y mostrar el total. La herramienta es capaz
                    de leer los balances de cada usuario independiente.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }