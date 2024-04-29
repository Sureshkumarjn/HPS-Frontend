import React ,{useState} from 'react';
import Footer from '../Compounts/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Compounts/Header.js';


export default function Doctor() {

  const {BASE_URL} =require ('../config.js');
  const [sate1,setsate1]=useState({
    did:"",
    dname:"",
    ddate:"",
    dage:"",
    daddress:"",
    dmobile:"",
    dgender:"",
    dpostion:""
   
    

  })
  function handlechange(evt)
    {
        setsate1({...sate1,[evt.target.name]: evt.target.value});

    }
    const handlesubmit=(e)=>
    {
        
        e.preventDefault();
     
         axios.post(BASE_URL +`doctor/`,sate1)
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
              <div className="row"></div>
              <div className="row">
                <div className="col-12">
                  <div className="card fade-up">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col-sm-6 ">
                          <h2 className="Head">Doctor </h2>
                        </div>
                        <div className="col-sm-6 ">
                          <Link to="../Viewdoctor">
                            {" "}
                            <input
                              type="submit"
                              value="View Doctor"
                              className="ladda-button btn btn-primary mb-2 mt-3 fade-down  justify-content-end "
                              data-style="expand-right"
                              id="b1"
                            ></input>
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <form onSubmit={(e) => handlesubmit(e)}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label for="inputEmail4" className="col-form-label">
                              Doctor Id
                            </label>
                            <input
                              type="text"
                              required="required"
                              name="did"
                              className="form-control"
                              id="inputEmail4"
                              placeholder="Doctor Id"
                              value={sate1.did}
                              onChange={handlechange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label
                              for="inputPassword4"
                              className="col-form-label"
                            >
                              Doctor Name
                            </label>
                            <input
                              required="required"
                              type="text"
                              name="dname"
                              className="form-control"
                              id="inputPassword4"
                              placeholder="Doctor Name"
                              value={sate1.dname}
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
                                name="ddate"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="DD/MM/YYYY"
                                value={sate1.ddate}
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
                                name="dage"
                                className="form-control"
                                id="inputPassword4"
                                placeholder="Doctor`s Age"
                                value={sate1.dage}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputAddress"
                                className="form-label"
                              >
                                Address
                              </label>
                              <input
                                required="required"
                                type="text"
                                className="form-control"
                                name="paddress"
                                id="daddress"
                                placeholder="Doctots's Addresss"
                                value={sate1.daddress}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputCity"
                                className="col-form-label"
                              >
                                Mobile Number
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="dmobile"
                                className="form-control"
                                id="pmobile"
                                value={sate1.dmobile}
                                onChange={handlechange}
                              />
                            </div>

                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputState"
                                className="col-form-label"
                              >
                                Gender
                              </label>
                              <select
                                id="pgender"
                                required="required"
                                name="dgender"
                                className="form-control"
                                value={sate1.dgender}
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
                                name="dpostion"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Postion"
                                value={sate1.dpostion}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-3">
                            <button
                              type="submit"
                              name="dbutton"
                              className="ladda-button btn btn-primary mb-2 mt-3"
                              data-style="expand-right"
                            >
                              Add Doctor
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
