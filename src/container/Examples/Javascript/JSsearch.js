import React, {useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lioshi } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CardContent from '@mui/material/CardContent';
import { Fade } from 'react-awesome-reveal';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import SearchIcon from '@mui/icons-material/Search';
import frutaSearch from '../../../modules/searchScript';
import searchScriptString from '../../../modules/searchScriptString';

export default function JSsearch() {
	const [searchString, setSearchString] = useState();
	const [resul, setResul] = useState("");

	const handleChange = (event) => {
		event.target.id === "search" && setSearchString(event.target.value);
	}

	useEffect(()=>{
		setResul(frutaSearch(searchString));
	},[searchString])

  	return (
		<Fade>
    	<Grid container>
      		<Grid item xs={1}/>
      		<Grid item xs={10}>
				<Typography mt={2} fontSize={14}>En este ejemplo vamos a ver como funciona un algoritmo de búsqueda. La idea de estos algoritmos es que el usuario encuentre
				el resultado esperado, aún con una búsqueda incompleta o con errores no intencionales. Para esto, el algoritmo utiliza un sistema de puntajes en donde
				se ordenan los resultados en base a cúal fue el que mejores coincidencias tuvo.
				</Typography>
      		</Grid>
      		<Grid item xs={1}/>
			<Grid item xs={1}/>
			<Grid item xs={4.5}>
				<Box mt={2}
      				component="form"
      				sx={{
        			'& > :not(style)': { m: 1 },
      				}}
      				noValidate
      				autoComplete="off"
    				>
      				<TextField id="search" label="Search" variant="outlined" value={searchString} onChange={handleChange} sx={{width:'100%'}} InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon></SearchIcon></InputAdornment>,
          }}  />
    			</Box>
			</Grid>
			<Grid item xs={1.0}/>
			<Grid item xs={4.5} mt={2}>
				<Card variant="outlined" sx={{height:"150px",overflow:"scroll"}}>
					<CardContent>
		  				{Array.from(resul).map((el,pos)=>{
							  return (
								<Typography key={pos}>{el.name}</Typography>
							  )
						  })}
					</CardContent>
				</Card>
      		</Grid>
			<Grid item xs={1}/>
			<Grid item xs={1}/>
      		<Grid item xs={10}>
			<Typography mt={2} fontSize={14}> Como se puede observar, aún escribiendo con faltas de ortografía y errores el algoritmo predice cúal fúe la intención del usuario.
			Si bien JavaScript no es el lenguaje ideal para este tipo de algoritmos, se pueden lograr cosas interesantes con el mismo.
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
						<Typography fontWeight="bold">Código de algoritmo de búsqueda</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<SyntaxHighlighter language="javascript" style={lioshi}>
								{searchScriptString}
						</SyntaxHighlighter>
					</AccordionDetails>
				</Accordion>
			</Grid>
    	</Grid>
		</Fade>
  )
}