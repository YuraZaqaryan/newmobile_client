import React, {useState} from "react";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ImageUpload from "../ImageUpload/ImageUpload";
import TableImages from "../tableImages/TableImages";
import NativeSelectBrand from "../nativeSelect/nativeSelectBrand/NativeSelectBrand";
import NativeSelectType from "../nativeSelect/nativeSelectType/NativeSelectType";

const TabFirst = ({
  generalDevice,
  setGeneralDevice,
  generalDeviceValue,

  checkboxDevice,
  checkboxDeviceValue,

  characteristicsDevice,
  characteristicsDeviceValue,
  setGeneralDeviceDirty,
  generalDeviceDirty,
  setGeneralDeviceError,
  generalDeviceError,


  device,
}) => {
  const handleChangeMainImage = (imageUrl) => {
    setGeneralDevice({
      ...generalDevice,
      imagePath: imageUrl,
    });
  };
    const blurHandler = (e) => {
        switch (e.target.name){
            case "name" :
                setGeneralDeviceDirty({...generalDeviceDirty, name : true})
                break;
            case "price":
                setGeneralDeviceDirty({...generalDeviceDirty, price : true})
                break;
            }
        }

  return (
    <TabPanel value="1">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="outlined-name"
          onBlur={e => blurHandler(e)}
          error={(!!generalDeviceError.name && generalDeviceDirty.name) ? true : false}
          helperText={(generalDeviceError.name && generalDeviceDirty.name) && generalDeviceError.name}
          label="Name *"
          variant="standard"
          name="name"
          value={generalDevice.name}
          onChange={generalDeviceValue}
        />
        <Box>
          <TextField
            id="outlined-number"
            onBlur={e => blurHandler(e)}
            error={(!!generalDeviceError.price && generalDeviceDirty.price) ? true : false}
            helperText={(generalDeviceError.price && generalDeviceDirty.price) && generalDeviceError.price}
            label="Price *"
            variant="standard"
            type="number"
            name="price"
            value={generalDevice.price}
            onChange={generalDeviceValue}
          />
          <FormControlLabel
            value="monthlyFee"
            control={
              <Checkbox
                checked={checkboxDevice.credit}
                name="credit"
                onChange={checkboxDeviceValue}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Monthly fee"
            labelPlacement="top"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }}
          />
        </Box>
        {/* SELECT CATEGORY */}
        <NativeSelectType
          device={device}
          generalDevice={generalDevice}
          setGeneralDevice={setGeneralDevice}
        />
        {/* SELECT CATEGORY */}

        {/* SELECT BRAND */}
        {(generalDevice.category.label === "Phone" || generalDevice.category.label === "Tablet" || generalDevice.category.label === "Watch") &&
          <NativeSelectBrand
            device={device}
            generalDevice={generalDevice}
            setGeneralDevice={setGeneralDevice}
          />
        }
          {/* SELECT BRAND */}
        <TextField
          disabled={
            (generalDevice.category.label === "Phone" ||
              generalDevice.category.label === "Tablet" || generalDevice.category.label === "Watch") &&
            generalDevice.brand.label === "Apple" &&
            generalDevice.brand.label !== "HarmonyOS"
              ? false
              : true
          }
          id="outlined-number"
          label="Ios Version"
          type="number"
          variant="standard"
          name="iosversion"
          value={characteristicsDevice.iosversion}
          onChange={characteristicsDeviceValue}
        />
        <TextField
          disabled={
            ((generalDevice.category.label === "Phone" ||
              generalDevice.category.label === "Tablet" || generalDevice.category.label === "Watch") &&
              generalDevice.brand.label === "Samsung") ||
            (generalDevice.brand.label === "Xiaomi" &&
              generalDevice.brand.label !== "HarmonyOS")
              ? false
              : true
          }
          id="outlined-number"
          label="Android Version"
          type="number"
          variant="standard"
          name="androidversion"
          value={characteristicsDevice.androidversion}
          onChange={characteristicsDeviceValue}
        />
      </Box>
      <Box>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="statusSell"
            value={generalDevice.statusSell}
            onChange={generalDeviceValue}
          >
            <FormControlLabel
              value="inStock"
              control={<Radio />}
              label="in Stock"
            />
            <FormControlLabel
              value="limited"
              control={<Radio />}
              label="Limited"
            />
            <FormControlLabel
              value="outOfStock"
              control={<Radio />}
              label="Out Of Stock"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        {/* Main image */}
        <ImageUpload
          onChange={handleChangeMainImage}
          image={generalDevice.imagePath}
          setGeneralDeviceError={setGeneralDeviceError}
          generalDeviceError={generalDeviceError}
        />
      </Box>
      {/* Main image END */}

      {/* Image Table */}
      <TableImages
        generalDevice={generalDevice}
        setGeneralDevice={setGeneralDevice}
      />
      {/* Image Table END */}
    </TabPanel>
  );
};

export default TabFirst;
