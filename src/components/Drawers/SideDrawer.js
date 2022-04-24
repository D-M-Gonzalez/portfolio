import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListHomeButton from '../Buttons/ListHomeButton';
import ListTechSkillsButton from '../Buttons/ListTechSkillsButton';
import ListExamplesButton from '../Buttons/ListExamplesButton';
import ListPortfolioButton from '../Buttons/ListPortfolioButton';
import ListContactButton from '../Buttons/ListContactButton';
import ListSoftSkillsButton from '../Buttons/ListSoftSkillsButton';

export default function SideDrawer(){

    return (   
        <Box sx={{ width: 250}}> 
            <List>
                <ListItem >
                    <ListHomeButton></ListHomeButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListTechSkillsButton></ListTechSkillsButton>
                </ListItem>
                <ListItem>
                    <ListSoftSkillsButton></ListSoftSkillsButton>
                </ListItem>
                <ListItem>
                    <ListExamplesButton></ListExamplesButton>
                </ListItem>
                <ListItem>
                    <ListPortfolioButton></ListPortfolioButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListContactButton></ListContactButton>
                </ListItem>
            </List>
        </Box>
        )
}
