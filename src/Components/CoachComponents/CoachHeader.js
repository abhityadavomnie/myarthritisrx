import React from 'react'
import { useNavigate } from "react-router-dom";


export default function CoachHeader(props) {
  const nav= useNavigate();
  
  const CoachLogOut=()=>{
    window.sessionStorage.removeItem('token');
    window.location.reload(false); 
    nav('/coach');
  }

  return (
    <header className="page-header fl-fix inner">
    <div className="full-wrapper">
      <div className="header-main c-white d-f ai-c jc-sb w100 ">
        <div className="nav-toggle">
          <span />
        </div>
        <a href="/" className="logo" title="MyArthritisRx">
          <img src="/assets/images/logo.png" alt="MyArthritisRx Logo" />
        </a>
        <div className="right-menu">
          <nav
            className="site-nav pos-r main-navigation"
            aria-label="Main Menu Navigation"
          >
            <div className="login-menu">
              <ul className="page-menu d-f ai-c">
                <li className="user-name">
                  
                  <a href="javascript:void(0)" title="Hi Siteadmin !">
                    Hi Siteadmin !
                  </a>
                </li>
                <li className="user-account">
                  <a href="/coach/new-users" title="Reports">
                    <i className="fas fa-border-all marR20" />
                    Reports
                  </a>
                </li>
                <li className="user-profile Logout">
                
                  <button onClick={()=>CoachLogOut()}
                    className="btn btn-green lg-in"
                    title="Sign out"
                  >
                    <i className="far fa-user marR20 test" />
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  
  )
}
