import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setAuthorize}) => {
  const navigate = useNavigate();
  const loginUser = (event,)=>{
    event.preventDefault();

    setAuthorize(true);
    navigate('/')
  }

  return (
    <Container className='pt-3'>
        <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="ID@email.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="자동로그인" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage
