import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import postsData from "../data/postsData";
import { profiles } from "../data/images";

function Post() {
  return (
    <>
      {postsData.map((post, index) => (
        <Card key={index} sx={{ margin: 5 }}>
          <CardHeader
            avatar={<Avatar src={profiles[index]} aria-label="recipe" />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={post.date}
          />
          <Typography variant="caption" display="block" paddingLeft={2.5} paddingBottom={2.5}>
            {post.author}
          </Typography>
          <CardMedia
            component="img"
            height="400px"
            image={post.image}
            alt="Post Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default Post;
