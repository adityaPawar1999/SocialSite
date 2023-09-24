import React from "react";

import { Box, ListItemButton, ListItemText } from "@mui/material";
import  HomeIcon  from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import Groups2Icon from '@mui/icons-material/Groups2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const SlideBar = () => {


    return (<> <Box
      position="sticky"
      top="0" 
      color={'#212121'}
      flex={1}
      paddingTop={9}
      paddingLeft={3}
      sx={{ display: { xs: 'none', sm: 'block'  } }}
  >
    <ListItemButton>
                    <HomeIcon/>
                <ListItemText primary="HomePage" sx={{paddingLeft:3 }} />
            </ListItemButton>

            <ListItemButton>
                    <DescriptionIcon />
                <ListItemText primary="Pages"  sx={{paddingLeft:3}} />
            </ListItemButton>

            
            <ListItemButton>
                    <Groups2Icon />
                <ListItemText primary="Groups"  sx={{paddingLeft:3}} />
            </ListItemButton>
            
            <ListItemButton>
                    <StorefrontIcon />
                <ListItemText primary="MarketPlace"  sx={{paddingLeft:3}} />
            </ListItemButton>

            <ListItemButton>
                    <GroupIcon />
                <ListItemText primary="Friends"  sx={{paddingLeft:3}} />
            </ListItemButton>
            
            <ListItemButton>
                    <SettingsIcon />
                <ListItemText primary="Settings"  sx={{paddingLeft:3}} />
            </ListItemButton>

            <ListItemButton>
                    <AssignmentIndIcon />
                <ListItemText primary="Profile"  sx={{paddingLeft:3}} />
            </ListItemButton>

            


        </Box>
    </>)
}
export default SlideBar;