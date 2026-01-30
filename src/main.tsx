import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2c3e50" },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
