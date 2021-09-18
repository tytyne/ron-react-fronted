import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {forgot} from "../actions/forgotPassword"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../assets/dist/css/style.min.css"
import { isEmail } from "validator"



const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        )
    }
}

const Forgot = (props) => {
    const form = useRef()
    const checkBtn = useRef()
    const [email, setEmail] = useState("")
    const [successful, setSuccessful] = useState(false);
   
 
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    }

    const handleReset =(e)=>{
        const reset=""
        setEmail(reset)
    }
    const handleForgot = (e) => {
        e.preventDefault();
        setSuccessful(false)
        form.current.validateAll()
      
    if (checkBtn.current.context._errors.length === 0) {
        dispatch(forgot(email))
          .then(() => {
            setSuccessful(true)
          })
          .catch(() => {
            setSuccessful(false)
          });
      } else {
        setSuccessful(false)
      }
    }


    return (
        <div>
            <div class="main-wrapper">

                <div class="row auth-wrapper gx-0">
                    <div class="col-lg-4 col-xl-3 bg-info auth-box-2 on-sidebar">
                        <div class="h-100 d-flex align-items-center justify-content-center">
                            <div class="row justify-content-center text-center">
                                <div class="col-md-7 col-lg-12 col-xl-9">
                                    <div>

                                        <span class="db"><img src="https://test.riseonigeria.com:8006/assets/images/logo.png" alt="logo" /></span>
                                    </div>
                                    <h2 class="text-white mt-4 fw-light">Welcome to a <span class="font-weight-medium">Fast & Responsive</span> Web App</h2>
                                    <p class="op-5 text-white fs-4 mt-4">Where all admins activities can be made.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xl-9 d-flex align-items-center justify-content-center">
                        <div class="row justify-content-center w-100 mt-4 mt-lg-0">
                            <div class="col-lg-6 col-xl-3 col-md-7">

                                <div class="card" id="Resetform">
                                    <div class="card-body">
                                        <h2>Recover Password</h2>
                                        <p class="text-muted fs-4">Enter your Email and instructions will be sent to you!</p>
                                        <Form onSubmit={handleForgot} ref={form} class="form-horizontal mt-4 pt-4 needs-validation" >
                                            {!successful && (
                                            <div class="form-floating mb-3">

                                             <Input type="text" className="form-control form-input-bg" id="tb-email" placeholder="name@example.com" name="email" value={email} onChange={onChangeEmail} validations={[required, validEmail]} />

                                                <div class="invalid-feedback">
                                                  Email is required
                                                </div>

                                                <div className="d-flex align-items-stretch button-group mt-4 pt-2">
                                                <button className="btn btn-info btn-lg px-4">Submit</button>
                                                <a href="javascript:void(0)" id="to-login" class="btn btn-lg btn-light-secondary text-secondary font-weight-medium"onClick={handleReset}>Cancel</a> 
                                            </div>
                                           </div>

                                            )}

                                            {message && (
                                                <div className="form-group">
                                                    <div
                                                        className={
                                                            successful ? "alert alert-success" : "alert alert-danger"
                                                        }
                                                        role="alert"
                                                    >
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
};

export default Forgot;