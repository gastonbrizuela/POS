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
import { green, blue,red} from '@material-ui/core/colors';
import CircularIntegrationButton from '../../../commons/buttons/CircularIntegrationButton'

const useStyles = makeStyles(theme => ({
  card: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  },
  title: {
    fontSize: 14
  },
  cardHeader: {
  background: blue[900],
  color:"white"
  },
  cardHeaderSuccess: {
    background: green[700],
    color:"white"
    },
  cardHeaderError: {
      background: red[700],
      color:"white"
      },
  cardContend: {
    marginLeft:"3%",
    marginRight:"3%"
  },
  pos: {
    marginBottom: 1
  },
  marginVertical: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  blockButtons: {
  }
}));

const CardCustomer = ({customer, isFinishForm, handleSubmit, success, loading, successError}) => {
  const classes = useStyles();
  return (
    <Card className= {classes.card}>
      <CardHeader className = {success?classes.cardHeaderSuccess:successError?classes.cardHeaderError:classes.cardHeader} title={success?`${customer.name} ${customer.lastName} - ¡Se Ha Guardado Exitosamente!`
      :successError?`${customer.name} ${customer.lastName} - ¡Se ha generado un error al guardar!`:
      customer.name?`${customer.name} ${customer.lastName}`:"Nombre"}/>
      <CardContent className = {classes.cardContend}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Detalle del cliente
        </Typography>
        <Typography className={classes.pos}>
        {`Fecha de nacimiento: ${customer.date}`}
        </Typography>
        <Typography className={classes.pos}>
        {`Documento: ${customer.document}`}
        </Typography>
        <Divider className={classes.marginVertical} />
        <Typography className={classes.pos}>
        {`Calle: ${customer.street}`}
        </Typography>
        <Typography className={classes.pos}>
        {`Numero: ${customer.numberStreet}`}
        </Typography>
        <Typography className={classes.pos}>
        {`Provincia: ${customer.province}`}
        </Typography>
        <Typography className={classes.pos} >
        {`Localidad: ${customer.locality}`}
        </Typography>
        <Typography className={classes.pos}>
        {`Barrio: ${customer.neighborhood}`}
        </Typography>
        <Typography className={classes.pos} >
        {`Codigo Postal: ${customer.zipCode}`}
        </Typography>
        <Divider className={classes.marginVertical} />
        <Typography className={classes.pos}>
        {`Correo Electronico: ${customer.email}`}
        </Typography>
        <Typography className={classes.pos}>
        {`Telefono: ${customer.areaCodePhone}-${customer.numberPhone}`}
        </Typography>
        <Divider className={classes.marginVertical} />
        <CardActions className={classes.blockButtons}>
            <CircularIntegrationButton isFinishForm={isFinishForm} handleSubmit={handleSubmit} success = {success} loading = {loading} successError= {successError}/>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardCustomer;