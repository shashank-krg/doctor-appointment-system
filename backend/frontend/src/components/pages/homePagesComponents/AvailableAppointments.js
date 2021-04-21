import React, { useContext, useState, useEffect } from 'react';
import AppointmentsItem from './AppointmentsItem';
import { UserContext } from '../../useAuth';
import axios from 'axios';
const Api = 'http://localhost:4000/api/';

const AvailableAppointments = ({date}) => {
  const {selectTedDate} = useContext(UserContext)
  const [availableSlot, setAvailableSlot] = useState([])

  useEffect(()=> {
      const getData = async () => {
        const response =  await axios.get(Api+'slot')
        setAvailableSlot(response.data.data)
      }
      getData();
  },[])

  return (
   
    <div className="container availableAppoitments-container">
      <div className="row ">
        <div className="col section-title text-center">
          <h2 className="text-center fwb cp">Available Appointments on {selectTedDate}</h2>
        </div>
      </div>
      <div className="available-items-container pt-4">
      <div className="row">
        {availableSlot && availableSlot.map(item =>  <AppointmentsItem item={item} key={item._id} />)}
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointments;