import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lioshi } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Fade } from 'react-awesome-reveal';
import Button from '@mui/material/Button';
import * as asyncAwait from '../../../modules/asyncScript';
import asyncScriptString from '../../../modules/asyncScriptString';

export default function JSasyncawait() {

	const initiateAnimation = async () => {
		const resultadoDiv = document.getElementById("exampleContainer");
		await asyncAwait.deleteItems(resultadoDiv);
		await asyncAwait.createItems(resultadoDiv);
		await asyncAwait.animateItems(resultadoDiv);		
	}

  	return (
		<Fade>
    	<Grid container>
      		<Grid item xs={1}/>
      		<Grid item xs={10}>
				<Typography mt={2} fontSize={14}>Para este ejemplo tengo preparada una animación en JavaScript que consiste en la aparición de elementos en forma de cascada.
        		La animación en si es simple y podría lograrse por otros métodos mas efectivos, sin embargo, es un buen ejemplo para demostrar el uso de async/await debido a que
				el script va a eliminar lo que ya hay en pantalla, para luego a los 2 segundos agregarlo de manera invisible y por ultimo ir revelando cada uno en el orden correcto.
				</Typography>
      		</Grid>
      		<Grid item xs={1}/>
			<Grid item md={5} xs={4.5}/>
			<Grid mt={2} item md={2} xs={3}>
				<Button variant="contained" onClick={initiateAnimation}>Iniciar</Button>
			</Grid>
			<Grid item md={5} xs={4.5}/>
			<Grid item xs={1}/>
			<Grid mt={2} item xs={10} id="exampleContainer">
			</Grid>
			<Grid item xs={1}/>
			<Grid item xs={1}/>
      		<Grid item xs={10}>
			<Typography mt={2} fontSize={14}>Este tipo de ejecuciones es muy común en Frontend, al tener que esperar la carga de datos desde un backend, y posteriormente esperar
			la aparición de los mismos con alguna animación en curso.
			</Typography>
			</Grid>
      <Grid item xs={1}/>	
			<Grid mt={2} item xs={12}>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{backgroundColor:"rgb(245, 245, 245)"}}
					>
						<Typography fontWeight="bold">Código de algoritmo async/await</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<SyntaxHighlighter language="javascript" style={lioshi}>
								{asyncScriptString}
						</SyntaxHighlighter>
					</AccordionDetails>
				</Accordion>
			</Grid>
    	</Grid>
		</Fade>
  )
}