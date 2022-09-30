import React, { useEffect, useState, useContext } from 'react'
import './sidebar.scss'
import '../../layout/main-layout.scss'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import WidgetsIcon from '@mui/icons-material/Widgets';
import sidebarNav from '../../configs/sidebarNav'

import { Context } from '../../../../index'

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    let navigate = useNavigate();

    const {user} = useContext(Context)

    useEffect(() => {
        const curPath = window.location.pathname.split('/admin')[1]
        const curPathWithDashboard = 'dashboard' + curPath
        const activeItem = sidebarNav.findIndex(item => item.section === curPathWithDashboard)
        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    },[location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        document.querySelector('.main__content').style.borderRadius = "0"
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500)
    }

    const Logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(`/login`);
    }
  return (
    <div className="sidebar">
        <div className="sidebar__logo">
            <WidgetsIcon />
            {/* <img src={images.logo} alt="logo" /> */}
            <div className="sidebar-close" onClick={closeSidebar}>
                <i className="bx bx-x"></i>
            </div>
        </div>
        <div className="sidebar__menu">
            {
                sidebarNav.map((nav, index) => (
                    <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                        <div className='sidebar__menu__item__icon'>
                            {nav.icon}
                        </div>
                        <div className="sidebar__menu__item__txt">
                            {nav.text}
                        </div>
                    </Link>
                ))
            }
            <div className="sidebar__menu__item">
                <div className="sidebar__menu__item__icon">
                    <i className="bx bx-log-out"></i>
                </div>
                <div className="sidebar__menu__item__txt" onClick={Logout}>
                    Logout
                </div>
            </div>
        </div>
    </div>
  )
}
