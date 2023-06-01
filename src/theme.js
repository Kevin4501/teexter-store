import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Josefin Slab"
  },
  palette: {
    primary: {
      light: "#45c09f",
      main: "#00a278",
      dark: "#00845c",
      contrastText: "#fff",
      
    },
    secondary:{
        main: '#11cb5f',
    }
  },
});

export default theme;