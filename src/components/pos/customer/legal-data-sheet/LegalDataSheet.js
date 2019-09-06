import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

const LegalDataSheet = ({
  customer: {
    transactionType,
    payTerms,
    taxRegimenType,
    documentType,
    documentNr
  }
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Legales
        </Typography>
        <Typography variant="h5" component="h2">
          {transactionType}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {payTerms}
        </Typography>
        <Typography variant="body2" component="p">
          {taxRegimenType}
        </Typography>
        <Typography variant="body2" component="p">
          {`${documentType}: ${documentNr}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LegalDataSheet;
