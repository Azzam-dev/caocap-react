 import "../css/App.css";
import React, { useRef ,useState} from "react"
import { Card, Form, Button,Alert } from "react-bootstrap"
import {useAuth} from "../context/authContext"
export default function Login() {
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
        < div>
            <Card id="authCard"  >
                <Card.Body   >
                    <h2 className="text-center mb=4"> Login </h2>
                    {error && <Alert variant = 'danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id = "email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" ref={passwordRef} required />
                        </Form.Group>
                       
                        <Button disabled={loading} className="w-100" type="submit"> Login </Button>

                        

                    </Form>
                </Card.Body>  

        </Card>
        </div>
        
        
        )

}