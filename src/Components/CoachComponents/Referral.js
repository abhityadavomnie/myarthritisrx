import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrlApi, downloadReferralExcelFileApi, getReferralListApi } from '../../Helper/ApiUrlHelper';
import { Table, DatePicker  } from "antd";


export default function Referral() {

  const [referralList, setReferralList] = useState([]);
  const [pageSizeValue, setPageSizeValue]= useState(10);
  const [loading, setLoading]= useState(false);
  const [pageValue, setPageValue]= useState(1);
  const [totalCount, setTotalCount]= useState(10);
  const [searchEmail, setSearchEmail]= useState('');
  const [searchReferralEmail, setSearchReferralEmail]= useState('');
  const [searchStartDate, setSearchStartDate] = useState(null);
  const [searchEndDate, setSearchEndDate]= useState(null);

  const Paging=(page, pagesize)=>{
    debugger
    setPageSizeValue(pagesize);
    setPageValue(page);
  }

  const columns=[
    {
      title:'S.No',
      dataIndex:'rowCount',
      sorter:(record1, record2)=>{
        return record1.rowCount>record2.rowCount
      }
    },
    {
      title:'Email',
      dataIndex:'referrByEmail',
      sorter:(record1, record2)=>{
        return record1.referrByEmail>record2.referrByEmail
      }
    },
    {
      title:'Referral Email',
      dataIndex:'referrToEmail',
      sorter:(record1, record2)=>{
        return record1.referrToEmail>record2.referrToEmail
      }
    },
    {
      title:'Created On',
      dataIndex:'createdDate',
      sorter:(record1, record2)=>{
        return record1.createdDate>record2.createdDate
      },
      render:((createdDate)=> createdDate.split('T')[0])
    },
  ];

  const GetReferralList = (fromEmail='',toEmail='',startDate=null, endDate= null) => {
    debugger
    axios.post(baseUrlApi + getReferralListApi,
   {  
    "fromEmail": fromEmail,
    "toEmail": toEmail,
    "startDate": startDate,
    "endDate": endDate,
    "pageNumber": pageValue,
    "pageSize": pageSizeValue,
    "sortColumn": "CreatedDate",
    "sortOrder": "1"
    }).then(resp => {
      if (resp.data.statusCode === 200) {
        setTotalCount(resp.data.response[0].totalCount);
        setReferralList(resp.data.response);
      }
    })
  }

  useEffect(() => {
    GetReferralList();
  }, [pageValue,pageSizeValue]);



  const SearchReferral=()=>{
    GetReferralList(searchEmail,searchReferralEmail,searchStartDate,searchEndDate);
  }

  const DownloadReferralExcelFile=()=>{
    axios({
      url: baseUrlApi + downloadReferralExcelFileApi,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "RefferalReport.xls");
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <section className="commonpage">
      <div className="wrapper3">
        <section className="Filter-form">

          <section id="Report-filter">
            <div className="Report-filter-field">
              <div className="filter-col">
                <label>Email</label>
                <input onChange={(e) => setSearchEmail(e.target.value)}
                  type="text"
                  maxLength={50}
                  placeholder="Name"
                />
              </div>
              <div className="filter-col">
                <label>Referral Email</label>
                <input onChange={(e) => setSearchReferralEmail(e.target.value)}
                  type="text"
                  maxLength={50}
                  placeholder="Email"
                />
              </div>
              <div className="filter-col minw-160">
                <label>Start Date</label>
                <div className="custom-select">
                <input onChange={(e) => setSearchStartDate(e.target.value)}
                  type="date"
                />
                </div>
              </div>
              <div className="filter-col minw-160">
                <label>End Date</label>
                <div className="custom-select">
                <input onChange={(e) => setSearchEndDate(e.target.value)}
                  type="date"
                 
                />
                </div>
              </div>
           
            </div>

          </section>
          <div className="Search-Formbtn no-loader">
            <button className='btn btn-success' onClick={()=>SearchReferral()}>Search</button>
            <button onClick={()=>DownloadReferralExcelFile()} className='btn btn-success'>Download</button>
          </div>
        </section>

        <div className="notfound" id="itemnotfound" />
        <div className="report table scroll-inside">
          <div className="common-page">
            <Table
              columns={columns}
              dataSource={referralList}
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
