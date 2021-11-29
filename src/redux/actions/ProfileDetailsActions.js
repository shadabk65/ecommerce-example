
import {
    USER_DETAILS_REQUEST , 
	USER_DETAILS_SUCCESS, 
	USER_DETAILS_FAIL

} from '../constants/CartConstant'
import axios from 'axios'

export const ProfileDetailsActions=(id) => async (dispatch, getState) =>{
  try{
      dispatch({type:USER_DETAILS_REQUEST})

      const{
        userLogin:{userInfo},
      } =getState()

      const config = {
      	 headers:{
      	 	'content-type':'application/json',
      	 	Authorization: `Bearer ${userInfo.token}`
      	 }
      }

      const {data} = await axios.get(`http://127.0.0.1:8000/api/users/${id}`,
         config
      	)

      dispatch({
      	type:USER_DETAILS_SUCCESS,
      	payload:data
      })


  }catch(error){
     dispatch({
     	type:USER_DETAILS_FAIL,
     	payload: error.response && error.response.data.message
      ?error.response.data.message
      :error.message,
     })
  }
}

