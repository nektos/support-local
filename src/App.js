import React from 'react';
import './App.css';

import VendorList from "./VendorList";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import {
  CssBaseline,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h3" align="center">#WeSupportFolsom</Typography>
      <VendorList />
    </ThemeProvider>
  );
}

export default App;
