import axios from "axios"
import { GET_LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./actionTypes"

export const loginrequest=()=>{
return {type:LOGIN_REQUEST}
}
export const postloginsuccess=()=>{
    return {type:POST_LOGIN_SUCCESS}
}

export const loginfailure=()=>{
    return {type:LOGIN_FAILURE}
}

export const getloginsucces=(payload)=>{
    return {type:GET_LOGIN_SUCCESS,payload}
}

//post
export const logintry=(ob)=>async(dispatch)=>{
    dispatch(loginrequest)
    return axios.post(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`,ob)
    .then((res)=>{
        dispatch(postloginsuccess(ob))
    })
    .catch((err)=>{
        dispatch(loginfailure())
    })
}