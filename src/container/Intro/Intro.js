import React from 'react'
import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Reveal from 'react-awesome-reveal'
import { Fade } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import Typography from "@mui/material/Typography"

const SlideLeft = keyframes`
	from {
    opacity: 0;
    transform: translate3d(-200px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Intro() {
	return (
			<Grid container spacing={2} direction="row-reverse">
					<Grid item xs={10} lg={6} mt={6} >
						<Fade duration={600} delay={600} direction="right">
						<Box component="img" sx={{ height: "auto",
          				width: "95%",marginLeft:"5%" }} src="/assets/PersonalPhoto.png">
          				</Box>
						</Fade>
					</Grid>
					<Grid item xs={12} lg={5}>
						<Reveal keyframes={SlideLeft} duration={600}>
							<Typography mr={{lg:5,xs:0}} ml={{lg:0,xs:5}}  mt={{lg:50,md:0,sm:-10}} fontSize={{xl:50,lg:40,md:40,sm:40,xs:30}} fontWeight="bolder">Hola!,</Typography>
						</Reveal>
						<Reveal keyframes={SlideLeft} duration={600} delay={300}>
						<Typography mr={{lg:5,xs:0}}  ml={{lg:0,xs:5}}  fontSize={{xl:50,lg:40,md:40,sm:40,xs:30}} fontWeight="bolder">Soy Damian,</Typography>
							</Reveal>
						<Reveal keyframes={SlideLeft} duration={600} delay={900}>
						<Typography  mr={{lg:5,xs:0}} ml={{lg:0,xs:5}} fontSize={{xl:50,lg:40,md:40,sm:40,xs:30}} fontWeight="bolder">Full-stack Developer.</Typography>
							</Reveal>
					</Grid>
			</Grid>
	)
}

