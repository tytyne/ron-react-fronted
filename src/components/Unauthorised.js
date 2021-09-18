import React from "react";
import "../assets/dist/css/style.min.css"
class Unauthorised extends React.Component{
    render(){
        return(  <div class="error-box">
        <div class="error-body text-center">
            <h1 class="error-title">403</h1>
            <h3 class="text-uppercase error-subtitle">FORBIDDON ERROR!</h3>
            <p class="text-muted mt-4 mb-4">YOU DON'T HAVE PERMISSION TO ACCESS ON THIS SERVER.</p>
            <a href="/" class="btn btn-info btn-rounded waves-effect waves-light mb-5">Back login</a> </div>
    </div>)
    }

}
export default Unauthorised