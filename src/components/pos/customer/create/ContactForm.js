import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

function ContactForm({customer,handleChange}){
    const classes = useStyles();
    return (<Fragment>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
            id="email"
            name = "email"
            label="Email"
            className={classes.textField}
            value={customer.email}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />

            <TextField
            id="areaCodePhone"
            name = "areaCodePhone"
            label="Codigo de area"
            type="number"
            className={classes.textField}
            value={customer.areaCodePhone}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />
            <TextField
            id="numberPhone"
            name = "numberPhone"
            label="Telefono"
            type="number"
            className={classes.textField}
            value={customer.numberPhone}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            />
        </form>
        </Fragment>
      )
}

export default ContactForm