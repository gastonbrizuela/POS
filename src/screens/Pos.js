import React, { useState } from "react";

/* Material-UI Components */
import { Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/* Custom Components */
import MenuButtonListContainer from "../components/pos/menu/button-list/MenuButtonListContainer";
import StatusConnectionContainer from "../components/pos/menu/status-connection/StatusConnectionContainer";
import TabsMenuContainer from "../components/pos/menu/tabs/TabsMenuContainer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(3),
    width: "95%",
    textAlign: "center"
  },
  button: {
    width: "100%",
    margin: theme.spacing(3, 1, 1, 1),
    input: {
      display: "none"
    }
  }
}));

const Pos = () => {
  const classes = useStyles();
  const [tabs, agregarTabs] = useState([]);
  const [counter, addCounter] = useState(0);

  const handleOnClickMenuButton = type => {
    addCounter(counter + 1);
    const tabDic = { counter, type };
    const listTabs = [...tabs, tabDic];
    agregarTabs(listTabs);
  };

  const handleClearTab = i => {
    const index = tabs.findIndex(obj => obj.counter === i);
    console.log("tabs original" + tabs);
    console.log("index" + index);
    let copTabs = [...tabs];
    console.log("coptabs " + copTabs);
    copTabs.splice(index, 1);
    agregarTabs(copTabs);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
        <TabsMenuContainer tabs={tabs} handleClearTab={handleClearTab} />
      </Grid>
      <Grid item xs={1}>
        <Card className={classes.paper}>
          <CardContent>
            <MenuButtonListContainer
              handleOnClickMenuButton={handleOnClickMenuButton}
            />
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
            <StatusConnectionContainer />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Pos;
