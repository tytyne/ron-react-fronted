import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import {login} from "../../../actions/auth"
import "./custom.css"
import "./login.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {FaEye,FaEyeSlash} from "react-icons/fa"
import circleImage from "../../../assets/pictures/image.png"



const eye = <FaEye/>;
const closeEye=<FaEyeSlash/>

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

  const [visibility, setVisibility] = useState("password");
  const [closedIcon,setClosedIcon]=useState(eye)
  
  const { isLoggedIn } = useSelector(state => state.auth);
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

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
        return(
                
<div className="flex-container">
        <div className="flex-item-left">
            <div className="logo">
                <div>
                    <h4><img src={circleImage}/>RiseoNigeria</h4>
                </div>
             
                <div>
                    <h2>Welcome Admin</h2>
                    
                </div>
                
            </div>
          
        </div>
    <div className="flex-item-right">

        <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column">
                        <div id="login-box" >
                           
                            <Form onSubmit={handleLogin} ref={form} className="form-horizontal mt-4 pt-4 needs-validation" id="login-form">
                                <h4 className="text-left">Sign In</h4>
                                <div className="form-group">
                                    <label htmlFor="email" >Email Address</label>
                                   
                                    <Input type="email" className="form-control form-input-bg" id="tb-email" placeholder="name@example.com" name="email" value={email} onChange={onChangeEmail} validations={[required]} />
                                </div>
                                <label htmlFor="text-password">Password</label>
                      <div className="form-floating mb-3">
                        <div className="flex">
                        <Input  type={visibility} className="form-control form-input-bg" id="text-password" placeholder="*****" name="password" value={password} onChange={onChangePassword} validations={[required]} />
                        <i id = 'myEye' onClick={togglePasswordVisiblity}>{closedIcon}</i>
                      
                        </div>
                       
                
                       
                      </div>
                                <div class="form-group  text-right">
        
                                  
                                    <div className="d-flex align-items-stretch button-group mt-4 pt-2">

                        <button  className="btn btn-info btn-lg px-4 button " disabled={loading}>
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
                                    
                                </div>
                                <div id="forgot-link" class="text-left">
                                    <a href="#" >Forgot password?</a>
                                </div>

                            </Form>
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