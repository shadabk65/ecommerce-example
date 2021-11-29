import React , {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Form, Button ,Row, Col} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {RegisterActions} from '../redux/actions/LoginActions'
import FormContainer from '../components/FormContainer'



const RegisterScreen = ({location, history}) => {
    
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmpassword, setConfirmpassword]=useState('')
    const [message, setMessage]=useState('')

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1]: '/'
   
   const userRegister = useSelector(state=>state.userRegister)
   const {error,loading,userInfo} = userRegister

   useEffect (()=>{
     if (userInfo){
      history.push(redirect)
     }
   },[history,userInfo,redirect])


  const submitHandler = (e) =>{
    e.preventDefault()
    if (password != confirmpassword){
      setMessage("password do no match")
    }else{
          dispatch(RegisterActions(name,email,password))

    }
      }


  return(
      <FormContainer>
        <h1 className="text-center mt-3 mb-3">Sign in </h1>
        {message && <Message variant='danger'>{error}</Message>}
       {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler} className="sign_container">
           <Form.Group controlId='name'>
            <Form.Label className="text-dark"> Name </Form.Label>
            <Form.Control
             type='name'
             className='mb-3 primary_color text-white'
             placeholder='Enter name'
             value ={name}
             onChange={(e)=>setName(e.target.value)}
            ></Form.Control>
          </Form.Group>


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



           <Form.Group controlId='confirmpassword'>
            <Form.Label className="text-dark"> Password </Form.Label>
            <Form.Control
             type='password'
             className='mb-3 primary_color text-white'
             placeholder='confirm password'
             value ={confirmpassword}
             onChange={(e)=>setConfirmpassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="text-center">
            <Button type='submit' variant='primary'>
             Register
            </Button>
          </Form.Group>

 
        <Row className="py-3 text-center">
          <Col>
          having account ? <Link to={redirect ? `/register?redirect=${redirect}`:'/login'}>
              sign In
            </Link>
          </Col>
        </Row>


        </Form>

      </FormContainer>
  )
}


export default RegisterScreen