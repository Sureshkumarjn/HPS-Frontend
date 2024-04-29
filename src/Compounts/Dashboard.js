import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import "./Bill.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PdfTemplate from "./PDF/Template";
import Header from "./Header.js";
const Dashboard = () => {
  const { BASE_URL } = require("../config.js");

  //Get Patients Detailes from backend

  const navigate = useNavigate();

  const [userId, setUserId] = useState("");

  const [user, setUser] = useState({
    pid: "",
    pname: "",
    pdate: "",
    page: "",
    paddress: "",
    pmobile: "",
    pgender: "",
    pheight: "",
    pweight: "",
  });
  const fetchDataById = () => {
    // Fetch data from the backend based on the entered ID
    axios
      .get(BASE_URL + `api2/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast.error("User Not Found");
          navigate(0);
        } else {
          console.error("Error fetching data:", error);
        }
      });
  };

  //Total Count Display
  const [totalCount, setTotalCount] = useState(0);

  const [totalCount1, setTotalCount1] = useState(0);

  //Count Data From JSON
  const [appointments, setAppointments] = useState([]);

  const [totalAppointments, setTotalAppointments] = useState(0);
  const [InvoiceNumber, setInvoiceNumber] = useState("");

  const [Dates, setDates] = useState("");

  const [view, setView] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL + "users/count/");
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get(BASE_URL + "camp/count/");
      setTotalCount1(response.data.totalCount1);
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };
  //Count Appointments fromjSON
  useEffect(() => {
    // Fetch appointments from the server when the component mounts
    axios
      .get(BASE_URL + "api/data")
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error(error));
    fetchTotalDataCount();
  }, []);
  const fetchTotalDataCount = () => {
    // Fetch total data count from the server
    axios
      .get(BASE_URL + "api/data/count/")
      .then((response) => setTotalAppointments(response.data.count))
      .catch((error) => console.error(error));
  };
  //patient
  useEffect(() => {
    fetchData();
  }, []);

  //camp
  useEffect(() => {
    fetchData1();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  const handlePrint = () => {
    window.print();
  };
  let newDate = new Date();
  let date = newDate.getDate();

  const numbers = [
    {
      product: "dsdsd",
      amount: "23782",
    },
    {
      product: "dsd",
      amount: "993",
    },
    {
      product: "dssdffedfdsd",
      amount: "623",
    },
  ];

  useEffect(() => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    console.log(`Date is ${date}`);
    setDates(date);
  }, []);

  const Create = () => {
    setView(false);
  };
  return (
    <>
      <Header />
      <section className="home-section">
        <div className="container">
          <div className="text">Dashboard</div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12" id="card1">
              <Link to="../Viewpatient" id="Linka">
                <div className="card fade-up">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col col-5">
                        <div className="icon p-0 fs-48 text-primary opacity-50 icofont-first-aid-alt">
                          <i className="fa-solid fa-hospital-user"></i>
                        </div>
                      </div>
                      <div className="col col-7">
                        <h6 className="mt-0 mb-1 ">Total Patient</h6>
                        <div className="count text-primary fs-20">
                          {totalCount}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" id="card1">
              <Link to="../Viewcamp" id="Linka">
                <div className="card fade-up">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col col-5">
                        <div className="icon p-0 fs-48 text-primary opacity-50 icofont-first-aid-alt">
                          <i className="fa-solid fa-tent"></i>
                        </div>
                      </div>
                      <div className="col col-7">
                        <h6 className="mt-0 mb-1">Camp Details</h6>
                        <div className="count text-primary fs-20">
                          {totalCount1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" id="card1">
              <Link to="../Appointment" id="Linka">
                <div className="card fade-up">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col col-5">
                        <div className="icon p-0 fs-48 text-primary opacity-50 icofont-first-aid-alt">
                          <i className="fa-solid fa-handshake"></i>
                        </div>
                      </div>
                      <div className="col col-7">
                        <h6 className="mt-0 mb-1">Appointments</h6>
                        <div className="count text-primary fs-20">
                          {totalAppointments}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row"></div>
              <div className="row">
                <div className="col-12">
                  <div className="card fade-up">
                    <div className="card-body">
                      <h4 className="header-title fade-down">Bill Payment</h4>
                      {/* <form onSubmit={handleSubmit}>
                        <div className="form-row">
                          <div className="form-group col-md-12 ">
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
                              value={userId}
                              onChange={(e) => setUserId(e.target.value)}
                            />
                          </div>
                        </div>

                        <button
                          className="ladda-button btn btn-primary mb-2 mt-3 fade-down"
                          data-style="expand-right"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={fetchDataById}
                        >
                          Make Payment
                        </button>
                      </form> */}
                      {view ? (
                        <div className="containers">
                          <div className="form">
                            <div className="inputs">
                              <input
                                type="text"
                                placeholder="Enter Patient Name"
                                className="form-control fade-down"
                                value={InvoiceNumber}
                                onChange={(e) =>
                                  setInvoiceNumber(e.target.value)
                                }
                              />
                            </div>
                            <div className="buttons">
                              <button
                                onClick={Create}
                                className="ladda-button btn btn-primary mb-2 mt-3 fade-down"
                              >
                                Bill Payment{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <PdfTemplate
                          InvoiceNumber={InvoiceNumber}
                          date={Dates}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Payment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
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
                      value={user.pid}
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
                      value={user.pname}
                      placeholder="Patient`s Name"
                      readOnly
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        required="required"
                        type="text"
                        className="form-control"
                        name="paddress"
                        id="paddress"
                        value={user.paddress}
                        placeholder="Patient's Addresss"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity" className="col-form-label">
                        Mobile Number
                      </label>
                      <input
                        required="required"
                        type="text"
                        name="pmobile"
                        className="form-control"
                        value={user.pmobile}
                        id="pmobile"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputAddress" className="form-label">
                        Amount
                      </label>
                      <input
                        required="required"
                        type="text"
                        className="form-control"
                        name="paddress"
                        id="paddress"
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
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handlePrint}
                    >
                      Pay
                    </button>
                  </div>
                </div>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Dashboard;
