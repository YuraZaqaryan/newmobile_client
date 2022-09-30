import React, { useEffect, useRef, useContext } from "react";
import VanillaTilt from "vanilla-tilt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./store.scss";
import { useTranslation } from "react-i18next";
import { Context } from "../../index";
import { fetchBrands, fetchDevices } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

// VANILLA
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return <div ref={tilt} {...rest} />;
}

const Store = observer(({valueOfPrice, deviceTypeId}) => {
  const navigate = useNavigate();

  const { device } = useContext(Context);

  const { t } = useTranslation("storeItems");

  useEffect(() => {
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => {
      device.setDevices(data.rows);
    });
  }, [device]);

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id).then((data) => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    });
  },[device.selectedType, device.selectedBrand])

  const toTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth", //animation
    });
  };
  const deviceFilterCheck = device => device.status && valueOfPrice ? (device.price <= valueOfPrice[1] && device.price >= valueOfPrice[0]) && deviceTypeId && device.typeId === deviceTypeId : device.status && device;
  return (
    <>
      <div className="store" id="store">
        {device.devices.filter(deviceFilterCheck)
        .map((device) => {
          const userAmount = Number(device.price /* amount */);

          const calculatedInterest = Number(24 /* interest */) / 100 / 12;

          // const calculatedPayments12 = Number(1 /* years */) * 12;
          // const calculatedPayments24 = Number(2 /* years */) * 12;
          const calculatedPayments36 = Number(3 /* years */) * 12;

          // const x12 = Math.pow(1 + calculatedInterest, calculatedPayments12);
          // const x24 = Math.pow(1 + calculatedInterest, calculatedPayments24);
          const x36 = Math.pow(1 + calculatedInterest, calculatedPayments36);

          // const monthly12 = (userAmount * x12 * calculatedInterest) / (x12 - 1);
          // const monthly24 = (userAmount * x24 * calculatedInterest) / (x24 - 1);
          const monthly36 = (userAmount * x36 * calculatedInterest) / (x36 - 1);

          // const monthlyPaymentCalculated12 = monthly12;
          // const monthlyPaymentCalculated24 = monthly24;
          const monthlyPaymentCalculated36 = monthly36;

          // const totalPaymentCalculated12 = monthly12 * calculatedPayments12;
          // const totalPaymentCalculated24 = monthly24 * calculatedPayments24;
          const totalPaymentCalculated36 = monthly36 * calculatedPayments36;
          return (
            <>
              <Tilt key={device.id}>
                <div className="wrap">
                  <div className="head">
                    <p className={device.statusSell}>
                      {t(`storeItems:${device.statusSell}`)}
                    </p>
                  </div>
                  <div className="image"
                    onClick={() => {
                      navigate(DEVICE_ROUTE + "/" + device.id);
                      toTop();
                    }}
                  >
                    <img
                      src={process.env.REACT_APP_API_URL + device.img}
                      alt={device.name}
                    />
                  </div>
                  <div className="text">
                    <b>{device.name}</b>
                    {device.price !== "" ? <span>{device.price}․դր</span> : ""}
                    <br></br>
                    <i>
                      {device.credit ? (
                        <>
                          {t("storeItems:cash")}{" "}
                          {totalPaymentCalculated36.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                          {t("storeItems:amd")}
                        </>
                      ) : (
                        ""
                      )}
                    </i>
                    <p alt="3 տարով">
                      {device.credit !== false ? (
                        <>
                          <span>{t("storeItems:monthly")}</span>{" "}
                          {monthlyPaymentCalculated36.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                          {t("storeItems:amd")}
                        </>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <span
                    className="advance"
                    onClick={() => {
                      navigate(DEVICE_ROUTE + "/" + device.id);
                      toTop();
                    }}
                  >
                    <AddShoppingCartIcon /> {t("storeItems:advance")}
                  </span>
                </div>
              </Tilt>
            </>
          );
        })}
      </div>
    </>
  );
});
export default Store;
