import React from 'react'
import './main-layout.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import Topnav from '../components/Topnav/Topnav'
import { Outlet } from 'react-router-dom'
export default function MainLayout() {
  return (
    <>
        <Sidebar />
        <div className="main">
              <div className="main__content">
                  <Topnav />
                <Outlet />
            </div>
        </div>
    </>
  )
}
