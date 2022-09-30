import React, {useContext} from 'react'
import './topnav.scss'
import UserInfo from '../user-info/UserInfo'
import { data } from '../../constants'
import {Context} from "../../../../index";

export default function Topnav() {
    const {user} = useContext(Context)

    const openSidebar = () => {
      document.body.classList.add('sidebar-open')
  }
  return (
    <div className="topnav">
        <UserInfo user={user}/>
        <div className="sidebar-toggle" onClick={openSidebar}>
            <i className="bx bx-menu-alt-right"></i>
        </div>
    </div>
  )
}
