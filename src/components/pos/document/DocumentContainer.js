import React, { useState, useEffect } from "react";

// Custom Components
import Document from "./Document";

const createDataCustomer = (
  name,
  type,
  status,
  branch,
  address,
  email,
  phone,
  keep,
  debt,
  spent,
  transactionType,
  payTerms,
  taxRegimenType,
  documentType,
  documentNr
) => {
  return {
    name,
    type,
    status,
    branch,
    address,
    email,
    phone,
    keep,
    debt,
    spent,
    transactionType,
    payTerms,
    taxRegimenType,
    documentType,
    documentNr
  };
};
const createProduct = (code, name, quantity, price, discount) => {
  return { code, name, quantity, price, discount };
};

const createPayForm = name => {
  return { name };
};

const createPayment = (payForm, currency, amount) => {
  return {
    payForm,
    currency,
    amount
  };
};

const DocumentContainer = () => {
  const [customer, setCustomer] = useState({});
  const [products, setProducts] = useState([]);
  const [payForms, setPayForms] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const getCustomer = async () => {
      const _customer = createDataCustomer(
        "Rodrigo Nicolás Mungo",
        "Revendedor",
        "Activo",
        "San Martín",
        "Rosario 3713, San Andrés",
        "rodrigomungo@gmail.com",
        "011 15-6806-5208",
        true,
        56.7,
        651.5,
        "Factura B",
        "Efectivo",
        "Consumidor Final",
        "D.N.I.",
        "38.830.126"
      );
      setCustomer(_customer);
    };
    const getProducts = async () => {
      const _products = [
        createProduct("01060161", "Loc. 161 x 60 ml.", 2, 160, 24),
        createProduct("01060160", "Loc. 160 x 60 ml.", 3, 160, 37),
        createProduct("01030129", "Loc. 129 x 30 ml.", 4, 87, 24),
        createProduct("01100100", "Loc. 161 x 100 ml.", 2, 243, 67),
        createProduct("01030150", "Loc. 150 x 30 ml.", 1, 87, 49),
        createProduct("01030150", "Loc. 150 x 30 ml.", 1, 87, 49),
        createProduct("01030150", "Loc. 150 x 30 ml.", 1, 87, 49),
        createProduct("01030150", "Loc. 150 x 30 ml.", 1, 87, 49),
        createProduct("01030150", "Loc. 150 x 30 ml.", 1, 87, 49),
        createProduct("01030150", "Loc. 150 x 30 ml.", 1, 87, 49)
      ];
      setProducts(_products);
    };
    const getPayForms = async () => {
      const _payForms = [
        createPayForm("Efectivo ($)"),
        createPayForm("Efectivo (U$D)"),
        createPayForm("Visa"),
        createPayForm("Visa Electrón"),
        createPayForm("Maestro"),
        createPayForm("Mastercard"),
        createPayForm("Cabal"),
        createPayForm("Argencard"),
        createPayForm("Todo Pago"),
        createPayForm("Mercado Pago"),
        createPayForm("Cuenta Corriente"),
        createPayForm("Otros")
      ];
      setPayForms(_payForms);
    };
    const getPayments = async () => {
      const _payments = [
        createPayment("Efectivo", "$", 500.0),
        createPayment("Visa", "$", 1221.0)
      ];
      setPayments(_payments);
    };
    getCustomer();
    getProducts();
    getPayForms();
    getPayments();
  }, []);

  return (
    <Document
      customer={customer}
      products={products}
      payForms={payForms}
      payments={payments}
    />
  );
};

export default DocumentContainer;
