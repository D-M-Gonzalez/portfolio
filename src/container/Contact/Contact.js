import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import React from 'react'
import Reveal from 'react-awesome-reveal'
import Link from '@mui/material/Link'
import { keyframes } from "@emotion/react";
import { SocialIcon } from 'react-social-icons';


const Fade = keyframes`
	from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default function Contact() {
  	return (
    	<Grid container justifyContent="center">
			<Grid item xs={2}/>
			<Grid item xs={8}>
				<Grid container justifyContent="center">
					<Reveal keyframes={Fade} duration={800}>
      				<Typography fontSize={40} fontWeight="bolder" paragraph={true}>Formas de contacto</Typography>
					</Reveal>
				</Grid>
				<Grid container justifyContent="center">
					<Reveal keyframes={Fade} duration={800}>
						<Typography fontSize={20} fontStyle="italic" paragraph={true} mb={5}>"Gracias por haber realizado el recorrido, 
							espero halla sido de tu agrado. Si deseas, tienes aquí
          					todos los links necesarios para poder contactarme"
						</Typography>
					</Reveal>
				</Grid>
			</Grid>
			<Grid item xs={2}/>
			<Grid item md={4} xs={2}/>
			<Grid item xs={1}>
				<SocialIcon url="https://www.linkedin.com/in/damimgonza/"/>
			</Grid>
			<Grid item md={3} xs={8}>
				<Link href="https://www.linkedin.com/in/damimgonza/"><Typography ml={{md:0,xs:5}} fontSize={{xl:30,lg:30,md:20,sm:20,xs:16}} fontWeight="bolder" paragraph>Mi perfil de linkedin</Typography></Link>
			</Grid>
			<Grid item md={4} xs={1}/>
			<Grid item md={4} xs={2}/>
			<Grid item xs={1}>
				<SocialIcon url="https://mail.google.com/"/>
			</Grid>
			<Grid item md={3} xs={8}>
				<Link href="https://mail.google.com/"><Typography ml={{md:0,xs:5}} fontSize={{xl:30,lg:30,md:20,sm:20,xs:16}} fontWeight="bolder" paragraph>dami.m.gonza@gmail.com</Typography></Link>
			</Grid>
			<Grid item md={4} xs={1}/>
			<Grid item md={4} xs={2}/>
			<Grid item xs={1}>
				<SocialIcon url="https://github.com/D-M-Gonzalez"/>
			</Grid>
			<Grid item md={3} xs={8}>
				<Link href="https://github.com/D-M-Gonzalez"><Typography ml={{md:0,xs:5}} fontSize={{xl:30,lg:30,md:20,sm:20,xs:16}} fontWeight="bolder" paragraph>Mi GitHub</Typography></Link>
			</Grid>
			<Grid item md={4} xs={1}/>
    	</Grid>
  )
}