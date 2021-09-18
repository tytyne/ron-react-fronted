import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {reset} from "../actions/resetPassword"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../assets/dist/css/style.min.css"
import "../assets/dist/css/custom.css"
import { useParams} from "react-router";

import {FaEye,FaEyeSlash} from "react-icons/fa"


const eye = <FaEye/>;
const closeEye=<FaEyeSlash/>
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}
const Reset = (props) => {
    const form = useRef()
    const checkBtn = useRef()
    const token=useParams()
    const tokenResponse=(token.slug)
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [successful, setSuccessful] = useState(false)
    const [visibility, setVisibility] = useState("password");
    const [visibility2, setVisibility2] = useState("password");
    const [closedIcon,setClosedIcon]=useState(eye)
    const [closedIcon2,setClosedIcon2]=useState(eye)
    const { message } = useSelector(state => state.message);
    
  const dispatch = useDispatch();


    const togglePasswordVisiblity = () => {
        if (visibility == "password") {
          setVisibility("text");
          setClosedIcon(closeEye)
        } else {
          setVisibility("password");
          setClosedIcon(eye)

        }
      };
       const togglePasswordVisiblity2 = () => {
        if (visibility2 == "password") {
          setVisibility2("text");
          setClosedIcon2(closeEye)
        } else {
          setVisibility2("password");
          setClosedIcon2(eye)
        }
      };

    const onChangePassword = (e) => {
        const Password = e.target.value
        setPassword(Password)
    }
    const onChangeConfirmPassword = (e) => {
        const ConfirmPassword = e.target.value
        setConfirmPassword(ConfirmPassword)
    }
    const handleReset = (e) => {

        e.preventDefault()
        setSuccessful(false)
        form.current.validateAll()
      
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(reset(Password,ConfirmPassword,tokenResponse))
              .then(() => {
                setSuccessful(true)
                setTimeout(()=>{
                    window.location="../"
                },2000)
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
                                        <p class="text-muted fs-4">Enter your new password</p>
                                        <Form onSubmit={handleReset} ref={form} className="form-horizontal mt-4 pt-4 needs-validation">
                                            <label htmlFor="tb-email">Password</label>
                                            <div className="form-floating mb-3">

                                                <Input type={visibility} className="form-control form-input-bg" id="text-password" placeholder="*****" name="Password" value={Password} onChange={onChangePassword} validations={[required]}/>
                                                <i id = 'myEye' onClick={togglePasswordVisiblity}>{closedIcon}</i>
                                               
                                                <div className="invalid-feedback">
                                                    password is required
                                                </div>
                                            </div>
                                            <label htmlFor="text-password">Confirm Password</label>
                                            <div className="form-floating mb-3">

                                                <Input type={visibility2} className="form-control form-input-bg" id="text-password" placeholder="*****" name="ConfirmPassword" value={ConfirmPassword} onChange={onChangeConfirmPassword} validations={[required]} />
                                                <i id = 'myEye' onClick={togglePasswordVisiblity2}>{closedIcon2}</i>
                                               
                                                <div className="invalid-feedback">
                                                    confirm Password
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center mb-3">


                                            </div>
                                            <div className="d-flex align-items-stretch button-group mt-4 pt-2">

                                                <button className="btn btn-info btn-lg px-4">Reset Password</button>
                                            </div>
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

export default Reset;