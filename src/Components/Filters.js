import React, { useState, useEffect } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import Filter from "./Filter";
import AnimeService from "../Services/anime-service";

const Filters = (props) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const aniApi = new AnimeService();

  useEffect(() => {
    aniApi.getAllGenres().then((genres) => {
      setGenres(genres);
      setLoading(false);
      console.log("Список жанров загружен");
    });
  }, []);

  // const [visible, setVisible] = useState(false);

  const useStyles = makeStyles({
    filterButtons: {
      color: "#1976d2",
    },
  });

  const classes = useStyles();
  return (
    <section className="filters-main">
      <Typography variant="h4">Каталог аниме</Typography>
      <div>
        <div>
          {!loading && <Filter title="Жанры" items={genres} />}
          {/* <Filter title="Категории" /> */}
        </div>
        {/* {visible && (
          <div className="hidden-menu">
            <Filter title="Статус" />
            <Filter title="Ограничения" />
            <Typography variant="subtitle2">Исключить:</Typography>
            <Filter title="Жанры" />
            <Filter title="Категории" />
          </div>
        )} */}
      </div>

      {/* {!visible && (
        <Button
          className={classes.filterButtons}
          onClick={() => setVisible(true)}
        >
          Больше фильтров
        </Button>
      )}
      {visible && (
        <Button
          className={classes.filterButtons}
          onClick={() => setVisible(false)}
        >
          Скрыть фильтры
        </Button>
      )}
      <Button className={classes.filterButtons}>Сбросить</Button> */}
    </section>
  );
};

export default Filters;
