import React, { useState } from "react";
import StatusConnection from "./StatusConnection";

function StatusConnectionContainer() {
  const [connection, changeConnection] = useState(true);

  return (
    <StatusConnection
      connection={connection}
      changeConnection={changeConnection}
    />
  );
}
export default StatusConnectionContainer;
