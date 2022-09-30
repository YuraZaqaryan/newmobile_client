import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from './../../images/nmobile_black.png'
import Store1 from './../../images/store1.JPG'
import Store2 from './../../images/store2.png'
import Store3 from './../../images/store3.JPG'

import './aboutus.css'

export default function Aboutus() {
      const { t } = useTranslation('aboutPage');
  return (
      <div className='contentAboutus'>
        <h1>{t("aboutPage:aboutUs:about")} <span>{t("aboutPage:aboutUs:us")}</span></h1>
        <div className='aboutus'>
            <div className="itemsAboutus">
                <div className="itemAboutus">
                      <img src={Store1} alt="store1" data-aos="fade-up" data-aos-duration="1500"/>
                      <img src={Store3} alt="store3" data-aos="fade-down" data-aos-duration="2000"/>
                </div>
                <div className="itemAboutus">
                  <img src={Store2} alt="store2" />
                    <p><img src={Logo} alt="logo" />{t("aboutPage:aboutUsInfo:infoStart")} <span>{t("aboutPage:aboutUsInfo:infoEnd")}</span></p>
                </div>
            </div>
        </div>
      </div>
  )
}
