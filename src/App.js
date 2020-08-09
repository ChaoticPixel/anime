import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Filters from "./Components/Filters";
import Content from "./Components/Content";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Filters />
          <Content />
        </MuiThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
