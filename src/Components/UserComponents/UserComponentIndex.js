import React from 'react'
import Dashboard from './Dashboard'
import HeaderAlert from './HeaderAlert'
import SideBarNav from './SideBarNav'
import UserHeader from './UserHeader'
import './Usercss.css'

export default function UserComponentIndex() {
  return (
    <>
     <UserHeader/>
     <HeaderAlert/>
     <SideBarNav/>
     <Dashboard/>
    </>
  )
}
