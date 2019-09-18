import React, { useState } from "react";
import StatusConnection from "./StatusConnection";
import axios from 'axios';

function StatusConnectionContainer() {
  const [connection, changeConnection] = useState(true);
  
  const testConnection = ()=>{
    axios.get('http://100.100.100.19:3000/api/').then(res => {
      console.log(res)
      if(res){
        changeConnection(true)
      }
      
    })
    .catch(err =>{
      changeConnection(false) 
    })
  }
  return (
    <StatusConnection
      connection={connection}
      testConnection={testConnection}
    />
  );
}
export default StatusConnectionContainer;
