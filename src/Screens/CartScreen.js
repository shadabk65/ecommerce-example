import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Image, ListGroup, Button, Card, Form, Row, Col, Container} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {addToCart , removeFromCart} from '../redux/actions/CartActions'




function CartScreen({match, location, history}) {

   const productId = match.params.id
   const qty = location.search? Number(location.search.split('=')[1]) :1
	
   const dispatch= useDispatch()

   const cart = useSelector (state => state.cart)
   const {cartItem} = cart

   useEffect(()=>{
   	if(productId){
   		dispatch(addToCart(productId, qty))
   	}
   },[dispatch, productId, qty])
 
   const removeFromHandler =(id) =>{
     dispatch(removeFromCart(id))
   }

   const checkoutHandler = ()=>{
   	history.push('/login?redirect=shipping')
   }


	return(
		<Container>
		<Row>
          <Col md={8}>
            <h1 className='cartpage1'> Shopping Cart </h1>
            { cartItem.length === 0 ? (
                  <Message variant = 'info'> 
                    your cart is empty <Link to= '/'> go back </Link>
                  </Message>
                  ) : (
                <ListGroup variant = 'flush'>
                    {cartItem.map (item =>(
                       <ListGroup.Item key={item.product}>
                          <Row>
                            <Col md={2}>
                               <Image src={item.image} fluid rounded />
                            </Col>
                            <Col md={3}>
                             <Link to={`/product/${item.product}`} className="cartpage"> {item.name} </Link>
                            </Col>
                            <Col md ={2}>
                                ${item.price}
                            </Col>
                            <Col md={3}>
                                 <Form.Control
                                    as="select"
                                    value={item.qty}
                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value) ))}
                                  >
                                  {

                                  [...Array(item.countInStock).keys()].map((x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                     ))
                                   }

                              </Form.Control>
                            </Col>

                           <Col md={1}>
                               <Button type ='button' variant='light' onClick = {()=>removeFromHandler(item.product)} >
                                 <i className = 'fas fa-trash'> </i>
                               </Button>
                           </Col>

                          </Row>
                       </ListGroup.Item>      
                    ))}
                </ListGroup>

             )
         }
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                 <h2> Total ({cartItem.reduce((acc, item)=> acc+item.qty , 0)}) items </h2>
                   ${cartItem.reduce((acc, item)=> acc+item.qty*item.price, 0).toFixed(2)}
                </ListGroup.Item>      
               
              <ListGroup.Item>
                  <Button 
                   type='button'
                   className='btn-black'
                   disabled = {cartItem.length ===0}
                   onClick = {checkoutHandler}
                  >
                   Proceed To Checkout
                  </Button>
              </ListGroup.Item>


              </ListGroup>
            </Card>
          </Col>

		</Row>
     </Container>
	)
}

export default CartScreen
