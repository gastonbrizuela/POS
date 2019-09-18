import React, { Fragment } from 'react'
import ContactForm from './ContactForm'

function ContactContainer({customer,handleChange}){
    return(
        <Fragment>
        <ContactForm customer = {customer} handleChange={handleChange}/>
        </Fragment>
    )
}

export default ContactContainer