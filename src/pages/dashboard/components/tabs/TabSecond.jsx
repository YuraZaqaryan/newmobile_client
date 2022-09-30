import React from "react";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";

const TabSecond = ({
    characteristicsDevice,
    characteristicsDeviceValue
}) => {
  return (
    <TabPanel value="2">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-number"
                label="Front Camera"
                type="number"
                variant="standard"
                name="frontCamera"
                value={characteristicsDevice.frontCamera}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="outlined-number"
                label="Main Camera"
                variant="standard"
                name="mainCamera"
                value={characteristicsDevice.mainCamera}
                onChange={characteristicsDeviceValue}
              />
            </Box>
          </TabPanel>
  )
}

export default TabSecond