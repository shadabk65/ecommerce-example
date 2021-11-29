

import {
    USER_DETAILS_REQUEST , 
	USER_DETAILS_SUCCESS, 
	USER_DETAILS_FAIL

} from '../constants/CartConstant'



export const ProfileDetailsReducers = (state = {user:{}}, action)=>{
switch(action.type){
	case USER_DETAILS_REQUEST:
	   return {...state, loading:true, products:[]}

	case USER_DETAILS_SUCCESS:
	   return {loading:false, userInfo:action.payload}

	case USER_DETAILS_FAIL:
	   return {loading:false, error:action.payload}


	 default:
	    return state
 }

}