import React from "react";

/* Material-UI Components */
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
  },
  blockButtons: {
    display: "block"
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const Actions = ({
  handleCreditNote,
  handleClearenceCreditNote,
  handleCashClosing
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Acciones
        </Typography>
      </CardContent>
      <CardActions className={classes.blockButtons}>
        <Grid container direction="column">
          <Button
            size="small"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClearenceCreditNote}
          >
            Liquidar empresaria
          </Button>
          <Button
            size="small"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleCreditNote}
          >
            Nota de crédito
          </Button>
          <Button
            size="small"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleCashClosing}
          >
            Cierre de caja
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Actions;
