import React from "react";

/* Material-UI Components */
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  justify: {
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(1, 1, 1, 1),
    width: "80%"
  }
}));

const PayForm = ({ payForm: { name } }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.justify}>
      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        {name}
      </Button>
    </Grid>
  );
};

export default PayForm;
