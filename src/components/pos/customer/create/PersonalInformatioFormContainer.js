import React, { Fragment } from 'react'
import PersonalInformationForm from './PersonalInformationForm'

function PersonalInformationFormContainer({customer,handleChange, errors}){

    return(
        <Fragment>
        <PersonalInformationForm customer = {customer} handleChange={handleChange} errors= {errors}/>
        </Fragment>
    )
}

export default PersonalInformationFormContainer