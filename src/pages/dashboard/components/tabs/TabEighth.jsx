import React from 'react'
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";

const TabEighth = ({
    characteristicsDevice,
    characteristicsDeviceValue
}) => {
  return (
    <TabPanel value="8">
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <TextField
                id="outlined-number"
                label="Weight"
                type="number"
                variant="standard"
                name="weight"
                value={characteristicsDevice.weight}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="standard-basic"
                label="Thickness"
                variant="standard"
                name="thickness"
                value={characteristicsDevice.thickness}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="outlined-number"
                label="Height"
                type="number"
                variant="standard"
                name="height"
                value={characteristicsDevice.height}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="outlined-number"
                label="Width"
                type="number"
                variant="standard"
                name="width"
                value={characteristicsDevice.width}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="standard-basic"
                label="Audio"
                variant="standard"
                name="audio"
                value={characteristicsDevice.audio}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="outlined-number"
                label="Sim Card Quantity"
                type="number"
                variant="standard"
                name="simCardQty"
                value={characteristicsDevice.simCardQty}
                onChange={characteristicsDeviceValue}
              />
            </Box>
          </TabPanel>
  )
}

export default TabEighth