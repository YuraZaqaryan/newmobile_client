import React, {useContext, useEffect} from "react";
import Slider from "@mui/material/Slider";
import CategoryTitle from "../categoryTitle/CategoryTitle";
import HorizonSwipe from "../../horizonScroll/HorizonSwipe";
import Store from "../../store/Store";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import {fetchTypes} from "../../../http/deviceAPI";

const CategoryGeneral = observer(({deviceTypeId, brandName, brandNamefilter}) => {
  const { device } = useContext(Context);
  const [typeAppropriate, setTypeAppropriate] = React.useState([]);
  const [value, setValue] = React.useState([500, 1900000]);
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const promiseOptions = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          setTypeAppropriate(device.types.filter(type => type.name === brandNamefilter))
        );
      });
    });
  };
  promiseOptions();
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
  },[device])
  return (
    <div className="category phone__category">
      <HorizonSwipe />
      <div className="category__main">
        <CategoryTitle title={brandName} />
        <div className="category__content">
          <div className="category__filter">
            <div className="category__price">
              <h3>Price</h3>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={1000}
                max={1900000}
                getAriaValueText={valuetext}
              />
              <div className="category__price__value">
                {value[0]}
                <span>․դր</span> &nbsp;-&nbsp;{value[1]}
                <span>․դր</span>
              </div>
            </div>
            <div className="category__brands">
              {device?.brands.filter((brand) => {
                return typeAppropriate.some(e => e.brands.some(i => i === brand.name))
              })
                    .map(brand => (
                        <div
                            style={{ cursor: "pointer" }}
                            key={brand.id}
                            onClick={() => brand.id === device.selectedBrand.id ? device.setSelectedBrand({}) : device.setSelectedBrand(brand)}
                            className={`brand${brand.id === device.selectedBrand.id ? " chosen" : ""}`}
                        >
                          <img src={process.env.REACT_APP_API_URL + "brand/" +  brand.img} alt={brand.name} />
                          <span>{brand.name}</span>
                        </div>
                    // ))
              ))}
            </div>
          </div>
          <div className="category__store">
            <Store valueOfPrice={value} deviceTypeId={deviceTypeId}/>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CategoryGeneral;
