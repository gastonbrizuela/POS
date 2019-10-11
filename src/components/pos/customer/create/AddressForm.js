import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection : 'column',
    flexWrap: 'wrap',
  },
  textField: {
    width:'90%',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function AdreessForm({customer,handleChange,errors}){
    const classes = useStyles();
    return (<Fragment>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
            id={`standard-street-${customer.street}`}
            name = "street"
            label="Calle"
            className={classes.textField}
            value={customer.street}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />
            <TextField
            id="standard-numberStreet"
            name = "numberStreet"
            label="Numero"
            type="number"
            className={classes.textField}
            value={customer.numberStreet}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />
            <TextField
            id="standard-province"
            name = "province"
            label="Provincia"
            className={classes.textField}
            value={customer.province}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />
            <TextField
            id="standard-street"
            name = "locality"
            label="Localidad"
            className={classes.textField}
            value={customer.locality}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />
            <TextField
            id="standard-neighborhood"
            name = "neighborhood"
            label="Barrio"
            className={classes.textField}
            value={customer.neighborhood}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />
            <TextField
            id="zipCode"
            name="zipCode"
            label="Codigo Postal"
            type="number"
            margin="normal"
            value={customer.zipCode}
            onChange={handleChange}
            className={classes.textField}
            variant="filled"
            />
        </form>
        </Fragment>
      )
}

export default AdreessForm