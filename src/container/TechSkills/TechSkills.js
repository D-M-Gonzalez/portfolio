import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import JavasScriptAccordion from '../../components/Accordions/JavasScriptAccordion';
import ReactAccordion from '../../components/Accordions/ReactAccordion';
import ExpressAccordion from '../../components/Accordions/ExpressAccordion';
import MongoDBAccordion from '../../components/Accordions/MongoDBAccordion';
import HTML5Accordion from '../../components/Accordions/HTML5Accordion';
import CSS3Accordion from '../../components/Accordions/CSS3Accordion';
import GitAccordion from '../../components/Accordions/GitAccordion';
import PhotoshopAccordion from '../../components/Accordions/PhotoshopAccordion';

const Fade = keyframes`
	from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const techSkills = [{
	comp: <JavasScriptAccordion/>,
	key: "javascript",
},{
	comp: <ReactAccordion/>,
	key: "react",
},{
	comp: <ExpressAccordion/>,
	key: "express",
},{
	comp: <MongoDBAccordion/>,
	key: "mongodb",
},{
	comp: <HTML5Accordion/>,
	key: "html5",
},{
	comp: <CSS3Accordion/>,
	key: "css3",
},{
	comp: <GitAccordion/>,
	key: "git",
},{
	comp: <PhotoshopAccordion/>,
	key: "photoshop",
},]

export default function TechSkills() {
  	return (
	<Grid container spacing={2} direction="row" justifyContent="center">
		<Grid item xs={12}>
			<Grid container justifyContent="center" alignItems="center">
				<Typography fontSize={40} fontWeight="bolder">Habilidades Técnicas</Typography>
			</Grid>
		</Grid>
		<Grid item xs={12}>
			<Grid container justifyContent="center" alignItems="center">
				<Typography mb={5} fontSize={20} fontStyle="italic">"Descripción de mis habilidades técnicas, haz click en cada una para ver su detalle"</Typography>
			</Grid>
		</Grid>
		{Array.from(techSkills).map((el)=>(
			<Grid item md={6} sm={8} key={el.key}>
				<Reveal keyframes={Fade} duration={800}>
					{el.comp}
				</Reveal>
			</Grid>			
		))}
	</Grid>
  )
}
