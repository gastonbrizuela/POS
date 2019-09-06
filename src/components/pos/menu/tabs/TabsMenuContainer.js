import React from "react";
import Tabs from "./TabsMenu";

function TabsContainer(props) {
  const { tabs, handleClearTab } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    console.log("nuevo value " + newValue);
    setValue(newValue);
  }

  function handleOnClickRemove(tab) {
    handleClearTab(tab);
  }
  return (
    <Tabs
      handleChange={handleChange}
      tabs={tabs}
      value={value}
      handleOnClickRemove={handleOnClickRemove}
    />
  );
}

export default TabsContainer;
