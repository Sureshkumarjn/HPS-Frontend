import React ,{useState} from 'react';
import Footer from '../Compounts/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Compounts/Header.js';

export default function Medical_Camp() {
  const {BASE_URL} =require ('../config.js');

  const navigate=useNavigate();

  const [sate2,setsate2]=useState({
    cid:"",
    cname:"",
    cplace:"",
    cdate:"",
    ctime:"",
    caddress:""
  })
  function handlechange(evt)
    {
        setsate2({...sate2,[evt.target.name]: evt.target.value});

    }
    const handlesubmit=(e)=>
    {
        
        e.preventDefault();
     
         axios.post(BASE_URL +`camp/`,sate2)
         .then((res) => {
          toast.success('Insert success');
          console.log('Insert success:', res.data);
        })
        .catch((err) => {
          toast.error('Error during insertion');
          console.error(err);
        });
    }
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
                <div className='row '>
                    <div className='col-sm-6 '>
                          <h2 className='Head'>Medical Camp </h2>
                    </div>
                    <div className='col-sm-6 '>
                   <Link to="../Viewcamp"> <input type="submit" value="View Camp" className="ladda-button btn btn-primary mb-2 mt-3 fade-down  justify-content-end " data-style="expand-right" id='b1'></input></Link>
                     
                    </div>
                  </div>
                  <form onSubmit={e=>handlesubmit(e)}>
                  <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="inputAddress" className="form-label">Camp ID</label>
                                <input required="required" type="text" className="form-control" name="cid" id="inputAddress" placeholder=" ID" value={sate2.cid} onChange={handlechange}/>
                            </div>
                  </div>
                    <div className="form-row">
                       <div className="form-group col-md-6">
                            <label for="inputEmail4" className="col-form-label">Camp Name</label>
                            <input type="text" required="required" name="cname" className="form-control" id="inputEmail4" placeholder="Camp Name" value={sate2.cname} onChange={handlechange}/>
                       </div>
                       <div className="form-group col-md-6">
                            <label for="inputPassword4" className="col-form-label">Place</label>
                            <input required="required" type="text" name="cplace" className="form-control"  id="inputPassword4" placeholder="Place" value={sate2.cplace} onChange={handlechange}/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4" className="col-form-label">Date</label>
                                <input type="date" required="required" name="cdate" className="form-control" id="inputEmail4" placeholder="DD/MM/YYYY" value={sate2.cdate} onChange={handlechange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4" className="col-form-label">Time</label>
                                <input required="required" type="time" name="ctime" className="form-control"  id="inputPassword4" placeholder="Time" value={sate2.ctime} onChange={handlechange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input required="required" type="text" className="form-control" name="caddress" id="inputAddress" placeholder=" Addresss" value={sate2.caddress} onChange={handlechange}/>
                            </div>
                        </div>
                        
                      
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-3'>
                            <button type="submit" name="add_camp" className="ladda-button btn btn-primary mb-2 mt-3" data-style="expand-right">Add Camp</button>

                        </div>
                        <ToastContainer />
                    </div>
                  </form>
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
