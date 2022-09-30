import React from "react";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

const TabSixth = ({
    characteristicsDevice,
    characteristicsDeviceValue,
    checkboxDevice,
    checkboxDeviceValue
}) => {
  return (
    <TabPanel value="6">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="standard-basic"
                label="Charging Connector Type"
                variant="standard"
                name="chargerType"
                value={characteristicsDevice.chargerType}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="outlined-number"
                label="Battery"
                type="number"
                variant="standard"
                name="battery"
                value={characteristicsDevice.battery}
                onChange={characteristicsDeviceValue}
              />
              <FormGroup
                aria-label="position"
                row
                sx={{ display: "inline-flex", flexDirection: "column" }}
              >
                <FormControlLabel
                  value="gps"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkboxDevice.gps}
                      name="gps"
                      onChange={checkboxDeviceValue}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="GPS"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="bluetooth"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkboxDevice.bluetooth}
                      name="bluetooth"
                      onChange={checkboxDeviceValue}
                    />
                  }
                  label="Bluetooth"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="wifiNetwork"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkboxDevice.wifi}
                      name="wifi"
                      onChange={checkboxDeviceValue}
                    />
                  }
                  label="WiFi Network"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="nfc"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkboxDevice.nfc}
                      name="nfc"
                      onChange={checkboxDeviceValue}
                    />
                  }
                  label="NFC"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="4g"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkboxDevice.n4g}
                      name="n4g"
                      onChange={checkboxDeviceValue}
                    />
                  }
                  label="4G"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="3g"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkboxDevice.n3g}
                      name="n3g"
                      onChange={checkboxDeviceValue}
                    />
                  }
                  label="3G"
                  labelPlacement="end"
                />
              </FormGroup>
            </Box>
          </TabPanel>
  )
}

export default TabSixth