

import {   DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actiontypes"

export const postrequest=()=>{
    return {type:PRODUCT_REQUEST}
}

export const postsuccess=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}
export const postfailure=()=>{
    return {type:PRODUCT_FAILURE}
}
export const getsuccess=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}

}
export const patchsuccess=()=>{
    return {type:POST_PRODUCT_SUCCESS}
}
export const deletesuccess=()=>{
    return {type:DELETE_PRODUCT_SUCCESS}
}