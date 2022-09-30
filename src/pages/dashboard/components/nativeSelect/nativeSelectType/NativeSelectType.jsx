import React, { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { observer } from "mobx-react-lite";

const NativeSelectType = observer(
  ({ device, generalDevice, setGeneralDevice }) => {
    const promiseOptions = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            device.types.map((type) => ({
              id: type.id,
              value: type,
              label: type.name,
            }))
          );
        }, 500);
      });
    const handleInputChange = (newValue) => {
      setGeneralDevice({
        ...generalDevice,
        category: {
          id: newValue.id,
          label: newValue.label,
          value: newValue.value,
        },
      });
      device.setSelectedType(newValue.value);
    };
    Object.values(generalDevice.category).every((categoryObj) => {
      if (categoryObj !== "") {
        device.setSelectedType(generalDevice.category.value);
      }
    });
    return (
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={generalDevice.category}
        loadOptions={promiseOptions}
        onChange={handleInputChange}
      />
    );
  }
);

export default NativeSelectType;
