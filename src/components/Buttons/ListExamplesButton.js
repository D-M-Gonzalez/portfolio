import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';

export default function ListExamplesButton() {
	return (
		<Link to="/examples" className={styles.link}>
		<Button
			size="large"
			color="inherit"
			sx={{ mr: 2, textTransform: "none", }}>
				<ListItemIcon>
					<DriveFolderUploadIcon></DriveFolderUploadIcon>
				</ListItemIcon>
			<ListItemText>Ejemplos</ListItemText>
		</Button>
		</Link>
	)
}