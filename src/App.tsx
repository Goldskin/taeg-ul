import {
  Container,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Form } from "./organisms";

import { useMemo } from "react";
import AppHeader from "./organisms/AppHeader/AppHeader";
import { orange } from "@mui/material/colors";
import Layout from "./templates/Layout";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: orange.A700,
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Container maxWidth="sm">
        <Layout />
      </Container>
    </ThemeProvider>
  );
}

export default App;
