import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from "antd";
// import "antd/dist/antd.css";
import { baseUrlApi, getNewUserListingApi, getProgramTypeListApi, getUserStatusListApi, ChangeUserInterestApi, getRedFlagPatient } from '../../Helper/ApiUrlHelper';


export default function RedFlagPatient() {

    const [userList, setUserList] = useState([]);
    const [pageValue, setPageValue] = useState(1);
    const [pageSizeValue, setPageSizeValue] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [searchStatus, setSearchStatus] = useState(null);
    const [searchProgramType, setSearchProgramType] = useState(null);
    const [searchCaseNumber, setSearchCaseNumber] = useState('');
    const [userStatusList, setUserStatusList] = useState([]);
    const [programTypeList, setProgramTypeList] = useState([]);
    const [data, setData] = useState({ name: null, email: null, status: -1, program: -1 });

    const GetUserStatusList = () => {
        axios.get(baseUrlApi + getUserStatusListApi).then(resp => {
            if (resp.data.statusCode === 200) {
                setUserStatusList(resp.data.response);
            }
        })
    }

    const Paging = (page, pagesize) => {
        setPageSizeValue(pagesize);
        setPageValue(page);
    };

    const Column = [

        {
            title: "Name",
            dataIndex: "name",
            sorter: (record1, record2) => {
                return record1.rowCount > record2.rowCount;
            },
        },

        {
            title: "Email",
            dataIndex: "email",
            sorter: (record1, record2) => {
                return record1.email > record2.email;
            },
        },

        {
            title: "Date Of Registration",
            dataIndex: "createdDate",
            sorter: (record1, record2) => {
                return record1.createdDate > record2.createdDate;
            },
            render: (createdDate) => createdDate.split("T")[0],
        },

        {
            title: "Intake Completed",
            dataIndex: "inTakeCompletedDate",
            sorter: (record1, record2) => {
                return record1.inTakeCompletedDate > record2.inTakeCompletedDate;
            },
            render: (inTakeCompletedDate) =>
                inTakeCompletedDate == "0001-01-01T00:00:00"
                    ? ""
                    : inTakeCompletedDate.split("T")[0],
        },

        {
            title: "Risk of Progression",
            dataIndex: "riskOfProgression",
            sorter: (record1, record2) => {
                return record1.riskOfProgression > record2.riskOfProgression;
            },
        },

        {
            title: "Severity Name",
            dataIndex: "severityName",
            sorter: (record1, record2) => {
                return record1.severityName > record2.severityName;
            },
        },

        {
            title: "Program",
            dataIndex: "programName",
            sorter: (record1, record2) => {
                return record1.programName > record2.programName;
            },
        },

        {
            title: "Status",
            dataIndex: "userStatus",
            sorter: (record1, record2) => {
                return record1.userStatus > record2.userStatus;
            },
        },

        {
            title: "Reason For Red Flagged",
            dataIndex: "reasonForRedFlagged",

        },

        {
            title: "Convert",
            dataIndex: "convert",
            render: (record) => {
                return (
                    <>
                        <button>Convert</button>
                    </>
                );
            },

        },

    ];
    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const SearchWithParams = () => {
        GetNewUserList();
    };

    const DisplayAll = () => {
        console.log(data);
        setData({
            name: '', email: '', status: '', program: ''
        });

        axios.post(baseUrlApi + getRedFlagPatient,
            {

                isInterested: -1,
                firstName: "",
                lastName: "",
                email: "",
                statusId: -1,
                programId: -1,
                pageNumber: 1,
                pageSize: 10,
                sortColumn: "CreatedDate",
                sortOrder: "ASC",
                reasonForRedFlag: ""

            }).then(resp => {
                setUserList(resp.data.response);
                setTotalCount(resp.data.response[0].totalCount);
            });
    }

    const GetNewUserList = () => {
        data ?
            axios.post(baseUrlApi + getRedFlagPatient,
                {
                    isInterested: -1,
                    firstName: data.name,
                    lastName: data.name,
                    email: data.email,
                    statusId: data.status,
                    programId: data.program,
                    pageNumber: 1,
                    pageSize: 20,
                    sortColumn: "CreatedDate",
                    sortOrder: "ASC",
                    reasonForRedFlag: ""

                }).then(resp => {
                    setUserList(resp.data.response);
                    console.log('red flag', resp)
                })
            :
            <></>
    }

    const GetProgramTypeList = () => {
        axios.get(baseUrlApi + getProgramTypeListApi).then(resp => {
            if (resp.data.statusCode === 200) {
                setProgramTypeList(resp.data.response);
            }
        })
    }


    useEffect(() => {
        GetNewUserList();
        GetUserStatusList();
        GetProgramTypeList();
    }, [pageValue]);

    return (
        <section className="commonpage">
            <div className="wrapper3">
                <section className="Filter-form">

                    <section id="Report-filter">
                        <div className="Report-filter-field">
                            <div className="filter-col">
                                <label>Name</label>
                                <input onChange={updateData}
                                    name="name"
                                    type="text"
                                    maxLength={50}
                                    placeholder="Name"
                                    value={data.name}
                                />
                            </div>
                            <div className="filter-col">
                                <label>Email</label>
                                <input onChange={updateData}
                                    value={data.email}
                                    name="email"
                                    type="text"
                                    maxLength={50}
                                    placeholder="Email"

                                />
                            </div>
                            <div className="filter-col minw-160">
                                <label>Status</label>
                                <div className="custom-select">
                                    <select onChange={updateData} name='status' value={data.status}>
                                        <option value="">--Select--</option>
                                        {
                                            userStatusList.map((item, index) =>
                                                (<option value={item.id} key={index}>{item.name}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="filter-col minw-160">
                                <label>Program</label>
                                <div className="custom-select">
                                    <select onChange={updateData} name='program' value={data.program}>
                                        <option value="">--Select--</option>
                                        {
                                            programTypeList.map((data, index) => (<option key={index} value={data.id}>{data.name}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className="Search-Formbtn no-loader">
                        <button className='btn btn-success' onClick={() => SearchWithParams()}>Search</button>
                        <button className='btn btn-success' onClick={() => DisplayAll()}>Display All</button>
                        <button className='btn btn-success'>Download</button>
                    </div>
                    <div>
                        <h3>New Users</h3>
                    </div>
                </section>

                <div className="notfound" id="itemnotfound" />
                <div className="report table scroll-inside">
                    <div className="common-page">
                        <Table
                            columns={Column}
                            dataSource={userList}
                            pagination={{
                                defaultPageSize: 20,
                                pageSizeOptions: [10, 20, 40],
                                showSizeChanger: true,
                                showTotal: ((total, page) => `Showing ${page[0]} to ${page[1]} of ${total} entries`
                                ),
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
