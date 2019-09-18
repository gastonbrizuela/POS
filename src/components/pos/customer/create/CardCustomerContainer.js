import React from "react";

/* Custom Components */
import CardCustomerContainer from "./CardCustomer";

const CardCustomer = ({customer, isFinishForm, handleSubmit, loading, success,successError})=> {
  return <CardCustomer customer = {customer} isFinishForm={isFinishForm} handleSubmit={handleSubmit} loading= {loading} success = {success} successError={successError}/>;
};

export default CardCustomerContainer;