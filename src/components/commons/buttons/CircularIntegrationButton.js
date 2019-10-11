import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, red} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  errorMessage: {
    color:red[700]
  },

  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegrationButton({isFinishForm, handleSubmit, loading, success,successError}) {
  const classes = useStyles();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });



  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab
          aria-label="save"
          color={successError?"secondary":"primary"}
          className={buttonClassname}
          onClick={handleSubmit}
          disabled = {!(isFinishForm)}
        >
          {successError?<SaveIcon/>:
            success ? <CheckIcon /> : <SaveIcon/>}
        </Fab>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
      </div>{successError?
            <Typography component="p" className =  {classes.errorMessage}>{successError}</Typography>: null}
            
    </div>
  );
}