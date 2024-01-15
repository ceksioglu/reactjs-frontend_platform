import React, { useRef } from 'react'
import BreadCrumb from '../BreadCrumb'
import "./SignUp.css"
import {Form, Button, Card, Container} from 'react-bootstrap'
import { signup } from "../../firebase";


function SignUpPage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    async function handleSignup() {
        await signup(emailRef.current.valueOf(), passwordRef.current.valueOf())
    }

    return (
    <div>
      <BreadCrumb breadCrumb="Sign Up"/>
      <div>
        <Card className="signup-card">
            <Card.Body>
                <h2 className='text-center mb-4'>Kayıt Ol</h2>
                <Container className='d-flex align-items-center justify-content-center' style={{maxWidth:"450px"}}>
                <Form onSubmit={handleSignup}>
                    <Form.Group className="w-100 mb-3" controlId="formGroupEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" ref={emailRef} reqıired />
                    </Form.Group>
                    <Form.Group className="w-100 mb-3" controlId="formGroupPassword">
                        <Form.Label>Şifre:</Form.Label>
                        <Form.Control type="password" placeholder="Şifre min. 6 haneli olmak zorundadır." ref={passwordRef} reqıired />
                    </Form.Group>
                    <Form.Group className="w-100 mb-3" controlId="formGroupPasswordConfirm">
                        <Form.Label>Şifre Tekrar:</Form.Label>
                        <Form.Control type="password" placeholder="Şifrenizi doğru girdiğinizden emin olun." ref={passwordConfirmRef} reqıired />
                    </Form.Group>
                    <Button className="w-100 h-25 mt-3" type="submit">Kayıt Ol!</Button>
                    <div className='text-lg-start'>
                        <p>Zaten hesabınız var mı?</p> <a href="/sign-in">Giriş</a>
                    </div>
                </Form>
                </Container>
            </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default SignUpPage
