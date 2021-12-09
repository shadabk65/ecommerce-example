import React , {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Form, Button ,Row, Col} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {Login} from '../redux/actions/UserActions'
import FormContainer from '../components/FormContainer'



const LoginScreen = ({location, history}) => {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1]: '/'
   
   const userLogin = useSelector(state=>state.userLogin)
   const {error,loading,userInfo} = userLogin

   useEffect (()=>{
   	 if (userInfo){
   	 	history.push(redirect)
   	 }
   },[history,userInfo,redirect])


  const submitHandler = (e) =>{
  	e.preventDefault()
  	dispatch(Login(email,password))
  	  }


	return(
      <FormContainer>
        <h1 className="text-center mt-3 mb-3">Sign in </h1>

       {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler} className="sign_container">
          <Form.Group controlId='email'>
            <Form.Label className="text-dark"> Email Address </Form.Label>
            <Form.Control
             type='email'
             className='mb-3 primary_color text-white'
             placeholder='Enter Email'
             value ={email}
             onChange={(e)=>setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

           <Form.Group controlId='password'>
            <Form.Label className="text-dark"> Password </Form.Label>
            <Form.Control
             type='password'
             className='mb-3 primary_color text-white'
             placeholder='Enter password'
             value ={password}
             onChange={(e)=>setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="text-center">
            <Button type='submit' variant='primary'>
             Sign in 
            </Button>
          </Form.Group>

 
        <Row className="py-3 text-center">
          <Col>
            New user ? <Link to={redirect ? `/register?redirect=${redirect}`:'/register'}>
              Register
            </Link>
          </Col>
        </Row>


        </Form>

      </FormContainer>
	)
}


export default LoginScreen