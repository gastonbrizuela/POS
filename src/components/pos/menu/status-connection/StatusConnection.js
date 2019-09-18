import React, { Fragment } from "react";
import WifiIcon from "@material-ui/icons/Wifi";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  iconWifiGreen: {
    color: "green"
  },
  iconWifiRed:{
    color:"red"
  },
  divider: {
    margin: 4
  },
  alignHorizontal: {
    display: "inline",
    width: "100%",
    fontSize: 10
  }
}));

const StatusConnection = props => {
  const {connection, testConnection}= props
  const classes = useStyles();
  return (
    <Fragment>
      <Typography component="p">{"Estado de la conexion"}</Typography>
      <Divider className={classes.divider} />
      <Grid container className={classes.alignHorizontal}>
        <WifiIcon className={connection?classes.iconWifiGreen:classes.iconWifiRed} onClick={testConnection}></WifiIcon>
        <Typography component="p">{connection?"Conectado":"Sin Conexion"}</Typography>
      </Grid>
    </Fragment>
  );
};
export default StatusConnection;
