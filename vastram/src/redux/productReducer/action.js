import axios from "axios"

import {DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST} from "./actiontypes"

export const productrequest=()=>{
    return {type:PRODUCT_REQUEST}
}


export const postsuccess=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}
export const productfailure=()=>{
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


// get
export const getproducts=(ob)=>async(dispatch)=>{

    dispatch(productrequest)
  return  axios.get(`http://vastram.pankajvashisht.xyz/men`,ob)
    .then((res)=>{
        dispatch(getsuccess(res.data))
    })
    .catch(()=>{
        dispatch(productfailure)
    })
    }

    // get
    export const getwomenproducts=(ob)=>async(dispatch)=>{

        dispatch(productrequest)
      return  axios.get(`http://vastram.pankajvashisht.xyz/women`,ob)
        .then((res)=>{
            dispatch(getsuccess(res.data))
        })
        .catch(()=>{
            dispatch(productfailure)
        })
        }

        // get
        export const getkidsproducts=(ob)=>async(dispatch)=>{

            dispatch(productrequest)
          return  axios.get(`http://vastram.pankajvashisht.xyz/kids`,ob)
            .then((res)=>{
                dispatch(getsuccess(res.data))
            })
            .catch(()=>{
                dispatch(productfailure)
            })
            }