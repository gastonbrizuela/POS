import React from "react";

/* Material-UI Components */
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "30%",
    margin: theme.spacing(3, 3, 1, 3)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  icon: {
    padding: 10
  }
}));

const SearchBar = ({ placeholder, ariaLabel, icon }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ "aria-label": ariaLabel }}
      />
      <IconButton className={classes.icon} aria-label={ariaLabel}>
        {icon}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
