import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from "antd";
import { Link } from 'react-router-dom';
import { baseUrlApi, deleteDocumentByIdApi, getDocumentListApi } from '../../Helper/ApiUrlHelper';

export default function Resource() {

    const [resourceList, setResourceList] = useState([]);
    const [pageSizeValue, setPageSizeValue] = useState(10);
    const [loading, setLoading] = useState(false);
    const [pageValue, setPageValue] = useState(1);
    const [totalCount, setTotalCount] = useState(10);

    const Paging = (page, pagesize) => {
        setPageSizeValue(pagesize);
        setPageValue(page);
    }

    const columns = [
        {
            title: 'Coach',
            dataIndex: 'coachName',
            sorter: (record1, record2) => {
                return record1.coachName > record2.coachName
            }
        },
        {
            title: 'Document',
            dataIndex: 'documentName',
            sorter: (record1, record2) => {
                return record1.documentName > record2.documentName
            }
        },
        {
            title: 'Document Link',
            dataIndex: 'documentPath',
            sorter: (record1, record2) => {
                return record1.documentPath > record2.documentPath
            },
            render:(record)=>(<>{baseUrlApi+ record}</>)
        },
        {
            title: 'Added On',
            dataIndex: 'createdDate',
            sorter: (record1, record2) => {
                return record1.createdDate > record2.createdDate
            },
            render: ((createdDate) => createdDate.split('T')[0])
        },
        {
            title: "Action",
            render: (record) => (<><button type="button" onClick={() => DeleteResource(record)}>Delete</button>
                <Link to={`/Coach/AddResource?id=${record.id}`}>Edit</Link></>)
        },
    ];

    useEffect(() => {
        GetResourceList();
    }, [pageValue])

    const GetResourceList = () => {
        axios.get(baseUrlApi + getDocumentListApi).then(resp => {
            setResourceList(resp.data.response);
            setTotalCount(resp.data.response[0].totalCount);
        })
    }

    const DeleteResource = (record) => {
        debugger
        if (window.confirm("Are you want to delete the record ?")) {
            axios.get(baseUrlApi + deleteDocumentByIdApi + record.id).then(resp => {
                window.alert(resp.data.message);
                GetResourceList();
            })
        }
    }


    return (
        <section className="commonpage">
            <div className="wrapper3">
                <div className="report table scroll-inside">
                    <div className="common-page">

                        <div className="add-topic-link c-blue text-right">+
                            <Link to='/coach/AddResource'>
                                <strong>Upload Resources</strong>
                            </Link>
                        </div>
                        <Table
                            columns={columns}
                            dataSource={resourceList}
                            pagination={{
                                pageSize: pageSizeValue,
                                total: totalCount,
                                onChange: (page, pageSize) => {
                                    Paging(page, pageSize);
                                },
                            }}
                        ></Table>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    )
}
