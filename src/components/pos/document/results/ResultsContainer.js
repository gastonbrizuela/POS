import React from "react";

/* Custom Components */
import Results from "./Results";

const ResultsContainer = ({ subTotal, iva, piva, total }) => {
  return <Results subTotal={subTotal} iva={iva} piva={piva} total={total} />;
};

export default ResultsContainer;
