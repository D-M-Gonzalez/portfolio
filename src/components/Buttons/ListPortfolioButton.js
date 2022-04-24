import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

export default function ListPortfolioButton() {
	return (
		<Link to="/portfolio" className={styles.link}>
		<Button
			size="large"
			color="inherit"
			sx={{ mr: 2, textTransform: "none", }}>
				<ListItemIcon>
					<LibraryBooksIcon></LibraryBooksIcon>
				</ListItemIcon>
			<ListItemText>Mis Trabajos</ListItemText>
		</Button>
		</Link>
	)
}