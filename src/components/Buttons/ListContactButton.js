import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

export default function ListContactButton() {
	return (
		<Link to="/contact" className={styles.link}>
		<Button
			size="large"
			color="inherit"
			sx={{ mr: 2, textTransform: "none", }}>
				<ListItemIcon>
					<ContactsIcon></ContactsIcon>
				</ListItemIcon>
			<ListItemText>Contacto</ListItemText>
		</Button>
		</Link>
	)
}