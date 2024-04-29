import React, { useState, useEffect } from "react";
import Footer from "../Compounts/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Compounts/Header.js";

export default function Viewemp() {
  const { BASE_URL } = require("../config.js");

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [newvalue3, newchange] = useState({
    eid: "",
    ename: "",
    edate: "",
    eage: "",
    eaddress: "",
    emobile: "",
    egender: "",
    epostion: "",
  });

  useEffect(() => {
    axios
      .get(BASE_URL + `employee/`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const hdelete = (eid) => {
    const confirm = window.confirm("Would you like to Delete?" + eid);
    if (confirm) {
      axios
        .delete(BASE_URL + `employee/` + eid)
        .then((res) => {
          toast.error("Delete success");
          console.log("Delete success:");
          navigate(0);
        })
        .catch((err) => {
          toast.error("Error during insertion");
          console.error(err);
        });
    }
  };
  const hget = (uid) => {
    axios
      .get(BASE_URL + `employee/` + uid)
      .then(console.log(uid))
      .then((res) => newchange(res.data[0]))
      .catch((err) => console.log(err));
  };

  function uhandlechange(evt) {
    newchange({ ...newvalue3, [evt.target.name]: evt.target.value });
  }
  const hsubmit = (e) => {
    e.preventDefault();
    console.log(newvalue3);
    axios
      .put(BASE_URL + `employee/` + newvalue3.eid, { newvalue3 })
      .then((res) => {
        navigate(0);
        toast.success("Update success");
        console.log("Update success:");
      })
      .catch((err) => {
        toast.error("Error during insertion");
        console.error(err);
      });
  };

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
                          <h2 className="Head">Employee </h2>
                        </div>
                        <div className="col-sm-6 ">
                          <Link to="../Employee">
                            {" "}
                            <input
                              type="submit"
                              value="Back"
                              className="ladda-button btn btn-primary mb-2 mt-3 fade-down  justify-content-end "
                              data-style="expand-right"
                              id="b1"
                            ></input>
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                            <th>Postion</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((x, index) => {
                            return (
                              <tr key={index}>
                                <td>{x.eid}</td>
                                <td>{x.ename}</td>
                                <td>{x.edate}</td>
                                <td>{x.eage}</td>
                                <td>{x.eaddress}</td>
                                <td>{x.emobile}</td>
                                <td>{x.egender}</td>
                                <td>{x.epostion}</td>
                                <td>
                                  <input
                                    type="button"
                                    className="ladda-button btn btn-outline-primary"
                                    value="Edit"
                                    onClick={(e2) => hget(x.eid)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="button"
                                    className="ladda-button btn btn-outline-danger"
                                    value="Delete"
                                    onClick={(e) => hdelete(x.eid)}
                                  />
                                </td>
                                <ToastContainer />
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Doctor Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => hsubmit(e)}>
                <div classNameName="form-row">
                  <div className="form-group col-md-6 ">
                    <label htmlFor="inputEmail4" className="col-form-label">
                      Doctor Id
                    </label>

                    <input
                      type="text"
                      required="required"
                      name="eid"
                      className="form-control"
                      value={newvalue3.eid}
                      onChange={uhandlechange}
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4" className="col-form-label">
                      Doctor Name
                    </label>
                    <input
                      required="required"
                      type="text"
                      name="ename"
                      className="form-control"
                      id="pname"
                      value={newvalue3.ename}
                      onChange={uhandlechange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4" className="col-form-label">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        required="required"
                        name="edate"
                        className="form-control"
                        id="pdate"
                        value={newvalue3.edate}
                        onChange={uhandlechange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputPassword4"
                        className="col-form-label"
                      >
                        Age
                      </label>
                      <input
                        required="required"
                        type="text"
                        name="eage"
                        className="form-control"
                        id="page"
                        value={newvalue3.eage}
                        onChange={uhandlechange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        required="required"
                        type="text"
                        className="form-control"
                        name="eaddress"
                        id="paddress"
                        value={newvalue3.eaddress}
                        onChange={uhandlechange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity" className="col-form-label">
                        Mobile Number
                      </label>
                      <input
                        required="required"
                        type="text"
                        name="emobile"
                        className="form-control"
                        value={newvalue3.emobile}
                        onChange={uhandlechange}
                        id="pmobile"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="inputState" className="col-form-label">
                        Gender
                      </label>
                      <select
                        id="pgender"
                        required="required"
                        name="egender"
                        className="form-control"
                        value={newvalue3.egender}
                        onChange={uhandlechange}
                      >
                        <option>Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4" className="col-form-label">
                        Postion
                      </label>
                      <input
                        type="text"
                        required="required"
                        name="epostion"
                        className="form-control"
                        id="pheight"
                        value={newvalue3.epostion}
                        onChange={uhandlechange}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                  <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
