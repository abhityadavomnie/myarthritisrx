import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Formik, Form,Field} from 'formik'
import { Link } from "react-router-dom";
import {Table } from "antd";
import { baseUrlApi, changesGroupStatusApi, getGroupListApi } from '../../Helper/ApiUrlHelper';

export default function GroupList() {
  
  const [show, setShow] = useState(false);
  const [groupDetails, setGroupDetails] = useState([]);  
  const [groupSearchParam, setGroupSearchParam]= useState(null);
  const [programType, setProgramType]= useState(null);
  const [coach, setCoach]= useState(null);
  const [isReload, setIsReload]= useState(1);
  const [programTypeList, setProgramTypeList]= useState([]);

//   const GetProgramTypeList=()=>{
//     axios.get(apibaseUrl + getProgramTypeListApi).then((resp) => {
//       setProgramTypeList(resp.data.response);
//   });
//   }

  const GetGroupDetails = () => {
    axios
      .post(baseUrlApi + getGroupListApi, {
        pageSize: 10,
        pageIndex: 1,
        totalRecords: 0,
        sortBy: "Id",
        sortOrder: 'ASC',
        groupName: groupSearchParam,
        coachName: coach,
        programTypeId: 0,
      })
      .then((resp) => {
        setGroupDetails(resp.data.response);
      });
  };

  useEffect(() => {
    GetGroupDetails();
    //GetProgramTypeList();
  }, [isReload]);


  const COLUMNS = [
    {
      title: "S.No",
      dataIndex: "rowNumber",
      sorter: (record1, record2) => {
        return record1.rowNumber > record2.rowNumber;
      },
    },

    {
      title: "Group Name",
      dataIndex: "groupName",
      sorter: (record1, record2) => {
        return record1.groupName > record2.groupName;
      },
    },

    {
      title: "Program Type",
      dataIndex: "programType",
      sorter: (record1, record2) => {
        return record1.programType > record2.programType;
      },
    },

    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (record1, record2) => {
        return record1.startDate > record2.startDate;
      },
      render: (startDate) => startDate.split("T")[0],
    },

    {
      title: "End Date",
      dataIndex: "endDate",
      sorter: (record1, record2) => {
        return record1.endDate > record2.endDate;
      },
      render: (endDate) => endDate.split("T")[0],
    },

    {
      title: "UserName",
      dataIndex: "userName",
      sorter: (record1, record2) => {
        return record1.userName > record2.userName;
      },
    },

    {
      title: "Coach",
      dataIndex: "coachName",
      sorter: (record1, record2) => {
        return record1.coachName > record2.coachName;
      },
    },

    {
        title: "Edit",
        render: (record) => (<>
            <Link to={`/Coach/Group?id=${record.id}`}>Edit</Link></>)
    },

    {
        title: "Deactivate",
        render: (record) => (<><button type="button" onClick={()=>DeActivate(record)} >{record.status ? ('Deactivate'): ('Activate')}</button></>)
    },
  ];

  const DeActivate=(record)=>{
     if(window.confirm("Are you sure want to deactivate the group ?")){
        axios.get(baseUrlApi+changesGroupStatusApi+`?groupId=${record.id}&status=${!record.status}`).then(resp=>{
            GetGroupDetails();
        })
     }
  }

  return (
    <section className="commonpage">
    <div className="wrapper3">
        <div className="report table scroll-inside">
            <div className="common-page">

                <div className="add-topic-link c-blue text-right">+
                    <Link to='/Coach/Group'>
                        <strong>Create New Group</strong>
                    </Link>
                </div>
                <Table columns={COLUMNS} dataSource={groupDetails}></Table>
                <br />
            </div>
        </div>
    </div>
</section>
  )
}
