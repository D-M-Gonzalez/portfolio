import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default function CreativityAccordion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={0.5}>
                        <EmojiObjectsIcon fontSize="large"/>
                    </Grid>
                    <Grid item xs={7.5}>
                        <Typography ml={5} fontSize={20} fontWeight="bold">Creatividad</Typography>
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
                    Tengo habilidad natural para crear e imaginar. Diseño mis prototipos y luego los hago realidad, contando con una amplia experiencia en diseño mecánico,
                    eléctrico y 3d. Hoy día, mi hobby principal es la impresión 3d, siendo cada uno de mis diseños de mi propiedad.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
  }