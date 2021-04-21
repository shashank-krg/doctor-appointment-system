import React, { useState, useEffect } from 'react';
import RecentAppointmentTable from '../Table/RecentAppointmentTable';
import axios from 'axios';
import Loading from '../../../uttiles/Loading';
const Api = 'http://localhost:4000/api/';
const DashboardPage = () => {

  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=> {
    const getTableData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(Api+'appointment/?limit=10')
        setTableData(response.data.data.appointments)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    getTableData()

  },[])

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h2">Dashboard</h1>
      </div>
  
      {isLoading ?  <Loading/> :  <RecentAppointmentTable data={tableData} />}
     
     
    </>
  );
};

export default DashboardPage;