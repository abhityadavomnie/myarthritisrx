import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { baseUrlApi, getCoachListApi, getCoachListDetailApi, getGroupDetailById, getProgramListApi, getProgramTypeListApi, upsertGroupDetailApi } from '../../Helper/ApiUrlHelper';
import ValidationControl from '../Common/ValidationControl';
import { Link } from 'react-router-dom';


export default function UpsertGroup() {

    const initialValues = {
        id:0,
        programTypeId: '',
        programId: '',
        coachId: '',
        groupName: '',
        startDate: '',
        endDate: '',
        description: '',
        createdBy: 0
    };

    const validationSchema = Yup.object({
        programTypeId: Yup.string().required('Program Type is required !'),
        programId: Yup.string().required('Program is required !'),
        coachId: Yup.string().required('Coach is required !'),
        groupName: Yup.string().required('Group name is required !'),
        startDate: Yup.string().required('Start Date is required !'),
        endDate: Yup.string().required('End Date is required !'),
        description:Yup.string().required('Group description is required !')
    })
    const [formValues, setFormValues] = useState(initialValues);
    const [programTypeIds, setProgramTypeIds] = useState([]);
    const [programIds, setProgramIds] = useState([]);
    const [coachIds, setCoachIds] = useState([]);
    const [groupId, setGroupId] = useState(window.location.href.split('=')[1]);
    const [heading,setHeading]= useState('Create New Group');

    useEffect(() => {
        GetProgramTypeId();
        GetProgramList();
        GetCoachListApi();
        if(groupId!=null || groupId>0){
            GetGroupById();
            setHeading('Edit Group');
        }
        
    }, [groupId])

    const GetProgramTypeId = () => {
        axios.get(baseUrlApi + getProgramTypeListApi).then(resp => {
            setProgramTypeIds(resp.data.response);
        })
    }

    const GetProgramList = () => {
        axios.get(baseUrlApi + getProgramListApi).then(resp => {
            setProgramIds(resp.data.response);
        })
    }

    const GetCoachListApi = () => {
        axios.get(baseUrlApi + getCoachListDetailApi).then(resp => {
            setCoachIds(resp.data.response);
        })
    }

    const GetGroupById=()=>{
        axios.get(baseUrlApi+ getGroupDetailById+ groupId).then(resp=>{
            setFormValues(resp.data.response);
        })
    }

    const GroupHandleSubmit = (values, { resetForm }) => {
        values.programId=parseInt(values.programId);
        values.programTypeId= parseInt(values.programTypeId);
        values.coachId= parseInt(values.coachId);
         axios.post(baseUrlApi+upsertGroupDetailApi, values).then(resp=>{
            resetForm({values:''})
         })
    }

    return (
        <section className="commonpage">
            <div className="breadcrumbs-wrap">
                <div className="wrapper3">
                    <ul className="breadcrumb">
                    </ul>
                    <Link href="/Coach/GroupList" className="backLink">
                        Back
                    </Link>
                </div>
            </div>
            <div className="wrapper3">
                <div className="headingwrap">
                    <h3>{heading}</h3>
                </div>
                <div className="report table allVisible">
                    <div className="common-page">
                        <div className="total-item"></div>
                        <div className="two-col-layout">
                            <div className="col">
                                <div className="table-wrapper" style={{ float: "left" }}>
                                    <Formik initialValues={formValues} enableReinitialize='true' validationSchema={validationSchema}
                                        onSubmit={(values, { resetForm }) => GroupHandleSubmit(values, { resetForm })}>
                                        <Form>
                                            <table className="form-table tbl-selectric coachTbl">
                                                <tbody>

                                                    <tr>
                                                        <td width={200}>
                                                            <label>Group Name</label>
                                                        </td>
                                                        <td width={300}>
                                                            <div className="custom-select">
                                                                <div className="selectric-wrapper">
                                                                    <div className="">
                                                                        <Field name='groupName'></Field>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ValidationControl name='groupName'></ValidationControl>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td width={200}>
                                                            <label>Program Type</label>
                                                        </td>
                                                        <td width={300}>
                                                            <div className="custom-select">
                                                                <div className="selectric-wrapper">
                                                                    <div className="">
                                                                        <Field as='select' name='programTypeId'>
                                                                            <option>--Select--</option>
                                                                            {
                                                                                programTypeIds.map((data, index) => (<option key={index} value={data.id}>{data.name}</option>))
                                                                            }
                                                                        </Field>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ValidationControl name='programTypeId'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="firstName">Program</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field as='select' name='programId'>
                                                                <option>--Select--</option>
                                                                {
                                                                    programIds.map((data, index) => (<option key={index} value={data.id}>{data.name}</option>))
                                                                }
                                                            </Field>
                                                            <ValidationControl name='firstName'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="Email">Start Date</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="date"
                                                                name="startDate"
                                                                id="startDate"
                                                            />
                                                            <ValidationControl name='startDate'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="endDate">End Date</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="date"
                                                                name="endDate"
                                                                id="endDate"
                                                            />
                                                            <ValidationControl name='endDate'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="ConfirmPassword">Assign Coach</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field as='select' name='coachId'>
                                                                <option>--Select--</option>
                                                                {
                                                                    coachIds.map((data, index) => (<option key={index} value={data.id}>{data.coachName}</option>))
                                                                }
                                                            </Field>
                                                            <ValidationControl name='coachId'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="Description">About Group</label>
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
                                                        <td />
                                                        <td>
                                                            <input
                                                                type="submit"
                                                                className="btn"
                                                                defaultValue="Submit"
                                                                style={{ marginRight: 20 }}
                                                                onclick="return Validate()"
                                                            />
                                                            <Link to="/Coach/GroupList">Go Back</Link>
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
