import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArthritisModal from '../Common/ArthritisModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserRegistration from './UserRegistration';


export default function Header() {

    const [isDisplay, setIsDisplay] = useState(false);
    const [hidePromoClass, setHidePromoClass] = useState('covid-header')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HandleClose = () => {
        setIsDisplay(false);
    }
    const SignInModal = () => {
        debugger
        setShow(true)
    }

    const CloseHeader = () => {
        setHidePromoClass('covid-header closePromoHeader')
    }

    return (
        <header className="page-header fl-fix ">
            <div className="full-wrapper">
                <div className="header-main c-white d-f ai-c jc-sb w100 ">
                    <div className="nav-toggle">
                        <span />
                    </div>
                    <Link to='/' className="logo" title="MyArthritisRx">
                        <img src="./assets/images/logo.png" alt="MyArthritisRx Logo" />
                    </Link>
                    <div className="right-menu">
                        <nav
                            className="site-nav pos-r main-navigation"
                            aria-label="Main Menu Navigation"
                        >
                            <ul className="page-menu d-f ai-c">
                                <li className=" parent">
                                    <Link to='/OurProgram' title="Our Program" target="">
                                        Our Program
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to='/OurProgram#six-week-progra'
                                                title="6 Week Program"
                                            >
                                                6 Week Program
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/OurProgram#benefits' title="Benefits">
                                                Benefits
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/OurProgram#faq' title="FAQ">
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="our-program.html#register" title="Register">
                                                Register
                                            </a>
                                        </li>
                                        <li>
                                            <a href="our-program.html#referrals" title="Referrals">
                                                Referrals
                                            </a>
                                        </li>
                                        <li>
                                            <a href="webinars.html" title="Webinars">
                                                Webinars
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className=" parent">
                                    <Link to='/AboutUs' title="About Us" target="">
                                        About Us
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to='/AboutUs'
                                                title="What is MyArthritisRx"
                                            >
                                                What is MyArthritisRx
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutUs'
                                                href="about-us.html#leadership"
                                                title="Our Leadership Team"
                                            >
                                                Our Leadership Team
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className=" parent">
                                    <Link to='/AboutArthritis' title="About Arthritis" target="">
                                        About Arthritis
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to='/AboutArthritis'
                                                title="What is Arthritis"
                                            >
                                                What is Arthritis
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis'

                                                title="Types of Arthritis"
                                            >
                                                Types of Arthritis
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis'

                                                title="Basic Anatomy"
                                            >
                                                Basic Anatomy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis'

                                                title="Signs and Symptoms"
                                            >
                                                Signs and Symptoms
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis'

                                                title="Stage Arthritis"
                                            >
                                                Stage Arthritis
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis'

                                                title="Incidence & Prevalence"
                                            >
                                                Incidence &amp; Prevalence
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis'

                                                title="Risk Factors"
                                            >
                                                Risk Factors
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis'
                                                
                                                title="Joint Preservation"
                                            >
                                                Joint Preservation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis' title="Treatments">
                                                Treatments
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/AboutArthritis' title="Glossary">
                                                Glossary
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <Link to='/Videos' title="Videos" target="">
                                        Videos
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/Blog' title="Blog" target="">
                                        Blog
                                    </Link>
                                </li>
                                <li className="">
                                    <button 
                                        className="btn btn-transparent-white has-blue-bg"
                                        title="Sign In"
                                        target="" onClick={handleShow}
                                    >
                                        Sign In
                                    </button>
                                </li>
                                <li className="">
                                    <a
                                        className="btn has-blue-bg"
                                        href="javascript:void(0)"
                                        onClick={handleShow}
                                        title="Enroll Now"
                                        target=""
                                    >
                                        Enroll Now
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={hidePromoClass}>
                <div className="msg">
                    For a limited time, in recognition of these challenging times, enroll in
                    MyArthritisRx at no cost ($350 value)
                    <div className="tooltip">
                        <div className="tooltipTxt">
                            Your promo code 'MARXCOVID' will be pre-filled automatically in the
                            enrollment process
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="closeHeader" onClick={() => CloseHeader()}>
                        ✕
                    </a>
                </div>
            </div>

            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch static backdrop modal
                </Button> */}

              <ArthritisModal show={show} handleClose={handleClose}>
                    <UserRegistration/>
              </ArthritisModal>
            </>
        </header>

    )
}
