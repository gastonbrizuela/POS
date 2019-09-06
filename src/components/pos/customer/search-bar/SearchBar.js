import React from "react";

/* Material-UI Components */
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Divider } from "@material-ui/core";
import { Search, GridOn } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "95%",
    margin: theme.spacing(1, 1, 1, 1)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  icon: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Ingrese el Nombre o DNI"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton className={classes.icon} aria-label="search">
        <Search />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.icon}
        aria-label="directions"
      >
        <GridOn />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
