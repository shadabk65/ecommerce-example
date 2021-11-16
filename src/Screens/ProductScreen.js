import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import {ProductsDetails} from '../redux/actions/productActions'
import {useDispatch , useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = ({match, history}) => {

   const [qty, setQty]=useState(1)


    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {product , loading , error} = productDetails
 



  useEffect(()=>{
    dispatch(ProductsDetails(match.params.id))
  },[dispatch, match])


const Handler =()=>{
 history.push(`/cart/${match.params.id}?qty=${qty}`)
}


    return (
         <div>

             <div className="product-button">  
             <Link to='/' className='btn btn-light my-3'> Go Back </Link>
               {loading ? <Loader />
             : error ? <Message variant='danger'>{error}</Message>
             :
            <div className="container my-10">
                <div className="row ">

                    <div className="col-md-6">
                        <Image src={product.image} alt={product.name} className="server-img" width={500}
                            height={400} />
                    </div>
                    <div className="col-md-3">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.discription}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <ListGroup variant='flush'>

                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col">Price:</div>
                                        <div className="col">
                                            <strong>${product.price}</strong>
                                        </div>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col">Status:</div>
                                        <div className="col">
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </div>
                                    </div>
                                </ListGroup.Item>

                                 {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <div className="row">
                                                        <div className="col">Qty</div>
                                                        <div className="col my-1 " xs='auto'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {

                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                            </div>
                                                        </div>
                                                </ListGroup.Item>
                                            )}

                                <ListGroup.Item>
                                    <Button 
                                    onClick = {Handler}
                                    className='btn-block' 
                                    disabled={product.countInStock == 0} 
                                    type='button'>
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                     </div>


                </div>
            </div> 
        }
      </div>


      </div>

    )
}

export default ProductScreen
