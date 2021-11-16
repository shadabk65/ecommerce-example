import { CART_ADD_ITEM , CART_REMOVE_ITEM } from '../constants/CartConstant'
import axios from 'axios'

export const addToCart=(id , qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)      
   dispatch({
   	type:CART_ADD_ITEM,
   	payload:{
   		 product: data.id,
   		 name : data.name,
   		 image : data.image,
   		 price : data.price,
   		 countInStock : data.countInStock,
   		 qty
   	}   
   })   

  localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem))

}

export const removeFromCart = (id) => (dispatch, getState) =>{
	dispatch({
		type:CART_REMOVE_ITEM,
		payload : id,
	})
    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem))

}
