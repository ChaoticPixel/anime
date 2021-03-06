import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Container,
  GridList,
  GridListTile,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import AnimeService from "../Services/anime-service";

const useStyles = makeStyles((theme) => ({
  itemLink: {
    color: theme.palette.secondary.main,
  },
  itemScore: {
    color: "white",
    height: "36px",
    display: "flex",
    zIndex: "1",
    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    fontWeight: "600",
    justifyContent: "center",
    left: "0",
    width: "36px",
    bottom: "0",
    fontSize: "18px",
    background: "rgba(255, 152, 0, .7)",
  },
  itemTitle: {
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "17px",
  },
}));

const BASE_URL = "https://shikimori.one";

const Content = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const aniApi = new AnimeService();

  const selected = document.getElementById;
  const classes = useStyles();
  const [sort, setSorts] = useState("popularity");

  console.log(sort);

  const handleChange = (event) => {
    setSorts(event.target.value);
  };
  useEffect(() => {
    aniApi.getAllAnimes(sort).then((animes) => {
      setItems(animes);
      setLoading(false);
      console.log("Список аниме загружен");
    });
  }, [sort]);

  return (
    <section>
      <Container>
        <div className="content-section">
          <div className="gallery">
            <div>
              <select name="sortBy" id="sortBy" onChange={handleChange}>
                <option value="popularity">По популярности</option>
                <option value="ranked ">По оценкам</option>
                <option value="aired_on">По дате выхода</option>
              </select>
              {/* <IconButton>
                <ImportExportIcon />
              </IconButton> */}
            </div>
            <div>
              <IconButton>
                <ViewHeadlineIcon />
              </IconButton>
              <IconButton>
                <ViewComfyIcon />
              </IconButton>
            </div>
          </div>
          <div>
            {loading && <CircularProgress color="secondary" />}
            {!loading && (
              <GridList cols={6} cellHeight={300} spacing={12}>
                {items.map((item) => (
                  <GridListTile key={item.id}>
                    <a
                      href={`${BASE_URL}${item.url}`}
                      className={classes.itemLink}
                    >
                      <div
                        className="item-tile"
                        style={{
                          backgroundImage: `url(${BASE_URL}${item.image.original})`,
                        }}
                      >
                        <Typography component="p" className={classes.itemScore}>
                          {Number(item.score).toFixed(1)}
                        </Typography>
                      </div>
                      <Typography variant="h4" className={classes.itemTitle}>
                        {item.russian}
                      </Typography>
                    </a>
                  </GridListTile>
                ))}
              </GridList>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Content;
