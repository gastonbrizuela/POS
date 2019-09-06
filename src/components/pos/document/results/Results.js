import React from "react";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
  },
  pos: {
    marginBottom: 12
  },
  table: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const Results = ({ subTotal, iva, piva, total }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Resumen
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Totales de la venta
        </Typography>
        <Table className={classes.table} size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <b>Sub-total</b>
              </TableCell>
              <TableCell>{`$ ${subTotal}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>I.V.A.</b>
              </TableCell>
              <TableCell>{`$ ${iva}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>P.I.V.A.</b>
              </TableCell>
              <TableCell>{`$ ${piva}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Total</b>
              </TableCell>
              <TableCell>{`$ ${total}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Presupuesto
        </Button>
        <Button
          size="small"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Finalizar
        </Button>
        <Button
          size="small"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Results;
