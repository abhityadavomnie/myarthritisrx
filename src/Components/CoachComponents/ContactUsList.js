import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Table } from "antd";
import { baseUrlApi, downloadContactUsListApi, getContactUsListApi } from '../../Helper/ApiUrlHelper';

export default function ContactUsList() {

    const Paging = (page, pagesize) =>
    {
        debugger
        setPageSizeValue(pagesize);
        setPageValue(page);
    };

    const columns = [
        {
          title: "S.No",
          dataIndex: "id",
          sorter: (record1, record2) => {
            return record1.id > record2.id;
          },
        },
        {
          title: "Name",
          dataIndex: "name",
          sorter: (record1, record2) => {
            return record1.name > record2.name;
          },
        },
        {
          title: "Inquire Type",
          dataIndex: "inquiry",
          sorter: (record1, record2) => {
            return record1.inquiry>record2.inquiry;
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
          title: "Country",
          dataIndex: "country",
          sorter: (record1, record2) => {
            return record1.country > record2.country;
          },
        },
        {
          title: "City",
          dataIndex: "city",
          sorter: (record1, record2) => {
            return record1.city > record2.city;
          },
        },
        {
          title: "ZipCode",
          dataIndex: "zipCode",
          sorter: (record1, record2) => {
            return record1.zipCode > record2.zipCode;
          },
        },
        {
            title: "ModifiedOn",
            dataIndex: "createdDate",
            sorter: (record1, record2) => {
              return record1.zipCode > record2.zipCode;
            },
          },
      ];

   const [pageSizeValue, setPageSizeValue] = useState(10);
   const [contactUsList, setContactUsList]= useState([]);
   const [pageValue, setPageValue] = useState(1);
   const [totalCount, setTotalCount] = useState(0);

   const GetContactUsList=()=>{
    axios.post(baseUrlApi + getContactUsListApi, {
        pageSize: pageSizeValue,
        pageIndex: pageValue,
        sortBy: "createdDate",
        sortOrder: 1,
        email: '',
        startDate: null,
        endDate: null,
        totalRecords: 0,
      })
      .then((resp) => {
        setTotalCount(resp.data.response[0].totalRecords);
        setContactUsList(resp.data.response);
      });
   }

   useEffect(() => {
    debugger
    GetContactUsList();
  }, [pageValue,pageSizeValue]);

  const DownloadContactUsList=()=>{
    axios({
        url: baseUrlApi + downloadContactUsListApi,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "ContactUsReport.xls");
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
                            <label>Name</label>
                            <input 
                                type="text"
                                maxLength={50}
                                placeholder="Name"
                            />
                        </div>
                        <div className="filter-col">
                            <label>Email</label>
                            <input 
                                type="text"
                                maxLength={50}
                                placeholder="Email"
                            />
                        </div>
                      
                    </div>
                   
                </section>
                <div className="Search-Formbtn no-loader">
                         <button className='btn btn-success'>Search</button>
                         <button className='btn btn-success' onClick={()=>DownloadContactUsList()}>Download</button>
                    </div>
        </section>

        <div className="notfound" id="itemnotfound" />
        <div className="report table scroll-inside">
            <div className="common-page">
                <Table
                    columns={columns}
                    dataSource={contactUsList}
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
