import React from 'react'
import Visa from './../../images/visa.png'
import Mastercard from './../../images/mastercard.png'
import Maestro from './../../images/maestro.png'
import Arca from './../../images/arca.png'
import Logo from './../../images/nmobile_white.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from '@mui/icons-material/YouTube'
import './footer.css'
import { useTranslation } from 'react-i18next'
import { Link as LinkRoute } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () =>{
    const toTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    const { t } = useTranslation(['header', 'footer']);
	return(
		<div id="footer" className="footer">
    <div className="up">
        <ul className="ulf">
        <li className="follotowme">{t("footer:joinUs")}</li>
            <li className="inset"><a href="https://www.facebook.com/MobileArmeniaNew" rel="noreferrer" target="_blank"><FacebookIcon /></a></li>
            <li><a href="https://instagram.co/newmobile" rel="noreferrer" target="_blank"><InstagramIcon /></a></li>
            <li><a href="https://youtube.com/newmobile"  rel="noreferrer" target="_blank"><YouTubeIcon /></a></li>
        </ul>
        <ul className="menu_footer">
            <li><LinkRoute to='/' onClick={toTop}>{t('header:main')}</LinkRoute></li>
            <li><HashLink smooth to='/#mainPage'>
                      {t("header:store")}
                    </HashLink></li>
            <li><LinkRoute to='/about'>{t("header:aboutUs")}</LinkRoute></li>
            <li><LinkRoute to='/'>{t("header:contactUs")}</LinkRoute></li>
        </ul>
    </div>
    <div className="middle">
        <ul className="uld">
            <li><span><b>+374 44-25-05-25</b><small>(WhatsApp(+374 44-25-05-25))</small> <br></br><i>{t("footer:answerQuestions")}</i></span> </li>
            <li className="worked_time"><span><b>{t("footer:workinghours")}</b> <br></br><i>{t("footer:monSat")} 10:00 -  20:00<br></br>  {t("footer:sunday")}{" "} 11:00 - 19:00</i></span></li>
            <li> <span><b>{t("footer:serviceCenter")}</b> <br></br><i><a href="/mysqltnayin/newmobile/" className="service_centre">{t("footer:qualityService")}</a></i></span></li>
        </ul>
    </div>
    <div className="down">
        <ul className="ul_logo">
            <li><img src={Logo} alt="NewMobileLogo" className="logofooter" /></li>
            <li>{(new Date().getFullYear())} newmobile.am  <span> {"\u00A0"}
              {t("footer:allRightsReserved")}</span></li>
        </ul>
        <ul className="cards">
            <li><img src={Visa} alt="Visa" /></li>
            <li><img src={Mastercard} alt="MasterCard" /></li>
            <li><img src={Maestro} alt="Maestro" /></li>
            <li><img src={Arca} alt="Arca" /></li>
        </ul>
    </div>
</div>
)
}
export default Footer