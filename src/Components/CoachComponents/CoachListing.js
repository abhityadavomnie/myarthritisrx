import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from "antd";
import { Link } from 'react-router-dom';
import { baseUrlApi, getCoachListApi } from '../../Helper/ApiUrlHelper';

export default function CoachListing() {

    const [coachList, setCoachList] = useState([]);
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
            title: 'Id',
            dataIndex: 'id',
            sorter: (record1, record2) => {
                return record1.id > record2.id
            }
        },
        {
            title: 'Name',
            dataIndex: 'userName',
            sorter: (record1, record2) => {
                return record1.userName > record2.userName
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (record1, record2) => {
                return record1.email > record2.email
            }
        },
        {
            title: 'Role',
            dataIndex: 'role',
            sorter: (record1, record2) => {
                return record1.role > record2.role
            }
        },
        {
            title: 'Account Status',
            dataIndex: 'status',
            sorter: (record1, record2) => {
                return record1.status > record2.status
            }
        },
    ];

    useEffect(() => {
        GetCoachList();
    }, [pageValue]);


    const GetCoachList = () => {
        axios.post(baseUrlApi + getCoachListApi, {
            pageSize: 10000,
            pageIndex: 1,
            totalRecords: 0,
            sortBy: "",
            sortOrder: 1,
        })
            .then((resp) => {
                setCoachList(resp.data.response);
                setTotalCount(resp.data.response[0].totalCount);
            });
    };

    return (
        <section className="commonpage">
            <div className="wrapper3">
                <div className="report table scroll-inside">
                    <div className="common-page">

                        <div className="add-topic-link c-blue text-right">+
                            <Link to='/coach/CreateCoach'>
                                <strong>Create New Coach</strong>
                            </Link>
                        </div>
                        <Table
                            columns={columns}
                            dataSource={coachList}
                            pagination={{
                                pageSize: pageSizeValue,
                                total: totalCount,
                                onChange: (page, pageSize) => { Paging(page, pageSize) }

                            }}
                        ></Table>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    )
}
