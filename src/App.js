import React, { useEffect, useState } from "react";
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
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch(`https://shikimori.org/api/animes?limit=50&order=ranked`)
        .then((res) => res.json())
        .then((data) => setItems(data));
    };

    const fetchGenres = async () => {
      await fetch(`https://shikimori.org/api/genres`)
        .then((res) => res.json())
        .then((data) => setGenres(data));
    };
    fetchItems();
    fetchGenres();
  }, []);

  return (
    <div className="App">
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Filters genres={genres} />
          <Content items={items} />
        </MuiThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
