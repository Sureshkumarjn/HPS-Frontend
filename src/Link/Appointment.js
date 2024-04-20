import React,{useState,useEffect} from 'react'
import Footer from '../Compounts/Footer';
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 function Appointment() {
  const {BASE_URL} =require ('../config.js');

  //Appointment day wise code

  
  //Apointment dat wise
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ id: '', name: '', age: '' });
  const [todayData, setTodayData] = useState([]);
  const [setTotalAppointments] = useState(0);

  useEffect(() => {
    fetchData();
    fetchTodayData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL +`api/data`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTodayData = async () => {
    try {
      const response = await fetch(BASE_URL +`api/today-data`);
      const jsonData = await response.json();
      setTodayData(jsonData);
    } catch (error) {
      console.error('Error fetching today data:', error);
    }
  };

  const handleInsertData = async () => {
    try {
      const response = await fetch(BASE_URL +`api/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      const insertedData = await response.json();

      setData([...data, insertedData]);
      setNewData({ id: '', name: '', age: '' }); // Clear input fields
      fetchTodayData(); // Update today's data
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  useEffect(() => {
    // Fetch appointments from the server when the component mounts
    axios.get(BASE_URL +`api/data`)
      .then(response => setNewData(response.data))
      .catch(error => console.error(error));
      fetchTotalDataCount();
  }, []);
  const fetchTotalDataCount = () => {
    // Fetch total data count from the server
    axios.get(BASE_URL +`api/data/count/`)
      .then(response => setTotalAppointments(response.data.count))
      .catch(error => console.error(error));
  };


/*
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ date: '', time: '', patientName: '' });
    const [setTotalAppointments] = useState(0);
    //Display Date
    const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Fetch appointments from the server when the component mounts
    axios.get(BASE_URL +`api/appointments`)
      .then(response => setAppointments(response.data))
      .catch(error => console.error(error));
      fetchTotalDataCount();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleBookAppointment = () => {
    axios.post(BASE_URL +`api/appointments`, newAppointment)
      .then(response => {
        toast.success('Insert success');
        setAppointments([...appointments, response.data]);
        setNewAppointment({ date: '', time: '', patientName: '' });
        
      })
      
      .catch(error => console.error(error));
  };
  const fetchTotalDataCount = () => {
    // Fetch total data count from the server
    axios.get('http://localhost:8800/api/appointments/count/')
      .then(response => setTotalAppointments(response.data.count))
      .catch(error => console.error(error));
  };

  //Display Date And Time
  useEffect(() => {
    // Function to update current date
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      setCurrentDate(formattedDate);
    };

    // Set initial date
    updateDate();

    // Cleanup interval on component unmount
    return () => clearInterval();
  }, []);
*/
  return (
    <>
 
   <section className="home-section">
      <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
           
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card fade-up">
                <div className="card-body">
                <div className='row'>
                    <div className='col-md-10 '>
                        <h4 className="header-title">Add Appointment</h4>
                       
                     </div>
                     <div className='col-md-2 '>
                     </div>
                    
                </div>
                  <hr/>
                  <div>
      
      <div className='form-row'>
        <div className="form-group col-md-6">
          <label for="inputAddress" className="form-label">Id</label>
          <input type="text" className="form-control" value={newData.id} onChange={(e) => setNewData({ ...newData, id: e.target.value })} placeholder='Patient No' />
        </div>
        <div className="form-group col-md-6">
           <label for="inputAddress" className="form-label">Time</label>
           <input type="time"  className="form-control"   value={newData.age} onChange={(e) => setNewData({ ...newData, age: e.target.value })} />
        </div>
      </div>
      <div className='form-row'>
        
        <div className="form-group col-md-12">
           <label for="inputAddress" className="form-label">Name</label>

            <input type="text" className="form-control" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} placeholder='Patient Name' />

        </div>
      </div>
      <div className='form-row'>
          <div className='form-group col-md-3'>
              <button type="submit" name="add_Appointment" className="ladda-button btn btn-primary mb-2 mt-3" data-style="expand-right" onClick={handleInsertData}>Add Appointment</button>

          </div>
       </div>
      
     
      <div className='form-row'>
        <div className="form-group col-md-12">
            <h4 className="header-title">Today's Appointments</h4>
        </div>
       
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {todayData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div  className='form-row'>
       <div className="form-group col-md-12">
            <h4 className="header-title">All Data</h4>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
                {/*
                <form>
                  <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputAddress" className="form-label">Date</label>
                                <input required="required" type="date" className="form-control" name="date" id="inputAddress" placeholder=" ID"  value={newAppointment.date} onChange={handleInputChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputAddress" className="form-label">Time</label>
                                <input required="required" type="time" className="form-control" name="time" id="inputAddress" placeholder=" ID"  value={newAppointment.time} onChange={handleInputChange}/>
                            </div>
                  </div>
                  <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="inputAddress" className="form-label">Patient Name</label>
                                <input required="required" type="text" className="form-control" name="patientName" id="inputAddress" placeholder=" Patient Name"  value={newAppointment.patientName} onChange={handleInputChange} />
                            </div>
                          
                  </div>
                  <div className='form-row'>
                        <div className='form-group col-md-3'>
                            <button type="submit" name="add_Appointment" className="ladda-button btn btn-primary mb-2 mt-3" data-style="expand-right" onClick={handleBookAppointment}>Add Appointment</button>

                        </div>
                        <ToastContainer />
                    </div>
                    <table className='table table-striped'>
                  <thead>
                  <tr>
                  <th>Patients Name</th>
                  <th>Appointment Date</th>
                  <th>Appiontment Time</th>
                 
                  

                  </tr>
               </thead>
               <tbody>
       {appointments.map((appointment,index)=>{
        return <tr key={index}>
            <td>{`${appointment.patientName}`}</td>
           <td>{`${appointment.date}`}</td>
           <td>{`${appointment.time}`}</td>
           
           
         
       

         </tr>
       })}
      </tbody>
                </table>
             
                  </form>
                 */} 
                  
                </div>
              </div>
            </div><Footer/>
          </div>
        </div>
      </div>
     
    </div>
    
    </section>  
    </>
  )
}
export default  Appointment;