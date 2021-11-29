import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducers, productDetailReducer } from './reducers/productReducers'
import { CartReducer} from './reducers/CartReducers'
import { LoginReducers, RegisterReducers} from './reducers/LoginReducers'
import {ProfileDetailsReducers} from './reducers/ProfileDetailsReducers'


const reducer= combineReducers({
	productList: productListReducers,
	productDetails:productDetailReducer,
	cart: CartReducer,
	userLogin: LoginReducers,
	userRegister :RegisterReducers,
	userProfile : ProfileDetailsReducers
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