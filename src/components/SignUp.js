import "../css/style.css";
import { Card, Form, Button,Alert } from "react-bootstrap"
import React, { useRef ,useState} from "react"
import {useAuth} from "../context/authContext"

function SignUp() {
    return (

        
<div class="formBody">

    <div class="wrapper">
    <div class="title">Sign Up</div>
    <form action="#">
         <div class="field">
         <input type="email" placeholder="Email Address" required />
             </div>

             <div class="field">
             <input type="text" placeholder="Username" required />
             </div>

             <div class="field">
            <input  type="password" placeholder="Password" required />
            </div>

            <div class="field">
            <input  type="password" placeholder="Confirm Password" required />
          </div>

          <div class="field">
            <input class="Login" type="submit" value="Sign Up" />
          </div>
          <div class="signup-link">Have an account? <a href="#">Login now</a></div>
    </form>


    </div>


</div>


    )
}

export default SignUp;