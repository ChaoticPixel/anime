import React, { useState } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import Filter from "./Filter";

const useStyles = makeStyles({
  filterButtons: {
    color: "#1976d2",
  },
});

const Filters = (props) => {
  const { genres } = props;
  const classes = useStyles();
  const [visible, setVisible] = useState(false);


  return (
    <section className="filters-main">
      <Typography variant="h4">Каталог аниме</Typography>
      <div>
        <div>
          <Filter title="Жанры" items={genres} />
          <Filter title="Категории" />
        </div>
        {visible && (
          <div className="hidden-menu">
            <Filter title="Статус" />
            <Filter title="Ограничения" />
            <Typography variant="subtitle2">Исключить:</Typography>
            <Filter title="Жанры" />
            <Filter title="Категории" />
          </div>
        )}
      </div>

      {!visible && (
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
      <Button className={classes.filterButtons}>Сбросить</Button>
    </section>
  );
};

export default Filters;
