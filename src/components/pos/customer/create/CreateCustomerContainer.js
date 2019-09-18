import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInformatioFormContainer from './PersonalInformatioFormContainer'
import AdreessFormContainer from './AddressFormContainer';
import ContactContainer from './ContactFormContainer';
import CreateCustomer from './CreateCustomer'
import CreateCustomerValidationForm from './CreateCustomerValidationForm'
import axios from 'axios'



export default function CreateCustomerContainer() {
  const customerInitial = {
    name:'',
    lastName:'',
    date:'',
    document:'',
    street:'',
    numberStreet:'',
    locality:'',
    zipCode:'',
    province:'',
    areaCodePhone:'',
    numberPhone:'',
    neighborhood:'',
    email:''

}  
  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(-1);
  const [customer, setCustomer] =useState(customerInitial)
  const [isFinishForm, setIsfinishForm] = useState(false)
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successError, setSuccessError] = useState()
  const timer = React.useRef()


  const handleChange = e => {
    setCustomer({
        ...customer,
        [e.target.name]: e.target.value
    })
}
  const steps = getSteps();
  
  useEffect(() => {
    console.log(errors)
    if (Object.keys(errors).length===0) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      if(activeStep===steps.length - 1){
        setIsfinishForm(true)
      }
    }
  }, [errors]);

  function handleNext() {
    setErrors(CreateCustomerValidationForm(customer,activeStep));
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    setIsfinishForm(false)
  }

  function handleReset() {
    setSuccess(false)
    setIsfinishForm(false)
    setSuccessError()
    setCustomer(customerInitial)
    setActiveStep(0);}

  const handleSubmit = () => {
    console.log("llega bien")
      //hacer un uses effect comparando cuando cambia el loading
      postCustomer()
    }

  const postCustomer = ()=>{
    console.log("entra al postcustomer")
      const json = {
        name: customer.name,
        lastName: customer.lastName,
        documentNr: customer.document,
        birthDate: customer.date,
        documentTypeId: "428013f3-3a1e-4474-b419-f13b18f7a3f8",
         street: customer.street,
         streetNumber: customer.numberStreet,
         zipCode: customer.zipCode,
         localityId: "27e7fbf4-ec47-4c47-82ac-3012d154484d",
         provinceId: "72023e1d-fa40-4f18-b635-4f7ae97c87ef",
        email: customer.email,
         mobile: 68065208,
         areaCodeMobile: 11,
         neighborhood: customer.neighborhood,
         department: "1",
         floor: "1"
       } 
      if (!loading) {
        setLoading(true)
      axios.post('http://100.100.100.19:3000/api/customers',json).then(res => {
        console.log("entra")
        console.log(res.status)
        if (res.status == 201){
          setSuccess(true);
          setLoading(false);}

      })
      .catch(err =>{
        setSuccessError("Error interno, por favor vuelva intentar mas tarde")
        setLoading(false)
        console.log(err.status)
        return(err)})};
    }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalInformatioFormContainer handleChange={handleChange} customer ={customer} errors={errors}/>;
      case 1:
        return <AdreessFormContainer handleChange={handleChange} customer ={customer} />;
      case 2:
        return <ContactContainer handleChange={handleChange} customer ={customer}/>;
      default:
        return 'Unknown step';
    }
  }
  function getSteps() {
    return ['Datos Personales', 'Direccion', 'Datos de contacto'];
  }
  
  return (<CreateCustomer
                          getStepContent={getStepContent}
                          handleReset = {handleReset}
                          handleBack= {handleBack}
                          handleNext = {handleNext}
                          steps={steps}
                          activeStep = {activeStep}
                          customer = {customer}
                          isFinishForm = {isFinishForm}
                          handleSubmit = {handleSubmit}
                          loading ={loading}
                          success={success}
                          successError= {successError}/>
                          )
}