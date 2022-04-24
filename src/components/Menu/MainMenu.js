import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from '../Drawers/SideDrawer';


export default function MainMenu() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      	<AppBar position="static" sx={{backgroundColor:"black",}}>
        	<Toolbar>
                <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)}>
					<MenuIcon fontSize="large" sx={{border: "solid",borderRadius:"10px",color:"white"}}>{"left"}</MenuIcon>
				</Button>
                	<Drawer
                  		anchor={"left"}
                  		open={state["left"]}
                  		onClose={toggleDrawer("left", false)}
                  		style={{zIndex:1500}}
                	>
                  		<SideDrawer/>
                	</Drawer>
              	</React.Fragment> 
          		<Typography
            		variant="h6"
            		noWrap
            		component="div"
            		fontSize={{lg:30,md:30,sm:20,xs:16}}
					ml={2}>
            		Bienvenida/o a mi Portfolio
          		</Typography>
          		<Box sx={{ flexGrow: 0.95 }} />
          		<Box component="img" sx={{ height: 50,
          		width: 50, }} src="/assets/LogoDMGBlanco.png">
          		</Box>
        	</Toolbar>
      	</AppBar>
    </Box>
  );
}