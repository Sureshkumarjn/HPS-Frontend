import React,{useState} from 'react';
import Footer from '../Compounts/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Compounts/Header.js';

export default function Employee() {
  const {BASE_URL} =require ('../config.js');

  const [sate3,setsate3]=useState({
    eid:"",
    ename:"",
    edate:"",
    eage:"",
    eaddress:"",
    emobile:"",
    egender:"",
    epostion:""
   
    

  })
  function handlechange(evt)
    {
        setsate3({...sate3,[evt.target.name]: evt.target.value});

    }
    const handlesubmit=(e)=>
    {
        
        e.preventDefault();
     
         axios.post(BASE_URL +`employee/`,sate3)
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
      <Header />
      <section className="home-section">
        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card fade-up">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col-sm-6 ">
                          <h2 className="Head">Employee </h2>
                        </div>
                        <div className="col-sm-6 ">
                          <Link to="../Viewemp">
                            {" "}
                            <input
                              type="submit"
                              value="View Employee"
                              className="ladda-button btn btn-primary mb-2 mt-3 fade-down  justify-content-end "
                              data-style="expand-right"
                              id="b1"
                            ></input>
                          </Link>
                        </div>
                      </div>
                      <form onSubmit={(e) => handlesubmit(e)}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label for="inputEmail4" className="col-form-label">
                              Employee Id
                            </label>
                            <input
                              type="text"
                              required="required"
                              name="eid"
                              className="form-control"
                              id="inputEmail4"
                              placeholder="Employee Id"
                              value={sate3.eid}
                              onChange={handlechange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label
                              for="inputPassword4"
                              className="col-form-label"
                            >
                              Employee Name
                            </label>
                            <input
                              required="required"
                              type="text"
                              name="ename"
                              className="form-control"
                              id="inputPassword4"
                              placeholder="Employee Name"
                              value={sate3.ename}
                              onChange={handlechange}
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                for="inputEmail4"
                                className="col-form-label"
                              >
                                Date Of Birth
                              </label>
                              <input
                                type="date"
                                required="required"
                                name="edate"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="DD/MM/YYYY"
                                value={sate3.edate}
                                onChange={handlechange}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label
                                for="inputPassword4"
                                className="col-form-label"
                              >
                                Age
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="eage"
                                className="form-control"
                                id="inputPassword4"
                                placeholder="Patient`s Age"
                                value={sate3.eage}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label for="inputAddress" className="form-label">
                                Address
                              </label>
                              <input
                                required="required"
                                type="text"
                                className="form-control"
                                name="eaddress"
                                id="inputAddress"
                                placeholder="Patient's Addresss"
                                value={sate3.eaddress}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputCity" className="col-form-label">
                                Mobile Number
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="emobile"
                                className="form-control"
                                id="inputCity"
                                placeholder="Phone Number"
                                value={sate3.emobile}
                                onChange={handlechange}
                              />
                            </div>

                            <div className="form-group col-md-6">
                              <label
                                for="inputState"
                                className="col-form-label"
                              >
                                Gender
                              </label>
                              <select
                                id="inputState"
                                required="required"
                                name="egender"
                                className="form-control"
                                value={sate3.egender}
                                onChange={handlechange}
                              >
                                <option>Choose</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label
                                for="inputEmail4"
                                className="col-form-label"
                              >
                                Postion
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="epostion"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Postion"
                                value={sate3.epostion}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-3">
                            <button
                              type="submit"
                              name="add_patient"
                              className="ladda-button btn btn-primary mb-2 mt-3"
                              data-style="expand-right"
                            >
                              Add Employee
                            </button>
                          </div>
                          <ToastContainer />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
