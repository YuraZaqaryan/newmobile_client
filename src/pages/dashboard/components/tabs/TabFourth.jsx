import React from "react";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";

const TabFourth = ({
    characteristicsDevice,
    characteristicsDeviceValue,

    checkboxDevice,
    checkboxDeviceValue
}) => {
  return (
    <TabPanel value="4">
            <Box sx={{ display: "inline-flex", flexDirection: "column" }}>
              <TextField
                id="standard-basic"
                label="Number of processor cores"
                variant="standard"
                name="numberOfProcessorCores"
                value={characteristicsDevice.numberOfProcessorCores}
                onChange={characteristicsDeviceValue}
              />
              <TextField
                id="standard-basic"
                label="CPU"
                variant="standard"
                name="cpu"
                value={characteristicsDevice.cpu}
                onChange={characteristicsDeviceValue}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">MEMORY</FormLabel>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="4GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory4}
                        name="memory4"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="4 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="8GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory8}
                        name="memory8"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="8 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="16GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory16}
                        name="memory16"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="16 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="32GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory32}
                        name="memory32"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="32 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="64GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory64}
                        name="memory64"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="64 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="128GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory128}
                        name="memory128"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="128 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="256GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory256}
                        name="memory256"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="256 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="512GB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory512}
                        name="memory512"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="512 GB"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="1TB"
                    control={
                      <Checkbox
                        size="small"
                        checked={checkboxDevice.memory1}
                        name="memory1"
                        onChange={checkboxDeviceValue}
                      />
                    }
                    label="1TB"
                    labelPlacement="top"
                  />
                </FormGroup>
              </FormControl>
              <TextField
                id="outlined-number"
                label="RAM"
                type="number"
                variant="standard"
                className="ram"
                name="ram"
                value={characteristicsDevice.ram}
                onChange={characteristicsDeviceValue}
              />
              <FormControlLabel
                value="memorycardslot"
                control={
                  <Checkbox
                    size="small"
                    checked={checkboxDevice.cardSlot}
                    name="cardSlot"
                    onChange={checkboxDeviceValue}
                  />
                }
                label="Memory card slot"
              />
            </Box>
          </TabPanel>
  )
}

export default TabFourth