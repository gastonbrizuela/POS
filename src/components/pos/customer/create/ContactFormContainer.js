import React, { Fragment } from 'react'
import ContactForm from './ContactForm'

function ContactContainer({customer,handleChange, errors}){
    return(
        <Fragment>
        <ContactForm customer = {customer} handleChange={handleChange} errors={errors}/>
        </Fragment>
    )
}

export default ContactContainer