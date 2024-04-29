import React, { useState } from "react";
import "./css/login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Admin Login</h2>
            </div>
          </div>
          <div className="row justify-content-center login-w">
            <div className="col-md-7 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-user-o span"></span>
                </div>
                <h3 className="text-center mb-4">Sign In</h3>
                <form action="#" className="login-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left input"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="password"
                      className="form-control rounded-left input"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group button ">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Login
                    </button>
                  </div>
                  <div className="form-group1 link ">
                    <label className="lab mt-2">
                      Developed by © APS Infotech Solutions
                    </label>
                    <label>
                      Contact:<a href="">+91 9944449446</a>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
