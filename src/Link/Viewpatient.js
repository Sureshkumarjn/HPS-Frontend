import React, { useState, useEffect } from "react";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";

import Footer from "../Compounts/Footer";
import Header from "../Compounts/Header.js";

const Viewpatient = () => {
  const { BASE_URL } = require("../config.js");

  //Backend Crud Opration

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [newvalue, newchange] = useState({
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

  useEffect(() => {
    axios
      .get(BASE_URL + `users/`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const hdelete = (pid) => {
    const confirm = window.confirm("Would you like to Delete?" + pid);
    if (confirm) {
      axios
        .delete(BASE_URL + `users/` + pid)
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
      .get(BASE_URL + `users/` + uid)
      .then(console.log(uid))
      .then((res) => newchange(res.data[0]))
      .catch((err) => console.log(err));
  };

  function uhandlechange(evt) {
    newchange({ ...newvalue, [evt.target.name]: evt.target.value });
  }
  const hsubmit = (e) => {
    e.preventDefault();
    console.log(newvalue);
    axios
      .put(BASE_URL + `users/` + newvalue.pid, { newvalue })
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

  const generatePDF = async () => {
    try {
      const response = await axios.get("http://localhost:3306/users/pdf", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.pdf");
      // response.setHeader('Content-Disposition', 'attachment; filename="users.pdf"');

      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  // const handleDownloadExcel = () => {
  //   window.open(BASE_URL+`users/download-excel`, '_blank');
  // };

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
                          <h2>Patient </h2>
                        </div>
                        <div className="col-sm-6 ">
                          <Link to="../Patient">
                            {" "}
                            <input
                              type="submit"
                              value="Back"
                              className="ladda-button btn btn-primary mb-2 mt-3 fade-down  justify-content-end "
                              data-style="expand-right"
                              id="b1"
                            ></input>
                          </Link>
                          {/* <input type="submit" value="Print" className="ladda-button btn btn-primary mb-2 mt-3  fade-down  justify-content-end "  onClick={generatePDF}></input> */}
                        </div>
                      </div>
                      <hr />
                      <div className="table-responsive">
                        <div
                          style={{
                            overflowX: "auto",
                            overflowY: "auto",
                            maxHeight: "500px",
                          }}
                        >
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Address</th>

                                <th>Blood Pressure</th>
                                <th>Pulse</th>
                                <th>SpO2 Rate</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Doctor Referral Name</th>
                                <th>Chief Complaint</th>

                                <th>Diagnosis </th>
                                <th>Blood Test </th>
                                <th>MRI</th>
                                <th>CTScan</th>
                                <th>XRay</th>

                                <th>Treatment </th>

                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((x, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{x.pid}</td>
                                    <td>{x.pname}</td>
                                    <td>{x.pdate}</td>
                                    <td>{x.page}</td>
                                    <td>{x.pgender}</td>
                                    <td>{x.pmobile}</td>
                                    <td>{x.paddress}</td>

                                    <td>{x.pbloodpr}</td>
                                    <td>{x.ppulse}</td>
                                    <td>{x.pspO2}</td>
                                    <td>{x.pheight}</td>
                                    <td>{x.pweight}</td>

                                    <td>{x.pdoctorre}</td>
                                    <td>{x.pchiefco}</td>

                                    <td>{x.pproblem}</td>
                                    <td>{x.pbloodtest}</td>
                                    <td>{x.pmri}</td>
                                    <td>{x.pctscan}</td>
                                    <td>{x.pxray}</td>

                                    <td>{x.ptreatment}</td>
                                    <td>
                                      <input
                                        type="button"
                                        className="ladda-button btn btn-outline-primary"
                                        value="Edit"
                                        onClick={(e2) => hget(x.pid)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="button"
                                        className="ladda-button btn btn-outline-danger"
                                        value="Delete"
                                        onClick={(e) => hdelete(x.pid)}
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
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Patient
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
                      Patient Id
                    </label>

                    <input
                      type="text"
                      required="required"
                      name="pid"
                      className="form-control"
                      value={newvalue.pid}
                      onChange={uhandlechange}
                      placeholder="Patient's Id"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4" className="col-form-label">
                      Patient Name
                    </label>
                    <input
                      required="required"
                      type="text"
                      name="pname"
                      className="form-control"
                      id="pname"
                      value={newvalue.pname}
                      onChange={uhandlechange}
                      placeholder="Patient`s Name"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4" className="col-form-label">
                        Date Of Birth
                      </label>
                      <input
                        type="text"
                        required="required"
                        name="pdate"
                        className="form-control"
                        id="pdate"
                        value={newvalue.pdate}
                        onChange={uhandlechange}
                        placeholder="DD/MM/YYYY"
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
                        name="page"
                        className="form-control"
                        id="page"
                        value={newvalue.page}
                        onChange={uhandlechange}
                        placeholder="Patient`s Age"
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
                        name="paddress"
                        id="paddress"
                        value={newvalue.paddress}
                        onChange={uhandlechange}
                        placeholder="Patient's Addresss"
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
                        value={newvalue.pproblem}
                        onChange={uhandlechange}
                      />
                    </div>

                    <div className="form-group col-md-6">
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
                        value={newvalue.ptreatment}
                        onChange={uhandlechange}
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
                        value={newvalue.pbloodtest}
                        onChange={uhandlechange}
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
                        value={newvalue.pmri}
                        onChange={uhandlechange}
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
                        value={newvalue.pctscan}
                        onChange={uhandlechange}
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
                        value={newvalue.pxray}
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
                        name="pmobile"
                        className="form-control"
                        value={newvalue.pmobile}
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
                        name="pgender"
                        className="form-control"
                        value={newvalue.pgender}
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
                        Height
                      </label>
                      <input
                        type="text"
                        required="required"
                        name="pheight"
                        className="form-control"
                        id="pheight"
                        placeholder="Height"
                        value={newvalue.pheight}
                        onChange={uhandlechange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputPassword4"
                        className="col-form-label"
                      >
                        Weight
                      </label>
                      <input
                        required="required"
                        type="text"
                        name="pweight"
                        className="form-control"
                        id="pweight"
                        placeholder="Weight"
                        value={newvalue.pweight}
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
};
export default Viewpatient;
