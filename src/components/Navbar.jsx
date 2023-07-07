import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled('div')(({theme})=>({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({theme})=>({
  backgroundColor: 'white',
}));

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs: 'none', sm: 'block'}}}>MICKEY DEV</Typography>
        <ImportantDevicesIcon sx={{display: {xs: 'block', sm: 'none'}}} />
        <Search>Search</Search>
        <Icons>Icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
