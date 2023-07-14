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
import React from "react";
import { profiles } from "./images";
import { posts } from "./images";
import conversationData from "./conversationData";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box
        sx={{
          paddingRight: "20px",
          position: "sticky",
          top: "-150px",
          width: "29vw",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={100}
          textAlign="right"
          paddingRight="20px"
        >
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{ paddingRight: "20px" }}>
          {profiles.map((image, index) => (
            <Avatar src={image} key={index} alt={`Profile ${index}`} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={2} gap={12}>
          {posts.map((image, index) => (
            <ImageListItem
              sx={{ width: { md: "120px", lg: "170px", xl: "200px" } }}
            >
              <img src={image} key={index} alt="latest photos" />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {profiles.slice(0, 3).map((image, index) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={conversationData[index].name} src={image} />
                </ListItemAvatar>
                <ListItemText
                  primary={conversationData[index].primary}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {conversationData[index].name}
                      </Typography>
                      {" — "} {conversationData[index].says}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
