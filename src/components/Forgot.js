import React from "react";
import "../assets/css/style.min.css"
import "../assets/css/sided.css"
class Forgot extends React.Component {
    render(){
        return(
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
                                        <form class="form-horizontal mt-4 pt-4 needs-validation" novalidate action="index.html">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control form-input-bg" id="tb-email" placeholder="name@example.com" required/>
                                                <label htmlFor="tb-email">Email</label>
                                                <div class="invalid-feedback">
                                                  Email is required
                                                </div>
                                            </div>
        
                                            <div class="d-flex align-items-stretch button-group">
                                            <button type="submit" class="btn btn-info btn-lg px-4">Submit</button>
                                            <a href="javascript:void(0)" id="to-login" class="btn btn-lg btn-light-secondary text-secondary font-weight-medium">Cancel</a>
                                        </div>
                                        </form>
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

}

export default Forgot