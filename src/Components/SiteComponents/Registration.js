import React,{useState} from 'react';
import axios from 'axios';
import {Form, Formik,Field,ErrorMessage} from 'formik'
import ValidationControl from '../Common/ValidationControl';
import * as Yup from 'yup';
import { baseUrlApi, insertUserRegistrationApi } from '../../Helper/ApiUrlHelper';
import toast, { Toaster } from 'react-hot-toast';


export default function Registration() {

  const initialValues={
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    newsLetterSubscription:false,
    blogSubscription:false,
    eventSubscription:false,
    password:'',
    confirmPassword:''
  }

  const validationSchema=Yup.object({
    firstName:Yup.string().required('First name is required !'),
    lastName: Yup.string().required('Last name is required.'),
    phoneNumber:Yup.string().required('Phone# is required.').max(15,'Phone# is too large').min(10,'Invalid phone# '),
    email:Yup.string().required('Email is required.'),
    password: Yup.string().required('Password is required').min(6, "Password is too small."),
  });

  const HandleRegistration=(values, {resetForm})=>{
    axios.post(baseUrlApi+insertUserRegistrationApi, values).then(resp=>{
      if(resp.data.statusCode===200){
        toast.success("Thanks for Registring in MyArthritisRx",{ duration: 4000})
      }else{
        console.log(resp.data.message);
        toast.error("Something wents wrong, Please contact admin !",{ duration: 4000})
      }
      resetForm({values:''});
    })
  }

  return (
<div className="registration-section fl-fix pos-r bg-gray c-white has-gradient">
  <div className="spacer50" />
  <div className="wrapper">
    <div className="d-f jc-sb ai-c w100">
      <div className="info-box w40">
        <div className="inner-wrapper">
          <h2 className="h1 ff-MuseoSans-500 ">Ready For Change?</h2>
          <div className="short-info ff-MuseoSans-300">
            <p>
              Sign up today to join the many individuals who will defeat the
              symptoms of arthritis through our step-by-step program. With the
              applied sciences of innovative technologists and medical industry
              professionals, you can once again experience life free of the
              overwhelming burden of chronic joint pain.
            </p>
          </div>
        </div>
      </div>
      <div className="pop-form w55">
        <div className="pop-wrap-inner">
          <div className="tab-content" style={{ display: "block" }}>
            <h5 className="h2 c-white padB10">Register</h5>
            <div className="form half-form">
              <Formik initialValues={initialValues} validationSchema={validationSchema} 
                      onSubmit={(values, {resetForm})=>HandleRegistration(values, {resetForm})}>
                <Form>
                <div className="form-row">
                  <Field
                    type="text"
                    name='firstName'
                    placeholder="First Name"
                    className="marB10 c-white transparent"
                  />
                  <ValidationControl name='firstName'></ValidationControl>
                </div>
                <div className="form-row">
                  <Field
                    type="text"
                    name='lastName'
                    placeholder="Last Name"
                    className="marB10 c-white transparent"
                  />
                <ValidationControl name='lastName'></ValidationControl>
                </div>
                <div className="form-row">
                  <Field
                    type="text"
                    className="telMask marB10 c-white transparent"
                    name="phoneNumber"
                    placeholder="Contact Number"
                  />
                   
                 <ValidationControl name='phoneNumber'></ValidationControl>
                </div>
                <div className="form-row ">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="marB10 c-white transparent"
                  />
                 <ValidationControl name='email'></ValidationControl>
                </div>
                <div className="form-row">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="marB10 c-white transparent"
                  />
                  <span className="p-note">Minimum 6 characters</span>
                  <ValidationControl name='password'></ValidationControl>
                </div>
                <div className="form-row mt-18 w100">
                  <label className="f-container">
                    By registering you confirm that you agree with our{" "}
                    <a href="terms-of-use.html">Terms &amp; Conditions</a>
                    &nbsp;and{" "}
                    <a href="privacy-statement.html">Privacy Policy</a>
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      id="agreementChange"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="full-row marT20">
                  <div className="form-row">
                    <p
                      id="RegErrsMsgChange"
                      className="c-error padB10 h5 ff-MuseoSans-300"
                      style={{ display: "none" }}
                    />
                    <input
                      defaultValue="Submit"
                      className="btn block has-blue-bg btn-transparent-white"
                      type="submit"
                      id="btn-register-change"
                    />
                  </div>
                </div>
    
                </Form>
              </Formik>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="spacer50" />
</div>

  )
}
