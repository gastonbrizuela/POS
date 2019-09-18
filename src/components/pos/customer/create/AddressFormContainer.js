import React, { Fragment } from 'react'
import AddresForm from './AddressForm'

function AddresFormContainer({customer,handleChange}){
    return(
        <Fragment>
        <AddresForm customer = {customer} handleChange={handleChange}/>
        </Fragment>
    )
}

export default AddresFormContainer