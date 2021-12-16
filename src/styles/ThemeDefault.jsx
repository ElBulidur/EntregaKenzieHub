import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    colorPrimary: { bg: "#403CAA", color: "#fff" },
    colorSecondary: { bg: "#11995E", color: "#fff" },
    colorGrey0: { bg: "#f5f5f5", color: "#000" },
    colorGrey50: { bg: "#999999", color: "#000" },
    colorGrey100: { bg: "#333333", color: "#fff" },
    btnBlue: { main: "#403CAA", contrastText: "#fff" },
    btnGreen: { main: "#11995E", contrastText: "#fff" },
    btnWhite: { main: "#fff", contrastText: "#403CAA" },
    btnGrey: { main: "#f5f5f5" },
    grey0: { main: "#f5f5f5" },
    grey50: { main: "#999999" },
    grey100: { main: "#333333" },
  },

  typografy: {
    h1: {
      fontFamily: " 'Inter', sans-serif;",
      fontWeight: "bold",
      fontSize: "150px",
    },
    h2: {
      fontFamily: " 'Inter', sans-serif;",
      fontWeight: "bold",
      fontSize: "28px",
    },
    h3: {
      fontFamily: " 'Inter', sans-serif;",
      fontWeight: "bold",
      fontSize: "22px",
    },
    h4: {
      fontFamily: " 'Inter', sans-serif;",
      fontWeight: "bold",
      fontSize: "16px",
    },
  },
});
