import React from "react";

/* Material-UI Components */
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";

/* Custom Components */
import SearchBar from "./SearchBar";
import TableProducts from "./ProductsTable";

const useStyles = makeStyles(theme => ({
  card: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    minHeight: "65vh"
  }
}));

const ProductsList = ({ products }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Detalle del pedido
        </Typography>
        <Grid container direction="row" justify="space-between">
          <SearchBar
            placeholder="Ingresá un producto"
            ariaLabel="search item"
            icon={<Search />}
          />
          <SearchBar
            placeholder="Consultá un precio"
            ariaLabel="search price"
            icon={<Search />}
          />
        </Grid>
        <TableProducts products={products} />
      </CardContent>
    </Card>
  );
};

export default ProductsList;
