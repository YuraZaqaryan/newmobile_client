import React from 'react'
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import ColorPicker from "../ColorPicker/ColorPicker";

const TabSeventh = ({
    colorsDevice,
    colorsDeviceValue
}) => {
  return (
    <TabPanel value="7">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormGroup
                aria-label="position"
                row
                sx={{ display: "inline-flex", flexDirection: "column" }}
              >
                <FormControlLabel
                  value="color1"
                  control={
                    <ColorPicker
                      productColor={colorsDevice.color1}
                      colorName="color1"
                      onChange={colorsDeviceValue}
                    />
                  }
                  label="Color No1"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="color2"
                  control={
                    <ColorPicker
                      productColor={colorsDevice.color2}
                      colorName="color2"
                      onChange={colorsDeviceValue}
                    />
                  }
                  label="Color No2"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="color3"
                  control={
                    <ColorPicker
                      productColor={colorsDevice.color3}
                      colorName="color3"
                      onChange={colorsDeviceValue}
                    />
                  }
                  label="Color No3"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="color4"
                  control={
                    <ColorPicker
                      productColor={colorsDevice.color4}
                      colorName="color4"
                      onChange={colorsDeviceValue}
                    />
                  }
                  label="Color No4"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="color5"
                  control={
                    <ColorPicker
                      productColor={colorsDevice.color5}
                      colorName="color5"
                      onChange={colorsDeviceValue}
                    />
                  }
                  label="Color No5"
                  labelPlacement="end"
                />
              </FormGroup>
            </Box>
          </TabPanel>
  )
}

export default TabSeventh