import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import ValidationControl from '../Common/ValidationControl';
import { baseUrlApi, getRoleListApi, upsertCoachApi } from '../../Helper/ApiUrlHelper';

export default function CreateCoach() {

    const [image, setImage] = useState();
    const [roleList, setRoleList] = useState([]);

    const setFieldValue = (e) => {
        debugger
        setImage(e.target.files[0]);
    }
    const initialValue = {
        id: 0,
        roleId: '',
        firstName: '',
        lastName: '',
        email: '',
        heading: '',
        description: '',
        imagePath: '',
        password: '',
        confirmPassword: ''
    };

    const validationScheme = Yup.object({
        roleId: Yup.string().required('Role is required !'),
        firstName: Yup.string().required('First name is required !'),
        lastName: Yup.string().required('Last name is required !'),
        email: Yup.string().required('Email is required !'),
        heading: Yup.string().required('Heading is required !'),
        description: Yup.string().required('Description is required !'),
        password: Yup.string().required('Password is required !'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password do not match !').required('Confirm password is required !')
    });

    const onSubmit = (values, { resetForm }) => {
        let formBody = new FormData();
        formBody.append('Id', parseInt(values.id));
        formBody.append("RoleId", parseInt(values.roleId));
        formBody.append("FirstName", values.firstName);
        formBody.append("LastName", values.lastName);
        formBody.append("Email", values.email);
        formBody.append("Heading", values.heading);
        formBody.append("Description", values.description);
        formBody.append("Image", image);
        formBody.append("Password", values.password)
        axios({
            url: baseUrlApi +upsertCoachApi,
            method: "POST",
            data: formBody,
            headers: { 'Content-Type': 'multipart/form-data' }

        }).then((resp) => {
            window.alert(resp.data.message)
        }).catch(err => {
            window.alert(err)
        }).finally(() => {
            resetForm({ values: '' })
        })

        console.log(values);
    }

    useEffect(()=>{
        GetRoleList();
     },[])
    
     const GetRoleList=()=>{
        axios.get(baseUrlApi+getRoleListApi).then(resp=>{
            setRoleList(resp.data.response)
        })
     }

    return (
        <section className="commonpage">
            <div className="breadcrumbs-wrap">
                <div className="wrapper3">
                    <ul className="breadcrumb">
                        <li>
                            <Link href="/Coach/CoachList">CoachListing</Link>
                        </li>
                        <li>Add Coach</li>
                    </ul>
                    <Link href="/Coach/CoachList" className="backLink">
                        Back
                    </Link>
                </div>
            </div>
            <div className="wrapper3">
                <div className="headingwrap">
                    <h3>Add New Coach</h3>
                </div>
                <div className="report table allVisible">
                    <div className="common-page">
                        <div className="total-item"></div>
                        <div className="two-col-layout">
                            <div className="col">
                                <div className="table-wrapper" style={{ float: "left" }}>
                                    <Formik initialValues={initialValue} validationSchema={validationScheme} 
                                            onSubmit={(values,{resetForm})=>onSubmit(values, {resetForm})}>
                                        <Form>
                                            <table className="form-table tbl-selectric coachTbl">
                                                <tbody>
                                                    <tr>
                                                        <td width={200}>
                                                            <label>Select One</label>
                                                        </td>
                                                        <td width={300}>
                                                            <div className="custom-select">
                                                                <div className="selectric-wrapper">
                                                                    <div className="">
                                                                        <Field as='select' name='roleId'>
                                                                         <option>--Select--</option>
                                                                         {
                                                                            roleList.map((data, index)=>(<option key={index} value={data.id}>{data.name}</option>))
                                                                         }
                                                                        </Field>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ValidationControl name='roleId'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="firstName">First Name</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="text"
                                                                name="firstName"
                                                                id="firstName"
                                                                autoComplete="off"
                                                            />
                                                           <ValidationControl name='firstName'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="LastName">Last Name</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="text"
                                                                name="lastName"
                                                                id="lastName"
                                                                autoComplete="off"
                                                            />
                                                          <ValidationControl name='lastName'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="Email">Email</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="text"
                                                                name="email"
                                                                id="email"
                                                                autoComplete="off"
                                                            />
                                                          <ValidationControl name='email'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="Password">Password</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="password"
                                                                name="password"
                                                                id="password"
                                                                autoComplete="off"
                                                            />
                                                            <ValidationControl name='password'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="ConfirmPassword">Confirm Password</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="password"
                                                                name="confirmPassword"
                                                                id="confirmPassword"
                                                                autoComplete="off"
                                                            />
                                                           <ValidationControl name='confirmPassword'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="Heading">Heading</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="text"
                                                                name="heading"
                                                                id="heading"
                                                                autoComplete="off"
                                                            />
                                                           <ValidationControl name='heading'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="Description">Description</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field as='textarea'
                                                                cols={100}
                                                                rows={20}
                                                                name="description"
                                                                id="description"
                                                            />
                                                          <ValidationControl name='description'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="ImgFile">Image</label>
                                                        </td>
                                                        <td width={300}>
                                                        <input type='file' className='form-control' onChange={(e) => setFieldValue(e)} name='imagePath'></input>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <input
                                                                type="submit"
                                                                className="btn"
                                                                defaultValue="Submit"
                                                                style={{ marginRight: 20 }}
                                                                onclick="return Validate()"
                                                            />
                                                            <a href="/Coach/CoachList">Go Back</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Form>
                                    </Formik>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
