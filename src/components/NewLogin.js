import "../css/style.css";
import { Card, Form, Button,Alert } from "react-bootstrap"
import React, { useRef ,useState} from "react"
import {useAuth} from "../context/authContext"
function NewLogin() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
   async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
       await login(emailRef.current.value , passwordRef.current.value )
         }catch(e){
            setError('Failed to Login :' + e.message )
         }
         setLoading(false)

    }

    return (

        <div className="formBody">
        <div className="wrapper">
            <div className="title">Login</div>
            <div className="errorMessage"> {error && <Alert variant = 'danger'>{error}</Alert>} </div>

        <form onSubmit={handleSubmit}>

        <div class="field">
        <input type="email" ref={emailRef} required />
        <label>Email Address</label>
        </div>

        <div class="field">
        <input type="password" ref={passwordRef} required />
        <label>Password</label>
        </div>

        <div class="field">
            <input  disabled={loading}  className="Login" type="submit" value="Login" />
        </div>

        <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
        </div>

        </div>


    ) }

    export default NewLogin;