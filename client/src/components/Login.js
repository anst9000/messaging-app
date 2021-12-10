import { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'


const Login = ({ onIdSubmit }) => {
  const idRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    onIdSubmit(idRef.current.value)
  }

  const createNewId = () => {
    onIdSubmit(uuidV4())
  }

  return (
    <Container className='align-items-center d-flex' style={{ backgroundColor: '#eeddee', height: '100vh' }}>
      <Form className='w-100' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button className="my-1" type="submit">Login</Button>
        <Button className="mx-2 my-1"  variant="secondary" onClick={createNewId}>Create a new ID</Button>
      </Form>
    </Container>
  )
}

export default Login
