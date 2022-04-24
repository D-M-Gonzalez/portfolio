import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import AdaptabilityAccordion from '../../components/Accordions/AdaptabilityAccordion';
import CreativityAccordion from '../../components/Accordions/CreativityAccordion';
import CriticalThinkingAccordion from '../../components/Accordions/CriticalThinkingAccordion';
import ProblemSolvingAccordion from '../../components/Accordions/ProblemSolvingAccordion';
import TeamworkAccordion from '../../components/Accordions/TeamworkAccordion';
import TimeManagementAccordion from '../../components/Accordions/TimeManagementAccordion';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ShieldIcon from '@mui/icons-material/Shield';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LanguageIcon from '@mui/icons-material/Language';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const Fade = keyframes`
	from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const mainSoft = [{
	comp: <AdaptabilityAccordion />,
	key:"adaptability"
},{
	comp: <CreativityAccordion />,
	key:"creativity"
},{
	comp: <CriticalThinkingAccordion />,
	key:"criticalthinking"
},{
	comp: <ProblemSolvingAccordion />,
	key:"problemsolving"
},{
	comp: <TeamworkAccordion />,
	key:"teamwork"
},{
	comp: <TimeManagementAccordion />,
	key:"timemanagement"
},]

const secondarySoft = [{
    text: "Responsabilidad",
    value: 95,
    key: "accountability",
    icon: <PlaylistAddCheckIcon/>
},{
    text: "Confianza",
    value: 90,
    key: "confidence",
    icon: <ShieldIcon/>
},{
    text: "Curiosidad",
    value: 100,
    key: "curiosity",
    icon: <ImageSearchIcon/>,
},{
    text: "Ingeniosidad",
    value: 100,
    key: "ingeniosity",
    icon: <SettingsSuggestIcon/>
},{
    text: "Perseverancia",
    value: 90,
    key: "perseverance",
    icon: <PublishedWithChangesIcon/>
},{
    text: "Comunicacion",
    value: 85,
    key: "communication",
    icon: <ConnectWithoutContactIcon/>
},{
    text: "Inglés Escrito",
    value: 85,
    key: "writenenglish",
    icon: <LanguageIcon/>
},{
    text: "Ingles Oral",
    value: 70,
    key: "oralenglish",
    icon: <LanguageIcon/>
},]

export default function SoftSkills() {
  	return (
	<Grid container spacing={2} direction="row" justifyContent="center">
		<Grid item xs={12}>
			<Grid container justifyContent="center" alignItems="center">
                <Reveal keyframes={Fade} duration={800}>
				    <Typography fontSize={40} fontWeight="bolder">Habilidades Blandas Principales</Typography>
                </Reveal>
			</Grid>
		</Grid>
		<Grid item xs={12}>
			<Grid container justifyContent="center" alignItems="center">
                <Reveal keyframes={Fade} duration={800}>
				<Typography mb={5} fontSize={20} fontStyle="italic">"Descripción de mis habilidades blandas, haz click en cada una para ver su detalle"</Typography>
                </Reveal>
			</Grid>
		</Grid>
        {Array.from(mainSoft).map((el)=>(
            <Grid item md={6} sm={8} key={el.key}>
			    <Reveal keyframes={Fade} duration={800}>
				    {el.comp}
			    </Reveal>
		    </Grid>
        ))}
        <Grid item xs={12}>
			<Grid container justifyContent="center" alignItems="center">
                <Reveal keyframes={Fade} duration={800}>
				<Typography mt={5} fontSize={40} fontWeight="bolder">Habilidades Blandas Secundarias</Typography>
                </Reveal>
			</Grid>
		</Grid>
        <Grid item xs={12}>
			<Grid container justifyContent="center" alignItems="center">
                <Reveal keyframes={Fade} duration={800}>
				<Typography mb={5} fontSize={20} fontStyle="italic">"Otras habilidades mías, pero no menos importantes."</Typography>
                </Reveal>
			</Grid>
		</Grid>
        {Array.from(secondarySoft).map((el)=>(
            <Grid item md={3} sm={6} xs={12} key={el.key}>
                <Reveal keyframes={Fade} duration={800}>
                        <Paper elevation={1} sx={{width:"100%"}}>
                            <Grid container justifyContent="center" alignItems="center" >
                                <Grid item xs={1.5}>
                                    {el.icon}
                                </Grid>
                                <Grid item xs={5}>
                                <Typography ml={1} fontSize={16} fontWeight="bold">{el.text}</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box ml={3} sx={{ width: '100%' }}>
                                        <LinearProgress variant="determinate" color="secondary" value={el.value} />
                                    </Box>
                                </Grid>
                                <Grid item xs={1}/>     
                            </Grid>
                        </Paper>
                </Reveal>
            </Grid>            
        ))}
	</Grid>
  )
}