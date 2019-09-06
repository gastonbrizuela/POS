import React from "react";
import DocumentActions from "./DocumentActions";

const DocumentActionsContainer = () => {
  const handleCreditNote = () => {
    alert("Nota de Crédito");
  };
  const handleClearenceCreditNote = () => {
    alert("Nota de Crédito de Liquidación");
  };
  const handleCashClosing = () => {
    alert("Cierre de Caja");
  };

  return (
    <DocumentActions
      handleCreditNote={handleCreditNote}
      handleClearenceCreditNote={handleClearenceCreditNote}
      handleCashClosing={handleCashClosing}
    />
  );
};

export default DocumentActionsContainer;
