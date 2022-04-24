import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import React, {useState} from 'react';
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import Paper from '@mui/material/Paper';
import JSaprox from './Javascript/JSaprox';
import JSsearch from './Javascript/JSsearch';
import JSMenu from '../../components/Menu/JSMenu';
import ExpressMenu from '../../components/Menu/ExpressMenu';
import ReactMenu from '../../components/Menu/ReactMenu';
import HTMLCSSMenu from '../../components/Menu/HTMLCSSMenu';
import JSasyncawait from './Javascript/JSasyncawait';

const Fade = keyframes`
	from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ExamplesArray = [{
	comp: <JSaprox/>,
	key: "JSaprox"
},{
	comp: <JSasyncawait/>,
	key: "JSasyncawait"
},{
	comp: <JSsearch/>,
	key: "JSsearch"
},]

//{value && Array.from(ExamplesArray).find(findKey,value).comp}

export default function Examples() {

	const [example, setExample] = useState();

	function findKey(el){
		return this === el.key;
	}

  	return (
    	<Grid container>
			<Grid item xs={2}/>
			<Grid item xs={8}>
				<Grid container justifyContent="center">
					<Reveal keyframes={Fade} duration={800}>
      				<Typography fontSize={40} fontWeight="bolder" paragraph>Ejemplos Prácticos</Typography>
					</Reveal>
				</Grid>
				<Grid container justifyContent="center">
					<Reveal keyframes={Fade} duration={800}>
					<Typography fontSize={20} fontStyle="italic" paragraph>"Elegí varios ejemplos para poder demostrar de manera práctica y efectiva mis conocimientos.
					Puedes verlos clickeando en el logo correspondiente, y luego en el ejemplo particular para ese lenguaje."</Typography>
					</Reveal>
				</Grid>
			</Grid>
			<Grid item xs={2}/>
			<Grid item xs={2}/>
			<Grid item xs={8}>
			<Paper>
				<Grid container>
					<Grid item xs/>
					<Grid item md={1} xs={2}><JSMenu state={setExample}/></Grid>
					<Grid item xs/>
					<Grid item md={1} xs={2}><ReactMenu state={setExample}/></Grid>
					<Grid item xs/>
					<Grid item md={1} xs={2}><ExpressMenu state={setExample}/></Grid>
					<Grid item xs/>
					<Grid item md={1} xs={2}><HTMLCSSMenu state={setExample}/></Grid>
					<Grid item xs/>		
				</Grid>
			</Paper>
			</Grid>
			<Grid item xs={2}/>
			<Grid container mt={2}>
			<Grid item xs={1}/>
			<Grid item xs={10}>
				<Paper>
					{example && Array.from(ExamplesArray).find(findKey,example).comp}
				</Paper>
			</Grid>
			<Grid item xs={1}/>
			</Grid>
    	</Grid>
  )
}


