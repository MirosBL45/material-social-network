import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { StyledModal, ModalUserBox } from "../data/StyledComponents";
import avatarImage from '../../assets/avatarImage.jpg'

function Add() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add what is on your mind"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={290}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <ModalUserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Mickey Dev"
              src={avatarImage}
            />
            <Typography variant="span" fontWeight={500}>
              Mickey Dev
            </Typography>
          </ModalUserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={1}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="secondary" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
}

export default Add;
