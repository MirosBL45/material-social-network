import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import avatarImage from "../assets/avatarImage.jpg";
import React from "react";
import { profiles } from "./images";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" }}}>
      <Box sx={{paddingRight: '20px', position:'sticky', top: '50px', width: '29vw'}}>
        <Typography variant="h6" fontWeight={100} textAlign='right' paddingRight='20px'>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{paddingRight: '20px'}}>
          {profiles.map((image, index)=>(
            <Avatar src={image} key={index} alt={`Profile ${index}`}/>
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={2} rowHeight={200} gap={12}>
          <ImageListItem sx={{ width: { md: "120px", lg: '170px', xl:'200px' }}}>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem sx={{ width: { md: "120px", lg: '170px', xl:'200px' }}}>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem sx={{ width: { md: "120px", lg: '170px', xl:'200px' }}}>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
