import React, { useState } from 'react';
import axios from 'axios';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import ValidationControl from '../Common/ValidationControl';
import { baseUrlApi, coachLoginApi } from '../../Helper/ApiUrlHelper';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function CoachLogin(props) {

    const navigate = useNavigate();

    const initialValues = {
        userName: '',
        password: '',
        userTypeId: 2
    };
console.log('loginprops', props.login)
    const validationSchema=Yup.object({
            userName: Yup.string().required('Username is required !'),
            password:Yup.string().required('Password is required.')
    });

    const HandleLoginSubmit=(values, {resetForm})=>{
        console.log(values);
        axios.post(baseUrlApi+coachLoginApi,values).then(resp=>{
            if(resp.data.statusCode==200){
                toast.success("Login successful !",{ duration: 4000});
                window.sessionStorage.setItem('token',resp.data.response);
                props.login(true);
                navigate('/Coach/NewUsers');
            }else{
                toast.error('Username or password not valid',{duration:4000});
            }
        }).catch((err)=>{
            toast.error('Username or password not valid',{duration:4000});
        }).finally(()=>{
            resetForm({values:''});
        })
    }


    return (
        <section className="commonpage">
            <div className="wrapper3">
                <Formik initialValues={initialValues}
                 validationSchema={validationSchema} onSubmit={(values,{resetForm})=>HandleLoginSubmit(values, {resetForm})}>
                    <Form>
                        <h2>Login</h2>
                        <div className="contact-form f-fix login-form">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="usermail">Username Or Email</label>
                                    <Field
                                        type="text"
                                        name="userName"
                                        placeholder="abc@xyz.com"
                                    />
                                    <ValidationControl name='userName'></ValidationControl>
                                </div>
                                <div className="col">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Passsword"
                                    />
                                   <ValidationControl name='password'></ValidationControl>
                                </div>
                            </div>
                            <div className="row">
                                <input
                                    type="submit"
                                    id="loginsubmit"
                                    defaultValue="Login"
                                    className="btn"
                                />
                            </div>
                            <div className="clear" />
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>

    )
}
