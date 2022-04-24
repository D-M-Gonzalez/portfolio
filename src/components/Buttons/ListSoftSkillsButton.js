import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

export default function ListSoftSkillsButton() {
	return (
		<Link to="/softskills" className={styles.link}>
		<Button
			size="large"
			color="inherit"
			sx={{ mr: 2, textTransform: "none", }}>
				<ListItemIcon>
					<PersonIcon></PersonIcon>
				</ListItemIcon>
			<ListItemText>Soft Skills</ListItemText>
		</Button>
		</Link>
	)
}