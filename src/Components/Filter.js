import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Filter = (props) => {
  const { items } = props;

  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-checkbox-label">{props.title}</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => `Выбрано ${selected.length}`}
        MenuProps={MenuProps}
      >
        {items &&
          items.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              <Checkbox checked={personName.indexOf(item.id) > -1} />
              <ListItemText primary={item.russian} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
