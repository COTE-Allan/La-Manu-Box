import "../styles/App.scss";
import MainMenu from "../components/MainMenu";
import Calculator from "../components/Calculator";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#ea80fc",
    },
  },
});

function MainPage() {
  return (
    <>
      <MainMenu />
      <Calculator />
    </>
  );
}

export default MainPage;
