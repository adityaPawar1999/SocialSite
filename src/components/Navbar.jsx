import { Interests } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, styled, InputBase, Button, Menu, MenuItem } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import Avatar from '@mui/material/Avatar';
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchBar = styled("div")({
  background: 'white',
  width: '35%',
  borderRadius: '10px',
  paddingLeft: '20px'
});
const Icons = styled("div")({
  display: 'flex',
  gap: '10px'
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="sticky" sx={{height:60}}>
        <StyledToolbar>
          <Typography variant="h6" padding={1} sx={{ display: { xs: 'block', sm: 'block' } }}>
            <Interests />SocialHub
          </Typography>
          <SearchBar ><InputBase placeholder="Search..." /></SearchBar>


          <div>
            <Button  sx={{ display: { xs: 'block', sm: 'none' } }}
              variant="text"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Avatar
              src="{process.env.PUBLIC_URL + '/images/adityaPawar.jpg'}"
              sx={{ height: 25, width: 25 }}
            />Aditya
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>


          <Icons sx={{paddingTop:2}}>
            <MarkEmailUnreadIcon sx={{ marginTop:1 , display: { xs: 'none', sm: 'block' } }} />
            <NotificationAddIcon sx={{ marginTop:1, display: { xs: 'none', sm: 'block' } }} />
            <Button  sx={{ display: { xs: 'none', sm: 'block' } }}
              variant="text"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Avatar
              src="/broken-image.jpg"
              sx={{ height: 25, width: 25 }}
            />Aditya
            </Button>
          </Icons>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
