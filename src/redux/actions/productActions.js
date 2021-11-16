import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,

  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL
} from '../constants/productConstant'
import axios from 'axios'

export const listProducts=() => async (dispatch) =>{
  try{
      dispatch({type:PRODUCT_LIST_REQUEST})
      const {data} = await axios.get(`http://127.0.0.1:8000/api/products/`)
      dispatch({
      	type:PRODUCT_LIST_SUCCESS,
      	payload:data
      })
  }catch(error){
     dispatch({
     	type:PRODUCT_LIST_FAIL,
     	payload: error.response && error.response.data.message
      ?error.response.data.message
      :error.message,
     })
  }
}

export const ProductsDetails=(id) => async (dispatch) =>{
  try{
      dispatch({type:PRODUCT_DETAIL_REQUEST})
 const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)      
 dispatch({
        type:PRODUCT_DETAIL_SUCCESS,
        payload:data
      })
  }catch(error){
     dispatch({
      type:PRODUCT_DETAIL_FAIL,
      payload: error.response && error.response.data.message
      ?error.response.data.message
      :error.message,
     })
  }
}

