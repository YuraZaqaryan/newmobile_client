import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Button from "@mui/material/Button";

import "./table.css";

import { DialogLeavingPage } from "../components/DialogLeavingPage";
import { useNavigatingAway } from "../hooks/useNavigatingAway";

import { Context } from "../../../index";
import {
  fetchTypes,
  fetchBrands,
  fetchDevices,
  updateDevice,
} from "../../../http/deviceAPI";

import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import TabListMenu from "../components/tabList/TabListMenu";
import TabFirst from "../components/tabs/TabFirst";
import TabSecond from "../components/tabs/TabSecond";
import TabThird from "../components/tabs/TabThird";
import TabFourth from "../components/tabs/TabFourth";
import TabFifth from "../components/tabs/TabFifth";
import TabSixth from "../components/tabs/TabSixth";
import TabSeventh from "../components/tabs/TabSeventh";
import TabEighth from "../components/tabs/TabEighth";

import FetchOne from "../components/fetchOneDevice/FetchOne";

const UpdateProduct = observer(() => {
  const { device } = useContext(Context);
  const { id } = useParams();

  const [canShowDialogLeavingPage, setCanShowDialogLeavingPage] =
    useState(false);
  const [stateOfImageTable, setStateOfImageTable] = useState([]);
  const [showDialogLeavingPage, confirmNavigation, cancelNavigation] =
    useNavigatingAway(canShowDialogLeavingPage);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => {
      device.setDevices(data.rows);
    });
  }, [device]);

  const [generalDevice, setGeneralDevice] = useState({
    name: "",
    price: "",
    cashprice: 0,
    category: {
      id: "",
      value: "",
      label: ""
    },
    brand: {
      id: "",
      value: "",
      label: ""
    },
    brandOne: "",
    categoryOne: "",
    statusSell: "outOfStock",
    imagePath: null,
    multipleImageFetch: [],
    multipleImageFetchDelete: [],
    multipleImage: [],
  });
  const [generalDeviceDirty, setGeneralDeviceDirty] = useState({
    name : true,
    price : true,
  })
  const [generalDeviceError, setGeneralDeviceError] = useState({
    name : "",
    price : "",
    imagePath : false
  })
  const [formValid, setFormValid] = useState(false)
  useEffect(() => {
    if(!generalDeviceError.name && !generalDeviceError.price && !generalDeviceError.imageMain){
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  }, [generalDeviceError.name, generalDeviceError.price, generalDeviceError.imageMain])

  const [characteristicsDevice, setCharacteristicsDevice] = useState( {
    iosversion: "",
    androidversion: "",
    frontCamera: "",
    mainCamera: "",
    screenType: "",
    screenResolution: "",
    screenSize: "",
    numberOfProcessorCores: "",
    cpu: "",
    ram: 0,
    networkType: "",
    networkRange: "",
    chargerType: "",
    battery: 0,
    weight: "",
    thickness: "",
    height: "",
    width: "",
    audio: "",
    simCardQty: 0,
    // info: [],
  });
  const [colorsDevice, setColorsDevice] = useState({
    color1: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    color2: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    color3: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    color4: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    color5: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
  });
  const [checkboxDevice, setCheckboxDevice] = useState({
    credit: false,
    gps: false,
    bluetooth: false,
    wifi: false,
    n4g: false,
    n3g: false,
    nfc: false,
    memory4: false,
    memory8: false,
    memory16: false,
    memory32: false,
    memory64: false,
    memory128: false,
    memory256: false,
    memory512: false,
    memory1: false,
    cardSlot: false,
  });
  FetchOne({
    id,
    generalDevice,
    setGeneralDevice,
    characteristicsDevice,
    setCharacteristicsDevice,
    colorsDevice,
    setColorsDevice,
    checkboxDevice,
    device,
    setCheckboxDevice,
  });
  // FETCH ONE DEVICE END

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const generalDeviceValue = (e) => {
    setGeneralDevice({
      ...generalDevice,
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== "") {
      setCanShowDialogLeavingPage(true);
    } else {
      setCanShowDialogLeavingPage(false);
    }
    if(e.target.name === "name"){
      if(e.target.value.length > 56 || e.target.value.length < 4){
        setGeneralDeviceError({...generalDeviceError, name : "Անվանման դաշտը չպետք է գերազանցի 56 նիշը կամ լինի պակաս 4 նիշից"})
        if(!e.target.value){
          setGeneralDeviceError({...generalDeviceError, name : "Անվանման դաշտը չի՝ կարող դատարկ լինել"})
        }
      }else{
        setGeneralDeviceError({...generalDeviceError, name : ""})
      }
    }
    if(e.target.name === "price"){
      if(e.target.value.length > 9 || e.target.value.length < 3){
        setGeneralDeviceError({...generalDeviceError, price : "Գումարը չպետք է գերազանցի 9 նիշը կամ լինի պակաս 3 նիշից"})
        if(!e.target.value){
          setGeneralDeviceError({...generalDeviceError, price : "Գումարի դաշտը չի՝ կարող դատարկ լինել"})
        }
      }else{
        setGeneralDeviceError({...generalDeviceError, price : ""})
      }
    }
  };

  const characteristicsDeviceValue = (e) => {
    setCharacteristicsDevice({
      ...characteristicsDevice,
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== "") {
      setCanShowDialogLeavingPage(true);
    } else {
      setCanShowDialogLeavingPage(false);
    }
  };

  const checkboxDeviceValue = (e) => {
    setCheckboxDevice({
      ...checkboxDevice,
      [e.target.name]: e.target.checked,
    });
    if (e.target.checked !== false) {
      setCanShowDialogLeavingPage(true);
    } else {
      setCanShowDialogLeavingPage(false);
    }
  };

  const colorsDeviceValue = (returnedColor, name) => {
    setColorsDevice({
      ...colorsDevice,
      [name]: {
        r: returnedColor.rgb.r,
        g: returnedColor.rgb.g,
        b: returnedColor.rgb.b,
        a: returnedColor.rgb.a,
      },
    });
  };
  const handleSend = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", generalDevice.name);
    formData.append("statusSell", generalDevice.statusSell);
    formData.append("price", `${generalDevice.price}`);
    formData.append("cashPrice", `${generalDevice.cashprice}`);
    formData.append("credit", checkboxDevice.credit);
    formData.append("iosVersion", characteristicsDevice.iosversion);
    formData.append("androidVersion", characteristicsDevice.androidversion);
    formData.append("frontCamera", characteristicsDevice.frontCamera);
    formData.append("mainCamera", characteristicsDevice.mainCamera);
    formData.append("screenType", characteristicsDevice.screenType);
    formData.append("screenResolution", characteristicsDevice.screenResolution);
    formData.append("screenSize", characteristicsDevice.screenSize);
    formData.append(
      "numberOfProcessorCores",
      characteristicsDevice.numberOfProcessorCores
    );
    formData.append("cpu", characteristicsDevice.cpu);
    formData.append("ram", characteristicsDevice.ram);
    formData.append("networkType", characteristicsDevice.networkType);
    formData.append("networkRange", characteristicsDevice.networkRange);
    formData.append("chargerType", characteristicsDevice.chargerType);
    formData.append("battery", characteristicsDevice.battery);
    formData.append("gps", checkboxDevice.gps);
    formData.append("bluetooth", checkboxDevice.bluetooth);
    formData.append("wifi", checkboxDevice.wifi);
    formData.append("_4g", checkboxDevice.n4g);
    formData.append("_3g", checkboxDevice.n3g);
    formData.append("nfc", checkboxDevice.nfc);
    formData.append("memory4", checkboxDevice.memory4);
    formData.append("memory8", checkboxDevice.memory8);
    formData.append("memory16", checkboxDevice.memory16);
    formData.append("memory32", checkboxDevice.memory32);
    formData.append("memory64", checkboxDevice.memory64);
    formData.append("memory128", checkboxDevice.memory128);
    formData.append("memory256", checkboxDevice.memory256);
    formData.append("memory512", checkboxDevice.memory512);
    formData.append("memory1t", checkboxDevice.memory1);
    formData.append("cardSlot", checkboxDevice.cardSlot);
    formData.append("weight", characteristicsDevice.weight);
    formData.append("thickness", characteristicsDevice.thickness);
    formData.append("height", characteristicsDevice.height);
    formData.append("width", characteristicsDevice.width);
    formData.append("audio", characteristicsDevice.audio);
    formData.append("simCardQty", characteristicsDevice.simCardQty);
    formData.append(
      "color1",
      colorsDevice.color1.r +
        "," +
        colorsDevice.color1.g +
        "," +
        colorsDevice.color1.b +
        "," +
        colorsDevice.color1.a
    );
    formData.append(
      "color2",
      colorsDevice.color2.r +
        "," +
        colorsDevice.color2.g +
        "," +
        colorsDevice.color2.b +
        "," +
        colorsDevice.color2.a
    );
    formData.append(
      "color3",
      colorsDevice.color3.r +
        "," +
        colorsDevice.color3.g +
        "," +
        colorsDevice.color3.b +
        "," +
        colorsDevice.color3.a
    );
    formData.append(
      "color4",
      colorsDevice.color4.r +
        "," +
        colorsDevice.color4.g +
        "," +
        colorsDevice.color4.b +
        "," +
        colorsDevice.color4.a
    );
    formData.append(
      "color5",
      colorsDevice.color5.r +
        "," +
        colorsDevice.color5.g +
        "," +
        colorsDevice.color5.b +
        "," +
        colorsDevice.color5.a
    );
    formData.append(
      "img",
      typeof generalDevice.imagePath !== "string"
        ? generalDevice.imagePath
        : generalDevice.imagePath.split("/").pop()
    );
    if (generalDevice.multipleImage.length > 0) {
      for (const key of Object.keys(generalDevice.multipleImage)) {
        formData.append("imgMultiple", generalDevice.multipleImage[key]);
      }
    } else {
      formData.append("imgMultiple", undefined);
    }

    for (const key of Object.keys(generalDevice.multipleImageFetchDelete)) {
      formData.append(
        "multipleImageDelete",
        generalDevice.multipleImageFetchDelete[key]
      );
    }
    formData.append(
      "brandId",
      device.selectedBrand.id ? device.selectedBrand.id : 3
    );
    formData.append("typeId", device.selectedType.id);
    formData.append("deviceId", id);

    updateDevice(formData).then((data) =>
      alert("Datas is successfully changed!")
    );
  };
  return (
    <>
      {/* MODAL WHEN LIVING */}
      <DialogLeavingPage
        showDialog={showDialogLeavingPage}
        setShowDialog={setCanShowDialogLeavingPage}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabListMenu handleChange={handleChange} />
          </Box>
          <TabFirst
            generalDevice={generalDevice}
            setGeneralDevice={setGeneralDevice}
            generalDeviceValue={generalDeviceValue}
            checkboxDevice={checkboxDevice}
            checkboxDeviceValue={checkboxDeviceValue}
            characteristicsDevice={characteristicsDevice}
            characteristicsDeviceValue={characteristicsDeviceValue}
            setStateOfImageTable={setStateOfImageTable}
            stateOfImageTable={stateOfImageTable}
            setGeneralDeviceDirty={setGeneralDeviceDirty}
            generalDeviceDirty={generalDeviceDirty}
            setGeneralDeviceError={setGeneralDeviceError}
            generalDeviceError={generalDeviceError}
            device={device}
          />
          <TabSecond
            characteristicsDevice={characteristicsDevice}
            characteristicsDeviceValue={characteristicsDeviceValue}
          />
          <TabThird
            characteristicsDevice={characteristicsDevice}
            characteristicsDeviceValue={characteristicsDeviceValue}
          />
          <TabFourth
            characteristicsDevice={characteristicsDevice}
            characteristicsDeviceValue={characteristicsDeviceValue}
            checkboxDevice={checkboxDevice}
            checkboxDeviceValue={checkboxDeviceValue}
          />
          <TabFifth
            characteristicsDevice={characteristicsDevice}
            characteristicsDeviceValue={characteristicsDeviceValue}
          />
          <TabSixth
            characteristicsDevice={characteristicsDevice}
            characteristicsDeviceValue={characteristicsDeviceValue}
            checkboxDevice={checkboxDevice}
            checkboxDeviceValue={checkboxDeviceValue}
          />
          <TabSeventh
            colorsDevice={colorsDevice}
            colorsDeviceValue={colorsDeviceValue}
          />
          <TabEighth
            characteristicsDevice={characteristicsDevice}
            characteristicsDeviceValue={characteristicsDeviceValue}
          />
        </TabContext>
        <Button variant="outlined" onClick={handleSend} disabled={formValid}>
          Save Changes
        </Button>
      </Box>
    </>
  );
});
export default UpdateProduct;
