import React from "react";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";

const TabThird = ({
    characteristicsDevice,
    characteristicsDeviceValue
}) => {
  return (
    <TabPanel value="3">
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <TextField
                id="standard-basic"
                label="Screen Type"
                variant="standard"
                name="screenType"
                value={characteristicsDevice.screenType}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="standard-basic"
                label="Screen Resolution"
                variant="standard"
                name="screenResolution"
                value={characteristicsDevice.screenResolution}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="standard-basic"
                label="Screen Size"
                variant="standard"
                name="screenSize"
                value={characteristicsDevice.screenSize}
                onChange={characteristicsDeviceValue}
              />
            </Box>
          </TabPanel>
  )
}

export default TabThird