import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducers, productDetailReducer } from './reducers/productReducers'
import { CartReducer} from './reducers/CartReducers'
import { userLoginReducers, userRegisterReducers, userDetailsReducers, userUpdateDetailReducers} from './reducers/userReducers'


const reducer= combineReducers({
	productList: productListReducers,
	productDetails: productDetailReducer,
	cart: CartReducer,
	userLogin: userLoginReducers,
	userRegister: userRegisterReducers,
	userDetails : userDetailsReducers,
	userUpdateProfile : userUpdateDetailReducers,
})

const cartItemFromStorage = localStorage.getItem('cartItem')? 
  JSON.parse(localStorage.getItem('cartItem')):[]

const userInfoFromStorage = localStorage.getItem('userInfo')? 
  JSON.parse(localStorage.getItem('userInfo')):null


const initialState = {
	cart:{cartItem : cartItemFromStorage},
	userLogin : {userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store