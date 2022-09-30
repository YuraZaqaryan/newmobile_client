import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../../http/deviceAPI";
import "./devicePage.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";

export default function DevicePage() {
  const { t } = useTranslation(["devicePage", "storeItems"]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [device, setDevice] = useState({
    createdAt: "",
    deviceImages: [],
    info: [
      {
        iosVersion: "",
        androidVersion: "",
        frontCamera: "",
        mainCamera: "",
        screenType: "",
        screenResolution: "",
        screenSize: "",
        numberOfProcessorCores: "",
        cpu: "",
        ram: "",
        networkType: "",
        networkRange: "",
        chargerType: "",
        battery: "",
        gps: "",
        bluetooth: "",
        wifi: "",
        _4g: "",
        _3g: "",
        nfc: "",
        memory4: "",
        memory8: "",
        memory16: "",
        memory32: "",
        memory64: "",
        memory128: "",
        memory256: "",
        memory512: "",
        memory1t: "",
        cardSlot: "",
        weight: "",
        thickness: "",
        height: "",
        width: "",
        audio: "",
        simCardQty: "",
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        color5: "",
      },
    ],
    advanceProp: [],
  });
  const [creditCalculate, setCreditCalculate] = useState({
    monthlyPayment12: "",
    monthlyPayment24: "",
    monthlyPayment36: "",

    totalPayment12: "",
    totalPayment24: "",
    totalPayment36: "",

    totalInterest12: "",
    totalInterest24: "",
    totalInterest36: "",

    isResult: false,
  });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => {
      setDevice(data);
    });

    // Check empty Table

    setTimeout(() => {
      const generalDiv = document.querySelectorAll(".content__bottom");
      for (let divs of generalDiv) {
        let divChild = divs.getElementsByTagName("div");
        for (const tables of divChild) {
          let table = tables.getElementsByTagName("table")[0];
          if (table.textContent === "") {
            tables.classList.add("isEmpty");
          }
        }
      }
    }, 500);
    // Check empty Table END
  }, [id]);

  const calculateResults = () => {
    const userAmount = Number(device.price /* amount */);

    const calculatedInterest = Number(24 /* interest */) / 100 / 12;

    const calculatedPayments12 = Number(1 /* years */) * 12;
    const calculatedPayments24 = Number(2 /* years */) * 12;
    const calculatedPayments36 = Number(3 /* years */) * 12;

    const x12 = Math.pow(1 + calculatedInterest, calculatedPayments12);
    const x24 = Math.pow(1 + calculatedInterest, calculatedPayments24);
    const x36 = Math.pow(1 + calculatedInterest, calculatedPayments36);

    const monthly12 = (userAmount * x12 * calculatedInterest) / (x12 - 1);
    const monthly24 = (userAmount * x24 * calculatedInterest) / (x24 - 1);
    const monthly36 = (userAmount * x36 * calculatedInterest) / (x36 - 1);

    if (isFinite(monthly12)) {
      const monthlyPaymentCalculated12 = monthly12;
      const monthlyPaymentCalculated24 = monthly24;
      const monthlyPaymentCalculated36 = monthly36;

      const totalPaymentCalculated12 = monthly12 * calculatedPayments12;
      const totalPaymentCalculated24 = monthly24 * calculatedPayments24;
      const totalPaymentCalculated36 = monthly36 * calculatedPayments36;

      const totalInterestCalculated12 =
        monthly12 * calculatedPayments12 - userAmount;
      const totalInterestCalculated24 =
        monthly24 * calculatedPayments24 - userAmount;
      const totalInterestCalculated36 =
        monthly36 * calculatedPayments36 - userAmount;

      setCreditCalculate({
        monthlyPayment12: monthlyPaymentCalculated12,
        monthlyPayment24: monthlyPaymentCalculated24,
        monthlyPayment36: monthlyPaymentCalculated36,

        totalPayment12: totalPaymentCalculated12,
        totalPayment24: totalPaymentCalculated24,
        totalPayment36: totalPaymentCalculated36,

        totalInterest12: totalInterestCalculated12,
        totalInterest24: totalInterestCalculated24,
        totalInterest36: totalInterestCalculated36,

        isResult: true,
      });
    }
    return;
  };

  useEffect(() => {
    calculateResults();
  }, [device]);

  const memoryState =
    device.info[0].memory4 ||
    device.info[0].memory8 ||
    device.info[0].memory16 ||
    device.info[0].memory32 ||
    device.info[0].memory64 ||
    device.info[0].memory128 ||
    device.info[0].memory256 ||
    device.info[0].memory512 ||
    device.info[0].memory1t;
  const networkState =
    device.info[0].gps ||
    device.info[0].bluetooth ||
    device.info[0].wifi ||
    device.info[0]._4g ||
    device.info[0]._3g ||
    device.info[0].nfc;

  let mainCameraArray = [];
  const mainCameraSplit = device.info[0].mainCamera.split("+");
  for (let cameraSplit of mainCameraSplit) {
    mainCameraArray.push(cameraSplit + " MP");
  }
  console.log(device.deviceImages);

  return (
    <div className="device__page">
      <div className="device__page__content">
        <div className="content__top">
          <div className="slider">
            <Swiper
              tag="section"
              wrapperTag="ul"
              className="main__images"
              // loop={true}
              modules={[Pagination, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              grabCursor={true}
              pagination
              slidesPerView={1}
            >
              <SwiperSlide tag="li">
                <img
                  width={300}
                  height={300}
                  src={process.env.REACT_APP_API_URL + device.img}
                  alt={device.name}
                />
              </SwiperSlide>
              {device.deviceImages.map(image => (
                <SwiperSlide tag="li" key={image.id}>
                  <img
                    width={300}
                    height={300}
                    src={process.env.REACT_APP_API_URL + image.name}
                    alt={image.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              // loop={true}
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              className="thumbs__images"
            >
              <SwiperSlide>
                <img
                  width={300}
                  height={300}
                  src={process.env.REACT_APP_API_URL + device.img}
                  alt={device.name}
                />
              </SwiperSlide>
              {device.deviceImages.map(image => (
                <SwiperSlide tag="li" key={image.id}>
                  <img
                    width={300}
                    height={300}
                    src={process.env.REACT_APP_API_URL + image.name}
                    alt={image.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="small__info">
            <h2>{device.name}</h2>
            <div className="price">
              {device.price !== 0 && (
                <p>
                  ֏{" "}
                  {Math.round(device.price).toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </p>
              )}
              {device.credit && (
                <ul className="credit">
                  <li>
                    <span>
                      ֏{" "}
                      {creditCalculate.monthlyPayment12.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}
                    </span>
                    <small>12 {t("devicePage:month")}</small>
                  </li>
                  <li>
                    <span>
                      ֏{" "}
                      {creditCalculate.monthlyPayment24.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}
                    </span>
                    <small>24 {t("devicePage:month")}</small>
                  </li>
                  <li>
                    <span>
                      ֏{" "}
                      {creditCalculate.monthlyPayment36.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}
                    </span>
                    <small>36 {t("devicePage:month")}</small>
                  </li>
                </ul>
              )}
              <div className="price__cash__cashless">
                {!!device.price && device.credit ? (
                  <ul>
                    {device.credit && (
                      <li>
                        <span>{t("devicePage:credit")}</span>
                        <span className="credit__total">
                          <span>
                            ֏{" "}
                            {creditCalculate.totalPayment12.toLocaleString(
                              undefined,
                              { maximumFractionDigits: 2 }
                            )}
                            <small>12 {t("devicePage:month")}</small>
                          </span>

                          <span>
                            ֏{" "}
                            {creditCalculate.totalPayment24.toLocaleString(
                              undefined,
                              { maximumFractionDigits: 2 }
                            )}
                            <small>24 {t("devicePage:month")}</small>
                          </span>

                          <span>
                            ֏{" "}
                            {creditCalculate.totalPayment36.toLocaleString(
                              undefined,
                              { maximumFractionDigits: 2 }
                            )}
                            <small>36 {t("devicePage:month")}</small>
                          </span>
                        </span>
                      </li>
                    )}
                    {!!device.price && (
                      <li>
                        <span>{t("devicePage:cash")}</span>
                        <span>
                          ֏{" "}
                          {Math.round(device.price).toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </li>
                    )}
                  </ul>
                ) : null}
              </div>
            </div>
            {device.info[0].iosVersion || device.info[0].androidVersion ? (
              <div className="OStype">
                <span>{t("devicePage:osVersion")}</span>
                <span>
                  {device.info[0].iosVersion
                    ? `IOS ${device.info[0].iosVersion}`
                    : `Android ${device.info[0].androidVersion}`}
                </span>
              </div>
            ) : null}
            <div className="color__ram">
              {device.info[0].color1 !== "0,0,0,0" ||
              device.info[0].color2 !== "0,0,0,0" ||
              device.info[0].color3 !== "0,0,0,0" ||
              device.info[0].color4 !== "0,0,0,0" ||
              device.info[0].color5 !== "0,0,0,0" ? (
                <div className="color">
                  <h5>{t("devicePage:color")}</h5>
                  <ul>
                    {device.info[0].color1 !== "0,0,0,0" && (
                      <li
                        style={{ background: `rgba(${device.info[0].color1})` }}
                      ></li>
                    )}
                    {device.info[0].color2 !== "0,0,0,0" && (
                      <li
                        style={{ background: `rgba(${device.info[0].color2})` }}
                      ></li>
                    )}
                    {device.info[0].color3 !== "0,0,0,0" && (
                      <li
                        style={{ background: `rgba(${device.info[0].color3})` }}
                      ></li>
                    )}
                    {device.info[0].color4 !== "0,0,0,0" && (
                      <li
                        style={{ background: `rgba(${device.info[0].color4})` }}
                      ></li>
                    )}
                    {device.info[0].color5 !== "0,0,0,0" && (
                      <li
                        style={{ background: `rgba(${device.info[0].color5})` }}
                      ></li>
                    )}
                  </ul>
                </div>
              ) : null}
              {!!device.info[0].ram && (
                <div className="ram">
                  <h5>{t("devicePage:ram")}</h5>
                  <p>{device.info[0].ram}GB</p>
                </div>
              )}
            </div>
            {memoryState ? (
              <div className="memory">
                <h5>{t("devicePage:memory")}</h5>
                <ul>
                  {device.info[0].memory4 && <li>4GB</li>}
                  {device.info[0].memory8 && <li>8GB</li>}
                  {device.info[0].memory16 && <li>16GB</li>}
                  {device.info[0].memory32 && <li>32GB</li>}
                  {device.info[0].memory64 && <li>64GB</li>}
                  {device.info[0].memory128 && <li>128GB</li>}
                  {device.info[0].memory256 && <li>256GB</li>}
                  {device.info[0].memory512 && <li>512GB</li>}
                  {device.info[0].memory1t && <li>1T</li>}
                </ul>
              </div>
            ) : null}
            <div
              className={`available ${
                device.statusSell === "inStock"
                  ? "inStock"
                  : "limitedOutOfStock"
              }`}
            >
              {device.statusSell === "inStock" && (
                <img
                  src={require("./../../images/icons/check.svg").default}
                  alt="inStock"
                />
              )}
              {device.statusSell === "limited" && (
                <img
                  src={require("./../../images/icons/exclamation.svg").default}
                  alt="limited"
                />
              )}
              {device.statusSell === "outOfStock" && (
                <img
                  src={require("./../../images/icons/outOfStock.svg").default}
                  alt="outOfStock"
                />
              )}
              {t(`storeItems:${device.statusSell}`)}
            </div>
            <div className="banks">
              <span>
                {t("devicePage:weCooperateWith.part1")}
                <span>{t("devicePage:weCooperateWith.part2")}</span>{" "}
              </span>
              <img
                src={require("./../../images/bank/ineco_logo.svg").default}
                alt="InecoBank"
              />
              <img
                src={require("./../../images/bank/vtb_logo.png")}
                alt="VTBbank"
              />
              <img
                src={require("./../../images/bank/aeb_logo.jpg")}
                alt="AEBbank"
              />
              <img
                src={require("./../../images/bank/ameria_logo.png")}
                alt="Ameriabank"
              />
              <img
                src={require("./../../images/bank/uni_logo.png")}
                alt="Unibank"
              />
              <img
                src={require("./../../images/bank/acba_logo.png")}
                alt="AcbaBank"
              />
            </div>
          </div>
        </div>
        <div className="content__bottom">
          <div className="general">
            <h2>{t("devicePage:general")}</h2>
            <table>
              <tr>
                <td>{t("devicePage:name")}</td>
                <td>{device.name}</td>
              </tr>
              <tr>
                <td>{t("devicePage:announcementYear")}</td>
                <td>{device.createdAt.slice(0, 4)}</td>
              </tr>
              {device.info[0].iosVersion || device.info[0].androidVersion ? (
                <tr>
                  <td>{t("devicePage:osVersion")}</td>
                  <td>
                    {device.info[0].iosVersion
                      ? `IOS ${device.info[0].iosVersion}`
                      : `Android ${device.info[0].androidVersion}`}
                  </td>
                </tr>
              ) : null}
            </table>
          </div>

          <div className="display">
            <h2>{t("devicePage:display")}</h2>
            <table>
              {device.info[0].screenType && (
                <tr>
                  <td>{t("devicePage:screenType")}</td>
                  <td>{device.info[0].screenType}</td>
                </tr>
              )}
              {device.info[0].screenResolution && (
                <tr>
                  <td>{t("devicePage:screenResolution")}</td>
                  <td>{device.info[0].screenResolution}</td>
                </tr>
              )}
              {device.info[0].screenSize && (
                <tr>
                  <td>{t("devicePage:screenSize")}</td>
                  <td>{device.info[0].screenSize} inch</td>
                </tr>
              )}
            </table>
          </div>

          <div className="memory">
            <h2>{t("devicePage:memoryAndCpu")}</h2>
            <table>
              {device.info[0].cpu && (
                <tr>
                  <td>{t("devicePage:cpu")}</td>
                  <td>{device.info[0].cpu}</td>
                </tr>
              )}
              {device.info[0].numberOfProcessorCores && (
                <tr>
                  <td>{t("devicePage:numberOfProcessorCores")}</td>
                  <td>{device.info[0].numberOfProcessorCores}</td>
                </tr>
              )}
              {!!device.info[0].ram && (
                <tr>
                  <td>{t("devicePage:ram")}</td>
                  <td>{device.info[0].ram}GB</td>
                </tr>
              )}
              {memoryState ? (
                <>
                  <tr>
                    <td>{t("devicePage:memory")}</td>
                    <td>
                      {device.info[0].memory4 && "4GB "}
                      {device.info[0].memory8 && "8GB "}
                      {device.info[0].memory16 && "16GB "}
                      {device.info[0].memory32 && "32GB "}
                      {device.info[0].memory64 && "64GB "}
                      {device.info[0].memory128 && "128GB "}
                      {device.info[0].memory256 && "256GB "}
                      {device.info[0].memory512 && "512GB "}
                      {device.info[0].memory1t && "1T "}
                    </td>
                  </tr>
                  <tr>
                    <td>{t("devicePage:memoryCardSlot")}</td>
                    <td>
                      {device.info[0].cardSlot
                        ? t("devicePage:yes")
                        : t("devicePage:no")}
                    </td>
                  </tr>
                </>
              ) : null}
            </table>
          </div>

          <div className="camera">
            <h2>{t("devicePage:camera")}</h2>
            <table>
              {device.info[0].frontCamera && (
                <tr>
                  <td>{t("devicePage:frontCamera")}</td>
                  <td>{device.info[0].frontCamera} MP</td>
                </tr>
              )}
              {device.info[0].mainCamera && (
                <tr>
                  <td>{t("devicePage:mainCamera")}</td>
                  <td>
                    {mainCameraArray.map((camera, i, row) => {
                      if (i + 1 === row.length) {
                        return camera;
                      } else {
                        return camera + " +";
                      }
                    })}
                  </td>
                </tr>
              )}
            </table>
          </div>

          <div className="network">
            <h2>{t("devicePage:network")}</h2>
            <table>
              {device.info[0].networkType && (
                <tr>
                  <td>{t("devicePage:standartNetwork")}</td>
                  <td>{device.info[0].networkType}</td>
                </tr>
              )}
              {device.info[0].networkRange && (
                <tr>
                  <td>{t("devicePage:4GLteNetworkRange")}</td>
                  <td>{device.info[0].networkRange}</td>
                </tr>
              )}
              {networkState ? (
                <>
                  <tr>
                    <td>GPS</td>
                    <td>
                      {device.info[0].gps
                        ? t("devicePage:yes")
                        : t("devicePage:no")}
                    </td>
                  </tr>
                  <tr>
                    <td>Bluetooth</td>
                    <td>
                      {device.info[0].bluetooth
                        ? t("devicePage:yes")
                        : t("devicePage:no")}
                    </td>
                  </tr>
                  <tr>
                    <td>Wifi {t("devicePage:network")}</td>
                    <td>
                      {device.info[0].wifi
                        ? t("devicePage:yes")
                        : t("devicePage:no")}
                    </td>
                  </tr>
                  <tr>
                    <td>3G {t("devicePage:network")}</td>
                    <td>
                      {device.info[0]._3g
                        ? t("devicePage:yes")
                        : t("devicePage:no")}
                    </td>
                  </tr>
                  <tr>
                    <td>4G {t("devicePage:network")}</td>
                    <td>
                      {device.info[0]._4g
                        ? t("devicePage:yes")
                        : t("devicePage:no")}
                    </td>
                  </tr>
                  <tr>
                    <td>5G {t("devicePage:network")}</td>
                    <td>In the process ...</td>
                  </tr>
                  <tr>
                    <td>NFC</td>
                    <td>
                      {device.info[0].nfc
                        ? t("devicePage:yes")
                        : t("devicePage:no")}
                    </td>
                  </tr>
                </>
              ) : null}
            </table>
          </div>

          <div className="power">
            <h2>{t("devicePage:power")}</h2>
            <table>
              {device.info[0].chargerType && (
                <tr>
                  <td>{t("devicePage:chargerType")}</td>
                  <td>{device.info[0].chargerType}</td>
                </tr>
              )}
              {!!device.info[0].battery && (
                <tr>
                  <td>{t("devicePage:batteryCapacity")}</td>
                  <td>{device.info[0].battery} mAh</td>
                </tr>
              )}
            </table>
          </div>

          <div className="other">
            <h2>{t("devicePage:other")}</h2>
            <table>
              {device.info[0].weight && (
                <tr>
                  <td>{t("devicePage:weight")}</td>
                  <td>{device.info[0].weight} g</td>
                </tr>
              )}
              {device.info[0].thickness && (
                <tr>
                  <td>{t("devicePage:thickness")}</td>
                  <td>{device.info[0].thickness} mm</td>
                </tr>
              )}
              {device.info[0].height && (
                <tr>
                  <td>{t("devicePage:height")}</td>
                  <td>{device.info[0].height} mm</td>
                </tr>
              )}
              {device.info[0].width && (
                <tr>
                  <td>{t("devicePage:width")}</td>
                  <td>{device.info[0].width} mm</td>
                </tr>
              )}
              {device.info[0].audio && (
                <tr>
                  <td>{t("devicePage:audio")}</td>
                  <td>{device.info[0].audio}</td>
                </tr>
              )}
              {!!device.info[0].simCardQty && (
                <tr>
                  <td>{t("devicePage:simCardQty")}</td>
                  <td>{device.info[0].simCardQty} SIM</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
    //   {device.info.map((info, index) =>
    //     <Row key={info.id} style={{background : index % 2 === 0 ? "lightgray" : "transparent", padding : "10px"}}>
    //       {info.title} : {info.description}
    //     </Row>
    //   )}
    // </Row>
    //   </Container>
  );
}
