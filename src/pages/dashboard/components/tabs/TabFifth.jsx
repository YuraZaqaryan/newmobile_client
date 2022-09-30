import React from "react";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";

const TabFifth = ({
    characteristicsDevice,
    characteristicsDeviceValue
}) => {
  return (
    <TabPanel value="5">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="standard-basic"
          label="Network Type Example LTE/GSM"
          variant="standard"
          name="networkType"
          value={characteristicsDevice.networkType}
          onChange={characteristicsDeviceValue}
        />
        <TextField
          id="standard-basic"
          label="4G LTE Network range Example 'LTE'"
          variant="standard"
          name="networkRange"
          value={characteristicsDevice.networkRange}
          onChange={characteristicsDeviceValue}
        />
      </Box>
    </TabPanel>
  );
};

export default TabFifth;
