import React from "react";

/* Material-UI Components */
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  Typography,
  Tooltip,
  Button,
  Zoom,
  CardHeader
} from "@material-ui/core";
import CircularIntegrationButton from '../../../commons/buttons/CircularIntegrationButton'

const useStyles = makeStyles(theme => ({
  card: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 1
  },
  marginVertical: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  blockButtons: {
    display: "block"
  }
}));

const CardCustomer = ({customer, isFinishForm, handleSubmit, success, loading, successError}) => {
  const classes = useStyles();
  return (
    <Card className= {classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Detalle del cliente
        </Typography>
        <Typography variant="h5" component="h2">
        {`${customer.name} ${customer.lastName}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {`Fecha de nacimiento: ${customer.date}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {`Documento: ${customer.document}`}
        </Typography>
        <Divider className={classes.marginVertical} />
        <Typography variant="body2" component="p">
        {`Calle: ${customer.street}`}
        </Typography>
        <Typography variant="body2" component="p">
        {`Numero: ${customer.numberStreet}`}
        </Typography>
        <Typography variant="body2" component="p">
        {`Provincia: ${customer.province}`}
        </Typography>
        <Typography variant="body2" component="p">
        {`Localidad: ${customer.locality}`}
        </Typography>
        <Typography variant="body2" component="p">
        {`Barrio: ${customer.neighborhood}`}
        </Typography>
        <Typography variant="body2" component="p">
        {`Codigo Postal: ${customer.zipCode}`}
        </Typography>
        <Divider className={classes.marginVertical} />
        <Typography variant="body2" component="p">
        {`Correo Electronico: ${customer.email}`}
        </Typography>
        <Typography variant="body2" component="p">
        {`Telefono: ${customer.areaCodePhone}-${customer.numberPhone}`}
        </Typography>
      </CardContent>
      <Divider className={classes.marginVertical} />
        <CardActions className={classes.blockButtons}>
            <CircularIntegrationButton isFinishForm={isFinishForm} handleSubmit={handleSubmit} success = {success} loading = {loading} successError= {successError}/>
      </CardActions>
    </Card>
  );
};

export default CardCustomer;