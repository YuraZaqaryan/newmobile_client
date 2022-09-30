import React from "react";
import AsyncSelect from "react-select/async";
import { observer } from "mobx-react-lite";

const NativeSelectBrand = observer(
  ({ device, generalDevice, setGeneralDevice }) => {
    const promiseOptions = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            device.brands.filter((brand) => brand.name !== "empty").map((brand) => ({
              id: brand.id,
              value: brand,
              label: brand.name,
            }))
          );
        }, 500);
      });
      const handleInputChange = (newValue) => {
        setGeneralDevice({
          ...generalDevice,
          brand: {id: newValue.id, label: newValue.label, value: newValue.value},
        });
        device.setSelectedBrand(newValue.value);
      };
      Object.values(generalDevice.brand).every(brandObj => {
        if(brandObj !== ""){
          device.setSelectedBrand(generalDevice.brand.value)
        }
      })
    return (
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={generalDevice.brand}
        loadOptions={promiseOptions}
        onChange={handleInputChange}
      />
    );
  }
);

export default NativeSelectBrand;
