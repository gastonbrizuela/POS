import React from "react";
import MenuButtonList from "./MenuButtonList";

function StatusConnectionContainer({ handleOnClickMenuButton }) {
  function createButtonsAction(name) {
    return { name };
  }

  const ButtonsAction = [
    createButtonsAction("Facturacion"),
    createButtonsAction("Reporting"),
    createButtonsAction("Stock"),
    createButtonsAction("Nuevo cliente"),
    createButtonsAction("Libres"),
    createButtonsAction("CRM"),
    createButtonsAction("Asistencia Pedido"),
    createButtonsAction("Soporte/TKT")
  ];
  return (
    <MenuButtonList
      ButtonsAction={ButtonsAction}
      handleOnClickMenuButton={handleOnClickMenuButton}
    />
  );
}

export default StatusConnectionContainer;
