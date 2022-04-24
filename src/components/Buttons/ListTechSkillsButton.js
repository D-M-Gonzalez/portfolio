import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

export default function ListTechSkillsButton() {
	return (
		<Link to="/techskills" className={styles.link}>
		<Button
			size="large"
			color="inherit"
			sx={{ mr: 2, textTransform: "none", }}>
				<ListItemIcon>
					<ConstructionIcon></ConstructionIcon>
				</ListItemIcon>
			<ListItemText>Tech Skills</ListItemText>
		</Button>
		</Link>
	)
}