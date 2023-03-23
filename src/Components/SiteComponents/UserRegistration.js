import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field } from 'formik'
import { Modal } from 'bootstrap';



export default function UserRegistration() {
    return (
        <section>
            <div className="pop-center">
                <div className="left-pop-wrap">
                    <div className="logo-pop">
                        <img src="/assets/images/pop-logo.png" />
                    </div>
                </div>
                <div className="right-pop-wrap">
                    <div className="indicator">
                        <svg width="16px" height="12px">
                            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                        </svg>
                    </div>
                    <div className="pop-form">
                        <header>
                            <div className="h1">Stay Active</div>
                            <p>
                                Enjoy your daily activities knowing you
                                <br /> are in control of your arthritis
                            </p>
                            <div className="col pos-rel">
                                <div
                                    id="RegErrsMsg-s"
                                    className="c-success"
                                    style={{ display: "none" }}
                                />
                            </div>
                        </header>
                        <div className="pop-wrap-inner">
                            <div
                                id="tab-2"
                                className="sign-in tab-content current"
                                style={{ display: "none" }}
                            >
                                <h5 className="sign h2 c-blue">Sign In</h5>
                                <div className="form half-form">
                                    <form id="btnUserLogin">
                                        <div className="form-row">
                                            <label>Email</label>
                                            <input type="text" id="loginemail" />
                                            <p
                                                id="loginpopupemail"
                                                style={{ display: "none" }}
                                                className="c-error"
                                            />
                                        </div>
                                        <div className="form-row">
                                            <label>Password</label>
                                            <input type="password" id="loginpwd" />
                                            <p
                                                id="loginpopuppassword"
                                                style={{ display: "none" }}
                                                className="c-error"
                                            />
                                        </div>
                                        <div className="form-row forget-password fr">
                                            <a href="/forgotpassword" title="Forgot Password?">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div className="form-row  fl">
                                            <div className="">
                                                <input
                                                    defaultValue="Sign In"
                                                    className="btn signin"
                                                    type="submit"
                                                    onclick="return ValidateUserLogin();"
                                                />
                                                <p
                                                    id="InvalidPassword"
                                                    style={{ display: "none" }}
                                                    className="c-error"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                id="tab-1"
                                className="register-c tab-content "
                                style={{ display: "block" }}
                            >
                                <h5 className="reg h2 c-blue">Register</h5>
                                <div className="form half-form">
                                    <form id="btnUserRegister">
                                        <div className="form-row">
                                            <label>First Name</label>
                                            <input type="text" id="RegFirstName" />
                                            <p
                                                id="RegpopupFirstName"
                                                className="c-error"
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <label>Last Name</label>
                                            <input type="text" id="RegLastName" />
                                            <p
                                                id="RegpopupLastName"
                                                className="c-error"
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                        <div className="form-row">
                                           
                                        </div>
                                        <div className="form-row ">
                                            <label>Email</label>
                                            <input type="text" id="Regemail" />
                                            <p
                                                id="Regpopupemail"
                                                className="c-error"
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <label>
                                                Password{" "}
                                                <span className="p-note">Minimum 6 characters</span>
                                            </label>
                                            <input type="password" id="Regpwd" />
                                            <p
                                                id="Regpopuppassword"
                                                className="c-error"
                                                style={{ display: "none", color: "red" }}
                                            />
                                        </div>
                                        <div className="form-row mt-18 w100">
                                            <label className="f-container">
                                                By registering you confirm that you agree with our{" "}
                                                <a href="/Terms-of-Use" target="_blank">
                                                    Terms &amp; Conditions
                                                </a>{" "}
                                                and{" "}
                                                <a href="/Privacy-Statement" target="_blank">
                                                    Privacy Policy
                                                </a>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked="checked"
                                                    id="agreement"
                                                />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="full-row">
                                            <div className="form-row">
                                                <input
                                                    defaultValue="Submit"
                                                    className="btn block registr"
                                                    type="submit"
                                                    id="btn-register"
                                                    onclick="return ValidateUserRegistration();"
                                                />
                                                <p
                                                    id="RegErrsMsg"
                                                    className="c-error"
                                                    style={{ display: "none" }}
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="pop-tab" style={{ display: "" }}>
                                <h4 className="reglink" style={{ display: "none" }}>
                                    If you are not a member, please{" "}
                                    <a href="javascript:void(0);">
                                        <u>Click Here</u>
                                    </a>{" "}
                                    to enroll <img src="/assets/images/f-arrow.png" />{" "}
                                </h4>
                                <h4 className="signlink" style={{}}>
                                    <a href="javascript:void(0);">
                                        <img src="/assets/images/b-arrow.png" /> Back to Sign In
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="" className="closeBtn" />
                <a />
                {/* <a href="" className="closeBtn" />
                <a /> */}
                {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
            </div>
        </section>

    )
}
