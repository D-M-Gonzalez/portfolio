import React, {useState,useEffect, useLayoutEffect} from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import TextField from '@mui/material/TextField'
import rootScript from '../../../modules/rootScript'
import Button from '@mui/material/Button'
import hacerCalculo from '../../../modules/mathScript'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lioshi } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import rootScriptString from '../../../modules/rootScriptString'
import mathScriptString from '../../../modules/mathScriptString'
import { Fade } from 'react-awesome-reveal'



export default function JSaprox() {
	const [base, setBase] = useState();
	const [exp, setExp] = useState();
	const [res, setRes] = useState();
	const [formula, setFormula] = useState("5*x-3=4-x-50");
	const [resX, setResX] = useState(0);
	const [initX, setInitX] = useState(0);

	useEffect(()=>{
		setBase(3);
		setExp(2);
	},[])

	useLayoutEffect(()=>{
		try{setRes(rootScript(base,exp))}
		catch(err){
			console.log(err)
		}
	},[base,exp]);

	const handleChange = (event) => {
		event.target.id === "base" && setBase(event.target.value);
		event.target.id === "exp" && setExp(event.target.value);
		event.target.id === "formula" && setFormula(event.target.value);
		event.target.id === "initx" && setInitX(event.target.value);
	}

	const handleClick = () => {
		setResX(hacerCalculo(formula,initX));
	}

  	return (
		<Fade>

    	<Grid container>
      		<Grid item xs={1}/>
      		<Grid item xs={10}>
				<Typography mt={2} fontSize={14}>En este ejemplo podemos ver como funciona un algoritmo básico de aproximación. Este tipo de algoritmo es interesante 
					como para demostrar proficiencia con el manejo de los mismos, porque si bien existen librerias que los contienen, crearlos es un desafío
					en el análisis y declaración del mismo.
					En este ejemplo, voy a utilizarlo para calcular la raìz "n" de un nùmero "m", por ejemplo la raiz cuadrada de 3.
				</Typography>
      		</Grid>
      		<Grid item xs={1}/>
			<Grid item xs={1}/>
			<Grid item xs={3}>
				<Box mt={2}
      				component="form"
      				sx={{
        			'& > :not(style)': { m: 1 },
      				}}
      				noValidate
      				autoComplete="off"
    				>
      				<TextField type="number" id="base" label="Base" variant="outlined" value={base} onChange={handleChange}  />
    			</Box>
			</Grid>
			<Grid item xs={0.2}/>
			<Grid item xs={3}>
				<Box mt={2}
      				component="form"
      				sx={{
        			'& > :not(style)': { m: 1 },
      				}}
      				noValidate
      				autoComplete="off"
    				>
      				<TextField type="number" id="exp" label="Exponente" variant="outlined" value={exp} onChange={handleChange}/>
    			</Box>
			</Grid>
			<Grid item xs={0.2}/>
			<Grid item xs={0.2}>
				<Typography mt={4} fontSize={25} fontWeight="bold">=</Typography>
      		</Grid>
			<Grid item xs={0.2}/>
			<Grid item xs={3}>
				<Box mt={2}
      				component="form"
      				sx={{
        			'& > :not(style)': { m: 1 },
      				}}
      				noValidate
      				autoComplete="off"
    				>
      				<TextField type="number" id="resultado" disabled label="Resultado" variant="outlined" value={res} />
    			</Box>
      		</Grid>
			<Grid item xs={1.2}/>
			<Grid item xs={1}/>
      		<Grid item xs={10}>
				<Typography mt={2} fontSize={14}>Este es un ejemplo simple, en donde el algoritmo no calcula la "raiz", sino que realiza una serie de potencias hasta que el resultado
				elevado al exponente de igual a la base, haciendo una serie de iteraciones que van acercandose cada vez mas al valor exacto pero nunca llegando a ser igual.
				Sin embargo, nosotros lo notamos como instantaneo.
				Estos algoritmos son muy útiles cuando no sabemos como resolver el problema, pero un acercamiento es posible y satisfactorio.
				Probemos ahora, por ejemplo, utilizando mi algoritmo de MathTools (Algoritmo que realiza cálculos combinados a partir de un texto), 
				averiguar una incognita en una fórmula. Algo que de tener que codificarse sería muy engorroso
				y complicado, pero veamos que rápido se resuelve por medio del algoritmo de aproximación.
				Por ejemplo, aca calculamos 5*x-3=4-x-50. Puedes probar tu mismo otros cálculos, ten en cuenta que no pueden contener paréntesis y que no están
				depurados todos los errores matemánicos, debido a que llevaría un código muy grande (ver MathTools en GitHub), por lo que se limitó a calcular
				sumas, restas, multiplicación, algunas divisiones debido a no tener depuración para asíntotas, y potencias.
				</Typography>
      		</Grid>
      		<Grid item xs={1}/>

			<Grid item xs={12}>
				<Grid container mt={2} alignItems="center">
					<Grid item md={1} xs={1}/>
					<Grid item md={2.5} xs={10}>
						<Box 
							component="form"
							sx={{
							'& > :not(style)': { m: 1 },
							}}
							noValidate
							autoComplete="off"
							>
								<TextField id="formula" label="Fórmula" variant="outlined" value={formula} onChange={handleChange}/>
						</Box>
					</Grid>
					<Grid item md xs={1}/>
					<Grid item md xs={1}/>
					<Grid item md={1.5} xs={10}>
						<Box 
							component="form"
							sx={{
							'& > :not(style)': { m: 1 },
							}}
							noValidate
							autoComplete="off"
							>
								<TextField id="initx" type="number" label="X Inicial" variant="outlined" value={initX} onChange={handleChange}/>
						</Box>
					</Grid>
					<Grid item md xs={1}/>
					<Grid item md={0.2} xs={1}/>
					<Grid item md={1.4} xs={10}>
						<Typography  fontSize={25} fontWeight="bold">=&gt; X =</Typography>
					</Grid>
					<Grid item md={0.2} xs={1}/>
					<Grid item md xs={1}/>
					<Grid item md={2} xs={10}>
						<Box 
							component="form"
							sx={{
							'& > :not(style)': { m: 1 },
							}}
							noValidate
							autoComplete="off"
							>
							<TextField id="resulx" label="Resultado" value={resX} variant="outlined"/>
						</Box>
					</Grid>
					<Grid item md xs={1}/>
					<Grid item md={0.2} xs={1}/>
					<Grid item md={1} xs={10}><Button variant='contained' color='primary' onClick={handleClick}>Calcular</Button></Grid>
					<Grid item md={1} xs={1}/>
				</Grid>
			</Grid>
			<Grid item xs={1}/>
      		<Grid item xs={10}>
			<Typography mt={2} fontSize={14}> Con este simple algoritmo logramos resolver una ecuación con una incognita que de tener que programarla nos llevaría
				mucho tiempo. También podríamos aumentar la complejidad del script de cálculo sin tener que cambiar nuestra aproximación, porque esta utiliza
				el resultado del cálculo y no le interesa lo que halla dentro.
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
						<Typography fontWeight="bold">Código de aproximación de raíces</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<SyntaxHighlighter language="javascript" style={lioshi}>
								{rootScriptString}
						</SyntaxHighlighter>
					</AccordionDetails>
				</Accordion>
			</Grid>
			<Grid item xs={12}>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{backgroundColor:"rgb(245, 245, 245)"}}
					>
						<Typography fontWeight="bold">Código de aproximación de X</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<SyntaxHighlighter language="javascript" style={lioshi}>
								{mathScriptString}
						</SyntaxHighlighter>
					</AccordionDetails>
				</Accordion>
			</Grid>
    	</Grid>
		</Fade>
  )
}
