import Sidebar from "./components/project/Sidebar";
import Feed from "./components/project/Feed";
import Rightbar from "./components/project/Rightbar";
import Navbar from "./components/project/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/project/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
