
import { GET_LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./actionTypes";

const initstate={
    isAuth:false,
    isLoading:false,
    isError:false,
    Details:[]
}

export const reducer=(state=initstate,{type,payload})=>{
switch(type){
 case LOGIN_REQUEST:{
    return {
        ...state,isLoading:true
    }
 }
 case POST_LOGIN_SUCCESS:{
    return {
        ...state,isLoading:false,isAuth:true
    }
 }
 case LOGIN_FAILURE:{
    return {
        ...state,isLoading:false,isAuth:false,isError:true
    }
 }
 case GET_LOGIN_SUCCESS:{
    return {
        state,isLoading:false,Deatils:payload,isAuth:false
    }
 }
 default:{
    return state
 }
}

}