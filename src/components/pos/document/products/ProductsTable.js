import React from "react";

/* Material-UI Components */
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/* Custom Components */
import ProductRow from "./ProductRow";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    width: "95%",
    overflowX: "auto",
    overflowY: "auto",
    marginBottom: theme.spacing(2),
    alignSelf: "center",
    margin: "auto",
    maxHeight: "45vh"
  },
  table: {
    width: "100%"
  },
  icon: {
    padding: 10
  }
}));

const ProductsTable = ({ products }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small" padding="checkbox">
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio Unitario</TableCell>
            <TableCell align="right">Descuento</TableCell>
            <TableCell align="right">Precio Total</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((product, index) => (
              <ProductRow key={index} product={product} />
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ProductsTable;
