import React from "react";

/* Custom Components */
import LegalDataSheet from "./LegalDataSheet";

const LegalDataSheetContainer = ({ customer }) => {
  return <LegalDataSheet customer={customer} />;
};

export default LegalDataSheetContainer;
