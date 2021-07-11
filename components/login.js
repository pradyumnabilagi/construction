import React, {useState, useEffect} from 'react'
import {Row, Col, Form, FormGroup, Input, Label, Button} from "reactstrap"
import axios from "axios"


export default function login(props) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async(e)=>{
        e.preventDefault()
        let data = {user,password}
        props.setParetUser(user)
        // write code to submit api
        let url = `/api/login`
        let res= await axios.post(url, data);
        console.log(res)
    }

    useEffect(() => {
        props.setParetUser(user)
        return () => {
        }
    }, [user])


    
    useEffect(() => {
   console.log(props)

        return () => {
        }
    }, [])


    return (
        <>
            <h1>{props.name}</h1>
            {props.data.userId}
           
            <Row>
                <Col sm={12} md={{size:6, offset:3}} lg={{size:4,  offset:4}} >
                    <Form onSubmit={e=>submitHandler(e)}>
                        <FormGroup>
                            <Label for="user">User</Label>
                            <Input type="text" required={true} onChange={e=>setUser(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" required={true} onChange={e=>setPassword(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Button>Login</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>

        </>
        
    )
}
