import React, { useState } from "react";
import "../css/style.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import Footer from "../Compounts/Footer";
import Header from "../Compounts/Header.js";
const Patient = () => {
  const { BASE_URL } = require("../config.js");

  const [sate, setsate] = useState({
    pid: "",
    pname: "",
    pdate: "",
    page: "",
    paddress: "",
    pproblem: "",
    ptreatment: "",
    pbloodtest: "",
    pmri: "",
    pctscan: "",
    pxray: "",
    pmobile: "",
    pgender: "",
    pheight: "",
    pweight: "",
    pbloodpr: "",
    ppulse: "",
    pspO2: "",
    pdoctorre: "",
    pchiefco: "",
  });
  function handlechange(evt) {
    setsate({ ...sate, [evt.target.name]: evt.target.value });
  }
  const handlesubmit = (e) => {
    e.preventDefault();

    axios
      .post(BASE_URL + `users/`, sate)
      .then((res) => {
        toast.success("Insert success");
        console.log("Insert success:", res.data);
      })
      .catch((err) => {
        toast.error("Error during insertion");
        console.error(err);
      });
  };

  return (
    <>
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
                          <h2 className="Head">Patient </h2>
                        </div>
                        <div className="col-sm-6 ">
                          <Link to="../Viewpatient">
                            {" "}
                            <input
                              type="submit"
                              value="View Patient"
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
                          <div className="form-group col-md-6 ">
                            <label
                              htmlFor="inputEmail4"
                              className="col-form-label fade-down"
                            >
                              Patient Id
                            </label>
                            <input
                              type="text"
                              required="required"
                              name="pid"
                              className="form-control fade-down"
                              id="pid"
                              placeholder="Patient's Id"
                              value={sate.pid}
                              onChange={handlechange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label
                              htmlFor="inputPassword4"
                              className="col-form-label fade-down"
                            >
                              Patient Name
                            </label>
                            <input
                              required="required"
                              type="text"
                              name="pname"
                              className="form-control fade-down"
                              id="pname"
                              placeholder="Patient`s Name"
                              value={sate.pname}
                              onChange={handlechange}
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                Date Of Birth
                              </label>
                              <input
                                type="date"
                                required="required"
                                name="pdate"
                                className="form-control fade-down"
                                id="pdate"
                                placeholder="DD/MM/YYYY"
                                value={sate.pdate}
                                onChange={handlechange}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputPassword4"
                                className="col-form-label fade-down"
                              >
                                Age
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="page"
                                className="form-control fade-down"
                                id="page"
                                placeholder="Patient`s Age"
                                value={sate.page}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputState"
                                className="col-form-label fade-down"
                              >
                                Gender
                              </label>
                              <select
                                id="pgender"
                                required="required"
                                name="pgender"
                                className="form-control fade-down"
                                value={sate.pgender}
                                onChange={handlechange}
                              >
                                <option>Choose</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputCity"
                                className="col-form-label fade-down"
                              >
                                Mobile Number
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="pmobile"
                                className="form-control fade-down"
                                id="pmobile"
                                placeholder="Mobile Number"
                                value={sate.pmobile}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label
                                htmlFor="inputAddress"
                                className="form-label fade-down"
                              >
                                Address
                              </label>
                              <input
                                required="required"
                                type="text"
                                className="form-control fade-down"
                                name="paddress"
                                id="paddress"
                                placeholder="Patient's Addresss"
                                value={sate.paddress}
                                onChange={handlechange}
                              />
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                Blood Pressure
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="pbloodpr"
                                className="form-control fade-down"
                                id="pbloodpr"
                                placeholder=" Blood Pressure"
                                value={sate.pbloodpr}
                                onChange={handlechange}
                              />
                            </div>

                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputPassword4"
                                className="col-form-label fade-down"
                              >
                                Pulse
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="ppulse"
                                className="form-control fade-down"
                                id="ppulse"
                                placeholder="Pulse Rate"
                                value={sate.ppulse}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                SpO2
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="pspO2"
                                className="form-control fade-down"
                                id="pspO2"
                                placeholder="SpO2 Rate"
                                value={sate.pspO2}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                Height
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="pheight"
                                className="form-control fade-down"
                                id="pheight"
                                placeholder="Height"
                                value={sate.pheight}
                                onChange={handlechange}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputPassword4"
                                className="col-form-label fade-down"
                              >
                                Weight
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="pweight"
                                className="form-control fade-down"
                                id="pweight"
                                placeholder="Weight"
                                value={sate.pweight}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                Doctor Referral Name
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="pdoctorre"
                                className="form-control fade-down"
                                id="pdoctorre"
                                placeholder=" Doctor Referral Name"
                                value={sate.pdoctorre}
                                onChange={handlechange}
                              />
                            </div>

                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputPassword4"
                                className="col-form-label fade-down"
                              >
                                Chief Complaint
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="pchiefco"
                                className="form-control fade-down"
                                id="pchiefco"
                                placeholder="Chief Complaint"
                                value={sate.pchiefco}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                Diagnosis
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="pproblem"
                                className="form-control fade-down"
                                id="pproblem"
                                placeholder="Diagnosis"
                                value={sate.pproblem}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                Blood Test
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="pbloodtest"
                                className="form-control fade-down"
                                id="pbloodtest"
                                placeholder="Blood Test"
                                value={sate.pbloodtest}
                                onChange={handlechange}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputPassword4"
                                className="col-form-label fade-down"
                              >
                                MRI
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="pmri"
                                className="form-control fade-down"
                                id="pmri"
                                placeholder="MRI"
                                value={sate.pmri}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputEmail4"
                                className="col-form-label fade-down"
                              >
                                CT Scan
                              </label>
                              <input
                                type="text"
                                required="required"
                                name="pctscan"
                                className="form-control fade-down"
                                id="pctscan"
                                placeholder="CT Scan"
                                value={sate.pctscan}
                                onChange={handlechange}
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label
                                htmlFor="inputPassword4"
                                className="col-form-label fade-down"
                              >
                                X Ray
                              </label>
                              <input
                                required="required"
                                type="text"
                                name="pxray"
                                className="form-control fade-down"
                                id="pxray"
                                placeholder="X Ray"
                                value={sate.pxray}
                                onChange={handlechange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label
                              htmlFor="inputPassword4"
                              className="col-form-label fade-down"
                            >
                              Treatment
                            </label>
                            <input
                              required="required"
                              type="text"
                              name="ptreatment"
                              className="form-control fade-down"
                              id="ptreatment"
                              placeholder="Treatment"
                              value={sate.ptreatment}
                              onChange={handlechange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-3">
                            <input
                              type="submit"
                              value="Add Patient"
                              className="ladda-button btn btn-primary mb-2 mt-3 fade-down"
                              data-style="expand-right"
                            ></input>
                          </div>
                        </div>

                        <ToastContainer />
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
};
export default Patient;
