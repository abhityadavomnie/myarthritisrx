import React, { useEffect, useState } from 'react'
import CoachChildNav from './CoachChildNav'
import CoachHeader from './CoachHeader';
import './Coach.css'
import NewUserList from './NewUserList';
import { Outlet } from 'react-router-dom';
import CoachLogin from './CoachLogin';


export default function CoachIndex() {

  const [isCoachLoggedIn, setIsCoachLoggedIn] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem('token') != null) {
      setIsCoachLoggedIn(true);
    } else {
      setIsCoachLoggedIn(false);
    }
  }, [window.sessionStorage.getItem('token')])

  return (
    isCoachLoggedIn ? (<><CoachHeader />
      <CoachChildNav />
      <Outlet><NewUserList/> </Outlet></>) : (<CoachLogin login={setIsCoachLoggedIn} />)

  )
}
