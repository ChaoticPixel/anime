import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Paper,
  InputBase,
  IconButton,
  Container,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Container>
          <div className="main-menu">
            <div>
              <Button component="a">Главная</Button>
              <Button component="a">Каталог</Button>
              <Button component="a">Что посмотреть</Button>
              <Button component="a">Случайное аниме</Button>
            </div>
            <div className="right-menu">
              <Paper>
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <InputBase placeholder="Что ищешь, друг?" />
                <IconButton>
                  <ClearIcon />
                </IconButton>
              </Paper>
              <IconButton>
                <Brightness2Icon />
              </IconButton>
            </div>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
