import React from "react";

/* Material-UI Components */
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}));

const Payment = ({ payment, handleDeletePayment }) => {
  const classes = useStyles();
  return (
    <Chip
      label={`${payment.payForm} (${payment.currency}): ${payment.amount}`}
      onDelete={() => handleDeletePayment(payment)}
      className={classes.chip}
      color="primary"
    />
  );
};

export default Payment;
