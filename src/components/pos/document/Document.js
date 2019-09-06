import React from "react";

/* Material-UI Components */
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";

/* Custom Components */
import CustomerDataSheet from "../customer/data-sheet/DataSheetContainer";
import CustomerSearchBar from "../customer/search-bar/SearchBarContainer";
import CustomerLegalDataSheet from "../customer/legal-data-sheet/LegalDataSheetContainer";
import DocumentActions from "./actions/DocumentActionsContainer";
import ProductList from "./products/ProductsListContainer";
import Banner from "./banner/BannerContainer";
import PayFormsButtons from "./pay-forms/PayFormsContainer";
import Payments from "./payments/PaymentsContainer";
import DocumentResults from "./results/ResultsContainer";

import logo from "../../../assets/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex"
  },
  logo: {
    maxHeight: "10vh",
    width: "auto",
    margin: theme.spacing(1, 1, 1, 1)
  }
}));

const Document = ({ customer, products, payForms, payments }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      component="main"
      alignItems="center"
      className={classes.root}
    >
      <CssBaseline />
      <Grid item xs={12} sm={2} md={2}>
        <Grid container justify="center">
          <img src={logo} alt={logo} className={classes.logo} />
        </Grid>
        <CustomerSearchBar />
        <CustomerDataSheet customer={customer} />
        <CustomerLegalDataSheet customer={customer} />
        <DocumentActions />
      </Grid>
      <Grid item xs={12} sm={7} md={7}>
        <ProductList products={products} />
        <Banner />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <PayFormsButtons payForms={payForms} />
        <Payments payments={payments} />
        <DocumentResults
          subTotal={1422.31}
          iva={298.69}
          piva={180.7}
          total={1901.7}
        />
      </Grid>
    </Grid>
  );
};

export default Document;
