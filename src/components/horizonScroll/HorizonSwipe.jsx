import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { useTranslation } from 'react-i18next'
import { ACCESSORIES_CATEGORY_ROUTE, CAMERAS_CATEGORY_ROUTE, COMPUTERS_CATEGORY_ROUTE, EQUIPMENTS_CATEGORY_ROUTE, PHONES_CATEGORY_ROUTE, TABLETS_CATEGORY_ROUTE, WATCHES_CATEGORY_ROUTE } from '../../utils/consts'
import { Link, useNavigate } from 'react-router-dom'
 const HorizonSwipe = () => {
  const { t } = useTranslation("swiper");
  const navigate = useNavigate()
  const toTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth", //animation
    });
  };
    const HorizonSwipeData = [
      {
        id : 1,
        image : require('./../../images/ScrollMenu/mobile_ico.png'),
        name : 'phones',
        url : PHONES_CATEGORY_ROUTE
    },
    {
        id : 2,
        image : require('./../../images/ScrollMenu/ipad_ico.png'),
        name : 'tablets',
        url : TABLETS_CATEGORY_ROUTE
    },
    {
        id : 3,
        image : require('./../../images/ScrollMenu/watch_ico.png'),
        name : 'watches',
        url : WATCHES_CATEGORY_ROUTE
    },
    {
        id : 4,
        image : require('./../../images/ScrollMenu/pc_ico.png'),
        name : 'computers',
        url : COMPUTERS_CATEGORY_ROUTE
    },
    {
        id : 5,
        image : require('./../../images/ScrollMenu/accessories_ico.png'),
        name : 'accessories',
        url : ACCESSORIES_CATEGORY_ROUTE
    },
    {
        id : 6,
        image : require('./../../images/ScrollMenu/camera_ico.png'),
        name : 'photoCameras',
        url : CAMERAS_CATEGORY_ROUTE
    },
    {
        id : 7,
        image : require('./../../images/ScrollMenu/gamepad_ico.png'),
        name : 'equipments',
        url : EQUIPMENTS_CATEGORY_ROUTE
    }
    ]
  return (
    <Swiper
        className="swiper__menu"
        modules={[Navigation, Mousewheel]}
        navigation
        // mousewheel={{ sensivity : 1 }}
        loop
        loopedSlides={6}
        freeMode
        spaceBetween={1}
        slidesPerView={6}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            // when window width is >= 640px
            0: {
                slidesPerView: 2,
              },
            // when window width is >= 480px
              480: {
                slidesPerView: 3,
                // spaceBetween: 30
              },
              // when window width is >= 640px
              705: {
                slidesPerView: 4,
                // spaceBetween: 40
              },
              1366: {
                slidesPerView: 6,
                // spaceBetween: 40
              },
              1920: {
                slidesPerView: 7,
                // spaceBetween: 40
              },
          }}
    >
        {HorizonSwipeData.map(slide => (
        <SwiperSlide key={slide.id} className="menu__slide" onClick={() => {navigate(slide.url); toTop(); }}>
            <div className='menu__slide__content' >
                <div className='menu__slide__image'>
                    <img src={slide.image} alt={slide.name}/>
                </div>
                <div className='menu__slide__name'>
                    <Link to={slide.url}>{t(`${slide.name}`)}</Link>
                </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
  )
}
export default HorizonSwipe;