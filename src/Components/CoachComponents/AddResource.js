import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import ValidationControl from '../Common/ValidationControl';
import { baseUrlApi, getDocumentByIdApi, upsertDocumentApi } from '../../Helper/ApiUrlHelper';

export default function AddResource(props) {

    const [file, setFile] = useState();
    const [resourceId, setResourceId] = useState(window.location.href.split('=')[1])

    const initailResourceValue = {
        id: 0,
        coachId: 0,
        documentName: "",
        documentPath: "",
    };

    const [resourceValue, setResourceValue] = useState(initailResourceValue);

    useEffect(() => {
        GetResourceById();
    }, [resourceId])

    const GetResourceById = () => {
        axios.get(baseUrlApi + getDocumentByIdApi + resourceId).then(resp => {
            debugger
            setResourceValue(resp.data.response);
        })
    }

    const validationScheme = Yup.object({
        documentName: Yup.string().required("Title name is required !"),
    });

    const HandleSubmit = (values) => {
        let formBody = new FormData();
        formBody.append("Id", parseInt(values.id));
        formBody.append("DocumentName", values.documentName);
        formBody.append("Document", file);
        formBody.append('CoachId', 2)

        axios({
            url: baseUrlApi + upsertDocumentApi,
            method: "POST",
            data: formBody,
            headers: { 'Content-Type': 'multipart/form-data' }

        }).then((resp) => {
            window.alert(resp.data.message)
        }).catch(err => {
            window.alert(err)
        }).finally(() => {
            //resetForm({values:''})
        })
    }

    return (
        <section className="commonpage">
            <div className="breadcrumbs-wrap">
                <div className="wrapper3">
                    <ul className="breadcrumb">
                        <li>
                            <Link to='/coach/Resource'>Resources</Link>
                        </li>
                        <li>Add New </li>
                    </ul>
                    <Link to='/coach/Resource'>
                        Back
                    </Link>
                </div>
            </div>
            <div className="wrapper3">
                <div className="headingwrap">
                    <h3>Resource</h3>
                </div>
                <div className="report table">
                    <div className="common-page">
                        <div className="two-col-layout">
                            <div className="col">
                                <div className="table-wrapper" style={{ float: "left" }}>
                                    <Formik validationSchema={validationScheme}
                                        enableReinitialize="true"
                                        initialValues={resourceValue} onSubmit={HandleSubmit}>
                                        <Form>
                                            <table className="form-table tbl-selectric coachTbl">
                                                <tbody>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="documentName">Title</label>
                                                        </td>
                                                        <td width={300}>
                                                            <Field
                                                                type="text"
                                                                name="documentName"
                                                            />
                                                            <ValidationControl name='documentName'></ValidationControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width={200}>
                                                            <label htmlFor="LastName">Select File</label>
                                                        </td>
                                                        <td width={300}>
                                                            <input onChange={(e)=> setFile(e.target.files[0])}
                                                                type="file"
                                                                className="marB10"
                                                            />
                                                          
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <input
                                                                type="submit"
                                                                className="btn"
                                                                defaultValue="Upload"
                                                                style={{ marginRight: 20 }}
                                                            />
                                                            <Link to='/coach/Resource'>
                                                                Back
                                                            </Link>
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
