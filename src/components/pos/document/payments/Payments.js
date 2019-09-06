import React from "react";

/* Material-UI Components */
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Grid,
  Button
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

/* Custom Components */
import Payment from "./Payment";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
  },
  chip: {
    margin: theme.spacing(1)
  },
  relocate: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
}));

const GreenButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    },
    margin: theme.spacing(1, 1, 1, 1),
    width: "80%"
  }
}))(Button);

const Payments = ({ payments, handleDeletePayment }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Pago{" "}
          <Chip
            label="Restante: $ 180.70"
            className={classes.chip}
            color="secondary"
            size="small"
          />
        </Typography>
        <Grid container className={classes.relocate}>
          {payments &&
            payments.map((payment, index) => (
              <Payment
                key={index}
                payment={payment}
                handleDeletePayment={handleDeletePayment}
              />
            ))}
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="center">
          <GreenButton
            size="small"
            fullWidth
            variant="contained"
            color="primary"
          >
            Validar pago
          </GreenButton>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Payments;
