import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ClearIcon from "@material-ui/icons/Clear";
import TabPanel from "./TabsPanel";
import DocumentContainer from "../../document/DocumentContainer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(3),
    width: "95%"
  },
  icon: {
    fontSize: 20,
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 5,
    marginRight: 5
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function TabsMenu(props) {
  const { handleOnClickRemove, tabs, value, handleChange } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map(tab => (
            <Tab
              value={tab.counter}
              icon={
                <ClearIcon
                  className={classes.icon}
                  onClick={() => handleOnClickRemove(tab.counter)}
                />
              }
              key={tab.counter}
              label={tab.type + " " + (tab.counter + 1)}
              {...a11yProps(tab.counter)}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map(tab => (
        <TabPanel key={tab.counter} value={value} index={tab.counter}>
          {tab.type === "Facturacion" ? (
            <DocumentContainer />
          ) : tab.type === "Reporting" ? (
            "Reporting"
          ) : tab.type === "inicio" ? (
            "inicio"
          ) : null}
        </TabPanel>
      ))}
    </div>
  );
}
export default TabsMenu;
