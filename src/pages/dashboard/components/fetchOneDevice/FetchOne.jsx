import React, { useEffect } from "react";
import { fetchOneDevice } from "../../../../http/deviceAPI";

const FetchOne = ({
  device,
  id,

  generalDevice,
  setGeneralDevice,

  characteristicsDevice,
  setCharacteristicsDevice,

  colorsDevice,
  setColorsDevice,

  checkboxDevice,
  setCheckboxDevice,
}) => {


  useEffect(() => {
    fetchOneDevice(id).then((data) => {
      setGeneralDevice({
        ...generalDevice,
        name: data.name,
        price: data.price,
        credit: data.credit,
        category: { id: data.typeId, value: device.types.filter(type => type.id === data.typeId).map(type => type)[0], label: device.types.filter(type => type.id === data.typeId).map(type => type.name)[0]},
        brand: { id: data.brandId, value: device.brands.filter(brand => brand.id === data.brandId).map(brand => brand)[0], label: device.brands.filter(brand => brand.id === data.brandId).map(brand => brand.name)[0]},
        statusSell: data.statusSell,
        imagePath: process.env.REACT_APP_API_URL + data.img,
        multipleImageFetch: data.deviceImages,
      });
      setCharacteristicsDevice({
        ...characteristicsDevice,
        iosversion: data.info[0].iosVersion,
        androidversion: data.info[0].androidVersion,
        frontCamera: data.info[0].frontCamera,
        mainCamera: data.info[0].mainCamera,
        screenType: data.info[0].screenType,
        screenResolution: data.info[0].screenResolution,
        screenSize: data.info[0].screenSize,
        numberOfProcessorCores: data.info[0].numberOfProcessorCores,
        cpu: data.info[0].cpu,
        ram: data.info[0].ram,
        networkType: data.info[0].networkType,
        networkRange: data.info[0].networkRange,
        chargerType: data.info[0].chargerType,
        battery: data.info[0].battery,
        weight: data.info[0].weight,
        thickness: data.info[0].thickness,
        height: data.info[0].height,
        width: data.info[0].width,
        audio: data.info[0].audio,
        simCardQty: data.info[0].simCardQty,
      });
      setColorsDevice({
        ...colorsDevice,
        color1: {
          r: data.info[0].color1.split(",")[0],
          g: data.info[0].color1.split(",")[1],
          b: data.info[0].color1.split(",")[2],
          a: data.info[0].color1.split(",")[3],
        },
        color2: {
          r: data.info[0].color2.split(",")[0],
          g: data.info[0].color2.split(",")[1],
          b: data.info[0].color2.split(",")[2],
          a: data.info[0].color2.split(",")[3],
        },
        color3: {
          r: data.info[0].color3.split(",")[0],
          g: data.info[0].color3.split(",")[1],
          b: data.info[0].color3.split(",")[2],
          a: data.info[0].color3.split(",")[3],
        },
        color4: {
          r: data.info[0].color4.split(",")[0],
          g: data.info[0].color4.split(",")[1],
          b: data.info[0].color4.split(",")[2],
          a: data.info[0].color4.split(",")[3],
        },
        color5: {
          r: data.info[0].color5.split(",")[0],
          g: data.info[0].color5.split(",")[1],
          b: data.info[0].color5.split(",")[2],
          a: data.info[0].color5.split(",")[3],
        },
      });
      setCheckboxDevice({
        ...checkboxDevice,
        credit: data.credit,
        gps: data.info[0].gps,
        bluetooth: data.info[0].bluetooth,
        wifi: data.info[0].wifi,
        n4g: data.info[0]._4g,
        n3g: data.info[0]._3g,
        nfc: data.info[0].nfc,
        memory4: data.info[0].memory4,
        memory8: data.info[0].memory8,
        memory16: data.info[0].memory16,
        memory32: data.info[0].memory32,
        memory64: data.info[0].memory64,
        memory128: data.info[0].memory128,
        memory256: data.info[0].memory256,
        memory512: data.info[0].memory512,
        memory1: data.info[0].memory1t,
        cardSlot: data.info[0].cardSlot,
      });
    });
  }, [id]);
};

export default FetchOne;
