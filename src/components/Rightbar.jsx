import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import avatarImage from "../assets/avatarImage.jpg";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width='300'>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={134} gap={10}>
          <ImageListItem>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
          <ImageListItem>
            <img src={avatarImage} alt="latest photos" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
