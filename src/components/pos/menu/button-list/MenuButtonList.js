import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    margin: theme.spacing(3, 1, 1, 1),
    input: {
      display: "none"
    }
  }
}));

function MenuButtonList(props) {
  const { handleOnClickMenuButton, ButtonsAction } = props;
  const classes = useStyles();
  return (
    <Fragment>
      {ButtonsAction.map(actionButton => (
        <Button
          key={actionButton.name}
          onClick={() => handleOnClickMenuButton(actionButton.name)}
          variant="contained"
          color="primary"
          className={classes.button}
          name={actionButton.name}
        >
          {actionButton.name}
        </Button>
      ))}
    </Fragment>
  );
}

export default MenuButtonList;
