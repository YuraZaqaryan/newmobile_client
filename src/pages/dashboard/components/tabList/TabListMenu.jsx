import React, { useState } from 'react'
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";

const TabListMenu = ({ handleChange }) => {
  return (
    <TabList
              onChange={handleChange}
              aria-label="Add product table"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="General" value="1" />
              <Tab label="Camera" value="2" />
              <Tab label="Display" value="3" />
              <Tab label="Memory CPU" value="4" />
              <Tab label="Network" value="5" />
              <Tab label="Power" value="6" />
              <Tab label="Color" value="7" />
              <Tab label="Other" value="8" />
            </TabList>
  )
}

export default TabListMenu