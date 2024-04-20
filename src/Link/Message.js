import React, { useState } from "react";
import Footer from "../Compounts/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Compounts/Header.js";
function Message() {
  const { BASE_URL } = require("../config.js");

  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const sendEmail = async () => {
    try {
      const response = await fetch(BASE_URL + `send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast.success("Message Send");
      } else {
        console.error("Failed to send email:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
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
                      <h2>Message </h2>
                      {/*<div className='row'>
                    <div className='col-md-2 col-sm-3 col-lg-3'>
                        <Link to="../Doctor" className='header-link'><h4 className="header-title">Add Doctor</h4></Link> 
                     </div>
                    <div className='col-md-2 col-sm-3 col-lg-3'>
                       <Link to="../Viewdoctor" className='header-link'><h4 className="header-title">View Doctors</h4></Link> 
                    </div>
                </div> */}
                      <hr />
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputAddress" className="form-label">
                            To
                          </label>
                          <input
                            required="required"
                            type="email"
                            className="form-control"
                            name="to"
                            id="inputAddress"
                            placeholder="Demo@gmail.com"
                            value={emailData.to}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputAddress" className="form-label">
                            Subject
                          </label>
                          <input
                            required="required"
                            type="text"
                            className="form-control"
                            name="subject"
                            id="inputAddress"
                            value={emailData.subject}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label for="inputAddress" className="form-label">
                            Message
                          </label>
                          <textarea
                            required="required"
                            type="email"
                            className="form-control"
                            name="text"
                            id="inputAddress"
                            value={emailData.text}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <button
                            type="submit"
                            name="add_camp"
                            className="ladda-button btn btn-primary mb-2 mt-3"
                            data-style="expand-right"
                            onClick={sendEmail}
                          >
                            Send Email
                          </button>
                        </div>
                        <ToastContainer />
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
    </>
  );
}
export default Message;
