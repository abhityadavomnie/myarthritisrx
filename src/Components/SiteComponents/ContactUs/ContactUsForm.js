import React, { useState, useEffect } from 'react';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import ValidationControl from '../../Common/ValidationControl';
import axios from 'axios';
import { baseUrlApi, countryListApi, inquiryLisrApi, insertContactUsApi } from '../../../Helper/ApiUrlHelper';
import toast, { Toaster } from 'react-hot-toast';


export default function ContactUsForm() {

  const [countCharacter, setCountCharacter]= useState(0);
  const [countryList, setCountryList]= useState([]);
  const [inquiryList, setInquiryList]= useState([]);


  const initialValues={
    id:0,
    inquiryId:'',
    name:'',
    email:'',
    countryId:'',
    city:'',
    zipCode:'',
    message:'',
    createdBy:0
  }
  const validationSchema=Yup.object({
    inquiryId: Yup.string().required('Inquiry type is required !'),
    name:Yup.string().required('Pleaser enter your name.'),
    email: Yup.string().required('Please enter your email.'),
    countryId:Yup.string().required('Please enter your country.'),
    city:Yup.string().required('Please enter you city.'),
    zipCode: Yup.string().required('Please enter your ZipCode.'),
    message: Yup.string().required('Please enter your message.')

  })

 
  useEffect(()=>{
    GetCountryList();
    GetInquiryList();
  },[])

  const GetCountryList=()=>{
    axios.get(baseUrlApi+countryListApi).then(resp=>{
      if(resp.data.statusCode===200){
        setCountryList(resp.data.response);
      }
    })
  }

  const GetInquiryList=()=>{
    axios.get(baseUrlApi+inquiryLisrApi).then(resp=>{
      if(resp.data.statusCode===200){
        setInquiryList(resp.data.response);
      }
    })
  }

   const InsertContactUsDetails=(values)=>{
     axios.post(baseUrlApi+ insertContactUsApi, values).then(resp=>{
      if(resp.data.statusCode===200){
        toast.success("Thanks for contacting us.",{ duration: 4000})
      }else{
        console.log(resp.data.message);
        toast.error("Something wents wrong, Please contact admin !",{ duration: 4000})
      }
     
     })
   }

  const HandleContactUsSubmit=(values, {resetForm})=>{
    console.log(values);
    values.inquiryId= parseInt(values.inquiryId);
    values.countryId= parseInt(values.countryId);
    InsertContactUsDetails(values);
    resetForm({values:''});
  }


  const CountCharacter=(e)=>{
    if(countCharacter>0){
      setCountCharacter(e.target.value.length)
    }
  }

  

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} 
    onSubmit={(values, {resetForm})=>HandleContactUsSubmit(values, {resetForm})}>
      <Form>
        <section className="contact-page">
          <section id="general-enquiry">
            <div className="wrapper3">
              <h2>General Inquiry</h2>
              <div className="contact-left">
                <div className="to-load-b">
                  <p>
                    We appreciate your interest in MyArthritisRx. Please feel free to
                    reach out with any questions regarding how our step-by-step
                    program can help you manage your arthritis.
                  </p>
                </div>
                <div className="contact-form to-load-b">
                  <div className="row">
                    <div className="col">
                      <div className="custom-select">
                        <Field as='select' name='inquiryId'>
                          <option value="">-Select--</option>
                          {
                            inquiryList.map((data, index)=>(<option value={data.id} key={index}>{data.name}</option>))
                          }
                        </Field>
                       <ValidationControl name='inquiryId'></ValidationControl>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>*Name</label>
                      <Field
                        type="text" name='name'
                        placeholder="Your Name"
                      />
                      <ValidationControl name='name'></ValidationControl>
                    </div>
                    <div className="col">
                      <label>*Email</label>
                      <Field
                        type="text" name='email'
                        placeholder="abc@xyz.com"
                      />
                       <ValidationControl name='email'></ValidationControl>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>*Country</label>
                      <div className="custom-select">
                        <Field as='select' name='countryId'>
                          <option value={-1} selected="" disabled="" hidden="">
                            --Select--
                          </option>
                          {
                            countryList.map((data, index)=>(<option value={data.id} key={index}>{data.name}</option>))
                          }
                        </Field>
                        <ValidationControl name='countryId'></ValidationControl>
                      </div>
                    </div>
                    <div className="col">
                      <label>*City</label>
                      <div className="custom-select">
                        <Field name='city'
                          type="text"
                        />
                           <ValidationControl name='city'></ValidationControl>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>*Zip Code</label>
                      <Field name='zipCode'
                        type="text"
                        placeholder="Zip Code"
                      />
                       <ValidationControl name='zipCode'></ValidationControl>
                    </div>
                  </div>
                  <div className="row">
                    <label className="setfocus">Message</label>
                    <Field as='textarea'
                      type="text" name='message'
                      placeholder="Please enter your message."
                      maxLength={150}
                    />
                    <ValidationControl name='message'></ValidationControl>
                    <p>
                      <span id="wordcount">{100- countCharacter}</span> Character(s) Remaining
                    </p>
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      className="btn"
                      style={{ marginBottom: 10 }}
                    />
                  </div>
                </div>
              </div>
              <div className="contact-right">
                <div className="contactBox to-load-b">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@myarthritisrx.com">info@myarthritisrx.com</a>
                  </p>
                </div>
                <div className="contactBox to-load-b">
                  <h4>Phone (Toll Free)</h4>
                  <p>
                    <a href="tel: 833-888-6279">833-888-6279</a> (MARX)
                  </p>
                </div>
              </div>
              <div className="clear" />
            </div>
          </section>
        </section>
      </Form>
    </Formik>
  )
}
