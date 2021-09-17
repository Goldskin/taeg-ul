import {
  Container,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Form } from "./templates";
import { useMemo } from "react";
import AppHeader from "./templates/AppHeader/AppHeader";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Container maxWidth="sm">
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
