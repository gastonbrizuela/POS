import React from "react";

/* Material-UI Components */
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/* Custom Components */
import PayForm from "./PayForm";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
  }
}));

const PayForms = ({ payForms }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Métodos de pago
        </Typography>
        <Grid container>
          {payForms.map((payForm, index) => (
            <PayForm key={index} payForm={payForm} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PayForms;
