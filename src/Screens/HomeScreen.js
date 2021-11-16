import React, {useEffect, useState} from 'react'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {useDispatch , useSelector} from 'react-redux'
import {listProducts} from '../redux/actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {products , loading , error} = productList
 
  useEffect(()=>{
      dispatch(listProducts())
  },[dispatch])

    return (
        <div className="container">
            <h1 className="my-4">Latest Product</h1>
            {loading ? <Loader />
             : error ? <Message variant='danger'>{error}</Message>
             :
            <div className="row">
                {products.map(product=>(
                    <div className="col-sm-12 col-md-3">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        }
        </div>
    )
}

export default HomeScreen
