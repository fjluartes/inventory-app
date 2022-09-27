import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#90c8ac",
    },
    secondary: {
      main: "#73a9ad",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
