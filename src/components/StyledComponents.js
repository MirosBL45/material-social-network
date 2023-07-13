import { Box, Toolbar, styled, Modal } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

export const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ModalUserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});