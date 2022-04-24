import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/system/Box'
import ResumeAccordion from '../../components/Accordions/ResumeAccordion'
import MathtoolsAccordion from '../../components/Accordions/MathtoolsAccordion'
import ScrollcomponentAccordion from '../../components/Accordions/ScrollcomponentAccordion'
import ReactFrontendExampleAccordion from '../../components/Accordions/ReactFrontendExampleAccordion'
import ExpressBackendExampleAccordion from '../../components/Accordions/ExpressBackendExampleAccordion'
import PortfolioAccordion from '../../components/Accordions/PortfolioAccordion'
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import BalanceAccordion from '../../components/Accordions/BalanceAccordion'

const Fade = keyframes`
	from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const cards = [{
	comp: <ResumeAccordion />,
	img: "/assets/Resume.png",
	key:"resume"
},
{
	comp: <MathtoolsAccordion />,
	img: "/assets/Mathtools.png",
	key:"math"
},
{
	comp: <ScrollcomponentAccordion />,
	img: "/assets/ScrollComponent.png",
	key:"scroll"
},
{
	comp: <ReactFrontendExampleAccordion />,
	img: "/assets/WebshopExampleFrontend.png",
	key:"reactfrontend"
},
{
	comp: <ExpressBackendExampleAccordion />,
	img: "/assets/WebshopExampleFrontend.png",
	key:"expressbackend"
},
{
	comp: <PortfolioAccordion />,
	img: "/assets/Portfolio.png",
	key:"portfolio"
},
{
	comp: <BalanceAccordion/>,
	img: "/assets/Balance.png",
	key:"balance"
},
]


export default function Portfolio() {

  	return (
    	<Grid spacing={3} container justifyContent="center">
			<Grid item xs={12}>
				<Grid container justifyContent="center" alignItems="center">
					<Reveal keyframes={Fade} duration={800}>
						<Typography fontSize={40} fontWeight="bolder">Mis trabajos</Typography>
					</Reveal>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container justifyContent="center" alignItems="center">
					<Reveal keyframes={Fade} duration={800}>
						<Typography mb={5} fontSize={20} fontStyle="italic">"Listado de mis trabajos, puedes ver la descripción haciendo click"</Typography>
					</Reveal>
				</Grid>
			</Grid>
			{Array.from(cards).map((el)=>(
			<Grid item md={3} xs={6} sx={{width:"100%",height:"100%"}} key={el.key}>
			<Reveal keyframes={Fade} duration={800}>
				<Paper>
					<Grid container alignItems="center" direction="column">
						<Box component="img" sx={{ height: "auto",
							width: "95%"}} src={el.img}>
						</Box>
						{el.comp}
					</Grid>
				</Paper>
			</Reveal>
			</Grid>				
			))}
    	</Grid>
  )
}


