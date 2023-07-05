import { Button, Typography, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "green",
      color: "red",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        color="secondary"
        variant="contained"
      >
        Contained
      </Button>
      <Button startIcon={<AddIcon />} color="success" variant="contained">
        Uspesno
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        koristi h1 stil ali je p tag
      </Typography>
      <BlueButton>Prvo dugme</BlueButton>
      <BlueButton>Drugo</BlueButton>
    </div>
  );
}

export default App;
