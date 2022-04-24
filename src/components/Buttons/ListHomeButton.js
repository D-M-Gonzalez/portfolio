import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import CottageIcon from '@mui/icons-material/Cottage';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

export default function ListHomeButton() {
	return (
		<Link to="/intro" className={styles.link}>
		<Button
			size="large"
			color="inherit"
			sx={{ mr: 2, textTransform: "none", }}>
				<ListItemIcon>
					<CottageIcon></CottageIcon>
				</ListItemIcon>
			<ListItemText>Introducción</ListItemText>
		</Button>
		</Link>
	)
}
