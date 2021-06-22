import React, { useState, useRef } from "react";
// import "../assets/css/style.min.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">This field is required!</div>
    );
  }
};
const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
        console.log(props)
      alert("hellllooo!")
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.error) ||
            error.error ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
         
        }
      );
    } else {
      setLoading(false);
    }
  
  };


  return (
    <div>
      <div className="main-wrapper">

        <div className="row auth-wrapper gx-0">
          <div className="col-lg-4 col-xl-3 bg-info auth-box-2 on-sidebar">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center text-center">
                <div className="col-md-7 col-lg-12 col-xl-9">
                  <div>

                    <span className="db"><img src="https://test.riseonigeria.com:8006/assets/images/logo.png" alt="logo" /></span>
                  </div>
                  <h2 className="text-white mt-4 fw-light">Welcome to a <span className="font-weight-medium">Fast & Responsive</span> Web App</h2>
                  <p className="op-5 text-white fs-4 mt-4">Where all admins activities can be made.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-9 d-flex align-items-center justify-content-center">
            <div className="row justify-content-center w-100 mt-4 mt-lg-0">
              <div className="col-lg-6 col-xl-3 col-md-7">

                <div className="card" id="loginform">
                  <div className="card-body">
                    <h2>Welcome to Adminpro</h2>
                    <p className="text-muted fs-4">if you want! <a href="javascript:void(0)" id="to-register">Create new admin</a></p>
                    <Form onSubmit={handleLogin} ref={form} className="form-horizontal mt-4 pt-4 needs-validation">
                        <label htmlFor="tb-email">Email</label>
                      <div className="form-floating mb-3">
                        
                        <Input type="email" className="form-control form-input-bg" id="tb-email" placeholder="name@example.com" name="email" value={email} onChange={onChangeEmail} validations={[required]} />
                      
                        <div className="invalid-feedback">
                          Email is required
                        </div>
                      </div>
                      <label htmlFor="text-password">Password</label>
                      <div className="form-floating mb-3">

                        <Input type="password" className="form-control form-input-bg" id="text-password" placeholder="*****" name="password" value={password} onChange={onChangePassword} validations={[required]} />
                        {/* <label htmlFor="text-password">Password</label> */}
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="r-me1" required />
                          <label className="form-check-label" for="r-me1">
                            Remember me
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                        <div className="ms-auto">
                          <a href="/forgot" id="to-recover" className="fw-bold">Forgot Password?</a>
                        </div>
                      </div>
                      <div className="d-flex align-items-stretch button-group mt-4 pt-2">

                        <button className="btn btn-info btn-lg px-4" disabled={loading}>
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Sign In</span>
                        </button>
                      </div>
                      {message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {message}
                          </div>
                        </div>
                      )}
                      <CheckButton style={{ display: "none" }} ref={checkBtn} />
                      </Form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )

}
export default Login