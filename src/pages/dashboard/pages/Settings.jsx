import React, {useContext, useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import "./settings.scss";
import {
    createBrand,
    createInterest,
    createType,
    fetchBrands, fetchDevices,
    fetchTypes,
    updateTypeSideBrand
} from '../../../http/deviceAPI'
import ImageUpload from "../components/ImageUpload/ImageUpload";
import {Context} from "../../../index";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import {observer} from "mobx-react-lite";



const Settings = observer(() => {
    const { device } = useContext(Context);
    const [brandsItem, setBrandsItem] = useState({
        Phone: [],
        Tablet: [],
        Watch: [],
        Computer: [],
        Accessory: [],
        Camera: [],
        Equipment: []
    })
     useEffect((()=>{
         fetchTypes().then((data) => device.setTypes(data));
         const newArr = device.types.map((e) => {
             return [e.name, e.brands]
         }).reduce((aggr, value) =>{
             aggr[value[0]] = Object.values(value[1])
             return aggr
         },{})
         setBrandsItem(newArr)
     }),[device])

    const [open, setOpen] = useState(false)
    const [openType, setOpenType] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setOpenType(false)
      };
    const handleBrandChange = (event,deviceType) => {
        const index = brandsItem[deviceType].indexOf(event.target.value)
        if(index === -1){
            setBrandsItem({...brandsItem, [deviceType]: [...brandsItem[deviceType], event.target.value]});
        }else{
            const newPhoneCollection = brandsItem[deviceType].filter(brandItem => brandItem !== event.target.value);
            setBrandsItem({...brandsItem,[deviceType]:newPhoneCollection});
        }
    }
    const ShowAlertMessage = () => {
        return(
            <>
            <Snackbar open={open} autoHideDuration={1400} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Brand added successfully!
                </Alert>
            </Snackbar>
            <Snackbar open={openType} autoHideDuration={1400} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Type added successfully!
                </Alert>
            </Snackbar>
            </>
        )
    }  
    const [addSettingValue, setAddSettingValue] = useState({
    brandName: "",
    brandImage: null,
    typeName: "",
    interest : 0
    }
  );
    const [formValid, setFormValid] = useState(true)
    const [generalDeviceError, setGeneralDeviceError] = useState(
        {
            imageMain : false
        }
    )

    useEffect(() => {
        if(!generalDeviceError.imageMain && !!addSettingValue.brandName){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [generalDeviceError.imageMain, addSettingValue.brandName])

    const handleChangeMainImage = (imageUrl) => {
        setAddSettingValue({
            ...addSettingValue,
            brandImage: imageUrl,
        });
    };
  const addBrand = () => {
      const formData = new FormData();
      formData.append("name", addSettingValue.brandName);
      formData.append("image", addSettingValue.brandImage);
    if(addSettingValue.brandName !== ""){
        createBrand(formData).then((data) => {
            setAddSettingValue({...addSettingValue, brandName : "", brandImage: null})
            setOpen(true)
        });
    }
  };
    const handleSendBrands = () => {
        updateTypeSideBrand(brandsItem).then(data => {
            // alert("Success")
        })
    }
  // const addType = () => {
  //   if(addSettingValue.typeName !== ""){
  //       createType({name: addSettingValue.typeName}).then(data => {
  //           setAddSettingValue({typeName : ""})
  //           setOpenType(true)
  //       })
  //   }
  // }
  // const changeInterest = () => {
  //     if(addSettingValue.interest !== ""){
  //       createInterest({ name: addSettingValue.interest }).then((data) => {
  //           setAddSettingValue({interest : ""})
  //           setOpen(true)
  //       });
  //   }
  // }
  const ChangeValue = (e) => {
    setAddSettingValue({
            ...addSettingValue, 
            [e.target.name] : e.target.value
        })
    }
  return (
    <div className="setting">
      <div className="setting__item">
          <div className="brand__field">
              <TextField fullWidth  id="filled-basic" label="Brand Name" name="brandName" value={addSettingValue.brandName || ""} variant="filled" onChange={ ChangeValue } />
              <div className="uploadImage">
                      <ImageUpload
                          onChange={handleChangeMainImage}
                          image={addSettingValue.brandImage}
                          setGeneralDeviceError={setGeneralDeviceError}
                          generalDeviceError={generalDeviceError}
                      />
                  <Button className="button__handle" variant="contained" disabled={formValid} color="success" onClick={addBrand}>
                      Add Brand
                  </Button>
              </div>
          </div>
      </div>
        <div className="setting__item choose__brand">
            <div className="setting__type__brand">
            {
                device.types.map((type) => (
                        <div key={type.id} className="item__types">
                            <h4>{type.name}</h4>
                            <div className="item__brands">
                                {
                                    device.brands.filter((brand) => brand.name !== "empty")
                                        .map((brand) => (
                                            <div className="brands__check" key={brand.id}>
                                                <div>
                                                    <FormControlLabel
                                                        value="4GB"
                                                        control={
                                                            <Checkbox
                                                                checked={brandsItem[type.name].includes(brand.name)}
                                                                value={brand.name}
                                                                onChange={(event) => handleBrandChange(event,type.name)}
                                                                size="small"
                                                                inputProps={{ 'aria-label': 'controlled' }}
                                                            />
                                                        }
                                                        label={brand.name}
                                                        labelPlacement="start"
                                                    />
                                                </div>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                ))
            }
            </div>
            <Button className="button__handle" variant="contained" color="success" onClick={handleSendBrands}>
                Change
            </Button>
        </div>
      {/*<div className="setting__item">*/}
      {/*  <TextField fullWidth  id="filled-basic" label="Type Name" name="typeName" value={addSettingValue.typeName || ""} variant="filled" onChange={ ChangeValue } />*/}
      {/*  <Button variant="contained" color="success" onClick={addType}>*/}
      {/*    Add Type*/}
      {/*  </Button>*/}
      {/*</div>*/}
      {/*<div className="setting__item">*/}
      {/*  <TextField fullWidth  id="filled-basic" type="number" label="Interest" name="interest" value={addSettingValue.interest} variant="filled" onChange={ ChangeValue } />*/}
      {/*  <Button variant="contained" color="success" onClick={changeInterest}>*/}
      {/*    Change Interest*/}
      {/*  </Button>*/}
      {/*</div>*/}
        <ShowAlertMessage />

    </div>
  );
});

export default Settings;
