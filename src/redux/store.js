import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducers, productDetailReducer } from './reducers/productReducers'
import { CartReducer} from './reducers/CartReducers'


const reducer= combineReducers({
	productList: productListReducers,
	productDetails:productDetailReducer,
	cart: CartReducer,
})

const cartItemFromStorage = localStorage.getItem('cartItem')? 
  JSON.parse(localStorage.getItem('cartItem')):[]



const initialState = {
	cart:{cartItem : cartItemFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store