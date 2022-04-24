import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DevIcon from "devicon-react-svg";

const devIconStyle = {
	width:"40px",
	height:"auto",
}

export default function HTMLCSSMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = el => () => {
    props.state(el)
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DevIcon style={devIconStyle} icon="css3"/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose("")}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose("JSaprox")}>Animaciones</MenuItem>
        <MenuItem onClick={handleClose("JSsearch")}>Selección Anidada</MenuItem>
        <MenuItem onClick={handleClose("JSobject")}>Responsividad</MenuItem>
      </Menu>
    </div>
  );
}