import Rect from 'react'

export default function CreateCustomerValidationForm(values,step) {
    let errors = { 
    };
    console.log("steps "+step)
    if(step === 0){
        if (!values.name){
            errors.name= "Debe ingresar el nombre"
        }
        if (!values.lastName){
            errors.lastName= "Debe ingresar el Apellido"
        }
        if (!values.date){
            errors.date= "Debe ingresar la fecha de nacimiento"
        }
        if (!values.document){
            errors.document= "Debe ingresar el documento"
        }
    }
    if (step===2)
        if (!values.email){
            errors.email= "El email es requerido"
        }
        return errors;
  };