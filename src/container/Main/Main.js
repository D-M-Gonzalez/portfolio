import React from 'react'
import Container from '@mui/material/Container'
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import Typography from "@mui/material/Typography"

const SlideTop = keyframes`
	from {
    opacity: 0;
    transform: translate3d(0px, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Main() {
  return (
	<Container>
		<Reveal keyframes={SlideTop} duration={500} cascade="true" damping="0.5">
		<Typography ml={{lg:30,md:20,sm:15,xs:15}} mr={{lg:30,md:20,sm:15,xs:15}} fontSize={{lg:30,md:20,sm:15,xs:15}} fontStyle="italic">"Bienvenida/o a mi Portfolio, 
		diseñado para que puedas conocer un poco de mi, 
		mis habilidades y mis trabajos de manera simple y rápida."</Typography>
		<Typography ml={{lg:30,md:20,sm:15,xs:15}} mr={{lg:30,md:20,sm:15,xs:15}} mt={5} fontWeight="bold" fontSize={{lg:25,md:20,sm:15,xs:15}}>Si sos Desarrollador:</Typography>
		<Typography ml={{lg:30,md:20,sm:15,xs:15}} mr={{lg:30,md:20,sm:15,xs:15}} fontSize={{lg:20,md:15,sm:10,xs:10}} fontStyle="italic">Te invito a que lo revises, y que veas el código 
		fuente encontrado en github. 
		Sos libre de tomar las ideas que necesites, como también si quieres, darme algun consejo.</Typography>
		<Typography ml={{lg:30,md:20,sm:15,xs:15}} mr={{lg:30,md:20,sm:15,xs:15}} mt={5} fontWeight="bold" fontSize={{lg:25,md:20,sm:15,xs:15}}>Si sos Recruiter IT:</Typography>
		<Typography ml={{lg:30,md:20,sm:15,xs:15}} mr={{lg:30,md:20,sm:15,xs:15}} fontSize={{lg:20,md:15,sm:10,xs:10}} fontStyle="italic">Te invito a recorrerlo, esta diseñado para
		que no haga falta saber de programación como para valorarlo. Puedes hacer click en cada una de mis habilidades para ver una descripción extendida, como también realizar los ejemplos
		que demuestran mis habilidades en tiempo real.</Typography>
		<Typography ml={{lg:30,md:20,sm:15,xs:15}} mr={{lg:30,md:20,sm:15,xs:15}} mt={5} fontWeight="bold" fontSize={{lg:25,md:20,sm:15,xs:15}}>Si no sos ni uno ni otro:</Typography>
		<Typography ml={{lg:30,md:20,sm:15,xs:15}} mr={{lg:30,md:20,sm:15,xs:15}} fontSize={{lg:20,md:15,sm:10,xs:10}} fontStyle="italic">Te invito a visitar cada una de las secciones,
		para conocerme y conocer mis capacidades, puede que te sirva para que te realice algun trabajo como también si quieres, recomendarme en el tuyo.</Typography>
		</Reveal>
	</Container>
  )
}
