import React from "react";

/* Material-UI Components */
import {
  TableRow,
  TableCell,
  Tooltip,
  Zoom,
  IconButton
} from "@material-ui/core";
import { RemoveCircle, AddCircle, Clear } from "@material-ui/icons";

const ProductRow = ({ product: { code, name, quantity, price, discount } }) => {
  return (
    <TableRow hover>
      <TableCell>{code}</TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{quantity}</TableCell>
      <TableCell align="right">
        <Tooltip
          TransitionComponent={Zoom}
          title="Si el cliente se activa, el precio real será de $ 120.00"
        >
          <p>{price}</p>
        </Tooltip>
      </TableCell>
      <TableCell align="right">{discount}</TableCell>
      <TableCell align="right">{quantity * price}</TableCell>
      <TableCell align="center">
        <IconButton color="secondary" aria-label="directions">
          <RemoveCircle />
        </IconButton>
        <IconButton color="primary" aria-label="directions">
          <AddCircle />
        </IconButton>
        <IconButton aria-label="directions">
          <Clear />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
