import React from "react";

/* Custom Components */
import Payments from "./Payments";

const PaymentsContainer = ({ payments }) => {
  const handleDeletePayment = payment => {
    alert(
      `Eliminando pago: ${payment.payForm} ${payment.currency} ${payment.amount}`
    );
  };
  return (
    <Payments payments={payments} handleDeletePayment={handleDeletePayment} />
  );
};

export default PaymentsContainer;
