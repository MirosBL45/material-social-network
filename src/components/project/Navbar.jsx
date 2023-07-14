import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import React, { useState } from "react";
import avatarImage from "../../assets/avatarImage.jpg";
import { UserBox, Icons, Search, StyledToolbar } from "../data/StyledComponents";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MICKEY DEV
        </Typography>
        <ImportantDevicesIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src={avatarImage}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src={avatarImage} />
          <Typography variant="span">Mickey</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
