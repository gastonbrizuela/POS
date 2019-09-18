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

function PersonalInformationForm({customer,handleChange,errors}){
    const classes = useStyles();
    return (<Fragment>
        <form className={classes.container} autoComplete="off">
            <TextField
            id="standard-name"
            name = "name"
            label="Nombre"
            className={classes.textField}
            value={customer.name}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            error = {errors.name!= undefined}
            />
            {errors.name?
            (<FormHelperText>{errors.name}</FormHelperText>):null}
            <TextField
            id="standard-lastName"
            name = "lastName"
            label="Apellido"
            className={classes.textField}
            value={customer.lastName}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            error= {errors.lastName!= undefined}
            />
            {errors.lastName?
              (<FormHelperText>{errors.lastName}</FormHelperText>):null}           
            <TextField
            id="date"
            name = "date"
            label="Nacimiento"
            type="date"
            defaultValue=" "
            margin="normal"
            value={customer.date}
            onChange={handleChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            error= {errors.date!= undefined}
            />
            {errors.date?
            (<FormHelperText>{errors.date}</FormHelperText>):null}
            <TextField
            id="document"
            name="document"
            label="Documento"
            type="number"
            defaultValue=" "
            margin="normal"
            value={customer.document}
            onChange={handleChange}
            className={classes.textField}
            variant="filled"
            error= {errors.document!= undefined}
            />
            {errors.document?
            (<FormHelperText>{errors.document}</FormHelperText>):null}
        </form>
        </Fragment>
      )
}

export default PersonalInformationForm