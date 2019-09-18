import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardCustomerContainer from './CardCustomerContainer'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',

  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(1),
  },
}));


export default function CreateCustomer(props) {
  const {getStepContent,handleReset,handleBack,handleNext,steps,activeStep,customer,isFinishForm, handleSubmit, loading, success,successError} = props 
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <Stepper activeStep={activeStep} orientation="vertical" className={classes.root}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {getStepContent(index)}
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
                >
                  Back
                </Button>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </Grid>
        <Grid item xs={8}>
          <CardCustomerContainer customer = {customer} isFinishForm={isFinishForm} handleSubmit= {handleSubmit} loading={loading} success= {success} successError={successError}></CardCustomerContainer>
        </Grid>
      </Grid>
    </div>
  );
}