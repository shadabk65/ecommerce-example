import React , {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Form, Button ,Container,Row, Col} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {ProfileDetailsActions} from '../redux/actions/ProfileDetailsActions'



const ProfileScreen = ({history}) => {
    
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmpassword, setConfirmpassword]=useState('')
    const [message, setMessage]=useState('')

  
    const dispatch = useDispatch()
  
   
   const userDetails = useSelector(state=>state.userProfile)
   const {error,loading,user} = userDetails

const userLogin = useSelector(state=>state.userLogin)
   const {userInfo} = userLogin

   useEffect (()=>{
     if (!userInfo){
      history.push('/login')
     }else{
      if(!user || user.name){
        dispatch(ProfileDetailsActions('profile'))
      }else{
        setName(user.name)
        setEmail(user.mail)
      }
     }
   },[history,userInfo,dispatch,history])


  const submitHandler = (e) =>{
    e.preventDefault()
    if (password != confirmpassword){
      setMessage("password do no match")
    }else{
          

    }
     }


  return(
    <Container>
      <Row>
       <Col md={4}>
       
        <h1 className="text-center mt-3 mb-3">Update </h1>
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
             update
            </Button>
          </Form.Group>

 

        </Form>
        </Col>
       <Col md ={8}>
          my order
       </Col>
      </Row>
      </Container>
  )
}

export default ProfileScreen