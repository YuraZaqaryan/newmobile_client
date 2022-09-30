import { useState, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SearchButton from "../../UI/buttons/SearchButton";
import CloseButton from "../../UI/buttons/CloseButton";
import Facebook from "./../../images/icons/facebook.svg";
import Youtube from "./../../images/icons/youtube.svg";
import Logo from "./../../images/nmobile_white.png";
import phoneIco from "./../..//images/icons/phone.svg";
import "./header.scss";
import { Link as LinkRoute, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

import { Context } from "../../index";
import { ADMIN_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";

const HeaderComponent = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token')
  };

  const { t, i18n } = useTranslation(['header']);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [close, setClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="allheader">
        <div className="fixedHeader">
          <div className="header">
            <div className="upheader">
              <div className="upheadercontent">
                <div className="upheaderspace">
                  <div className="upheaderleft">
                    <a href="https://www.facebook.com/doctors.am.website">
                      <img src={Facebook} alt="" />
                    </a>
                    <a
                      href="https://www.youtube.com/user/Doctorsamofficial/videos"
                      className="logo"
                    >
                      <img src={Youtube} alt="youtube" />
                    </a>
                    <div className="adress__of__store">
                      <aside>
                        {t("header:store1")}, <span>{t("header:store2")}</span>
                      </aside>
                    </div>
                  </div>
                  <div className="upheaderright">
                    <div className="number__of__phone">
                      <img src={phoneIco} width={12} height={12} alt="phoneIco"/>
                      <i>098 - 83 - 01 - 80</i>
                    </div>
                    
                      {user.isAuth ? (
                        <div className="auth">
                          <div onClick={() => navigate(ADMIN_ROUTE)}>
                            {user.user.email}
                          </div>
                          <div onClick={() => logOut()}>
                            <img
                              src={
                                require("./../../images/icons/logout.svg").default
                              }
                              alt="logOut"
                            />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    <div className="armruseng">
                      <button onClick={() => changeLanguage("am-AM")}>
                        <img
                          src={require("./../../images/icons/Armenia_flag.png")}
                          alt="AM"
                        />
                      </button>
                    </div>
                    <div className="armruseng">
                      <button onClick={() => changeLanguage("en-US")}>
                        <img
                          src={require("./../../images/icons/UK_flag.png")}
                          alt="UK"
                        />
                      </button>
                    </div>
                    <div className="armruseng">
                      <button onClick={() => changeLanguage("ru-RU")}>
                        <img
                          src={require("./../../images/icons/Russia_flag.png")}
                          alt="RU"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <header className="downheader">
              <div className="downheadercontent">
                <div className="logodoc">
                  <LinkRoute to="/" onClick={toTop}>
                    <img src={Logo} alt="" />
                  </LinkRoute>
                </div>
                <div className="nav">
                  <ul>
                    <li>
                      <LinkRoute to="/" onClick={toTop}>
                        {t("header:main")}
                      </LinkRoute>
                    </li>
                    <li>
                      <HashLink smooth to="/#mainPage">
                        {t("header:store")}
                      </HashLink>
                    </li>
                    <li>
                      <LinkRoute to="/about">{t("header:aboutUs")}</LinkRoute>
                    </li>
                    <li>
                      <LinkRoute to="/contact">
                        {t("header:contactUs")}
                      </LinkRoute>
                    </li>
                  </ul>
                </div>
                {/* <div className="fakeItem"></div> */}
                <div
                  className={`styleFaSearch ${
                    isOpen ? "activeFaSearch" : "disableFaSearch"
                  }`}
                >
                  <div className="btn" onClick={() => setIsOpen(true)}>
                    <SearchButton />
                  </div>
                  {isOpen ? (
                    <div className="close_btn" onClick={() => setIsOpen(false)}>
                      <div className="closeInput">
                        <CloseButton />
                        <span>{t("header:close")}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    disabled={isOpen ? false : true}
                    placeholder={isOpen ? t("header:search") : ""}
                    autoFocus
                  />
                </div>
              </div>

              {/* Tablet menu */}
              <div className="allhidedispnone">
                <div className="allhidden" onClick={() => setClose(!close)}>
                  {close ? <CloseButton /> : <AiOutlineMenu />}
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      {close ? (
        <div className="menucontext">
          <div className="menucontent">
            <div className="menuspace">
              <div className="menutext">
                <LinkRoute to="/" onClick={toTop}>
                  {t("header:main")}
                </LinkRoute>
              </div>
              <div className="menutext">
                <HashLink smooth to="/#mainPage">
                  {t("header:store")}
                </HashLink>
              </div>
              <div className="menutext">
                <LinkRoute to="/about">{t("header:aboutUs")}</LinkRoute>
              </div>
              <div className="menutext">
                <LinkRoute to="/contact">{t("header:contactUs")}</LinkRoute>
              </div>
            </div>
          </div>
          <div className="menulanguages">
            <div className="languages">
              <div className="armruseng1">
                <button onClick={() => changeLanguage("am-AM")}>
                  <img
                    src={require("./../../images/icons/Armenia_flag.png")}
                    alt="AM"
                  />
                </button>
              </div>
              <div className="armruseng1">
                <button onClick={() => changeLanguage("en-US")}>
                  <img
                    src={require("./../../images/icons/UK_flag.png")}
                    alt="UK"
                  />
                </button>
              </div>
              <div className="armruseng1">
                <button onClick={() => changeLanguage("ru-RU")}>
                  <img
                    src={require("./../../images/icons/Russia_flag.png")}
                    alt="RU"
                  />
                </button>
              </div>
            </div>
            <div className="logos">
              <a href="https://www.facebook.com/doctors.am.website">
                <img src={Facebook} alt="" />
              </a>
              <a href="https://www.facebook.com/doctors.am.website">
                <img src={Youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
});

export default HeaderComponent;
