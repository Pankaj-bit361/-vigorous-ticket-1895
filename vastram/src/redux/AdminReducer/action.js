import axios from "axios";
import {
    DEL_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionType";

// get
export const getProduct = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`http://vastram.pankajvashisht.xyz/women`)
    .then((res) => {
      console.log(res);
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

// post
export const addProducts = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .post("http://vastram.pankajvashisht.xyz/women", data)
    .then(() => {
      dispatch({ type: PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

// post
export const addProductsMen = (data) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    return axios
      .post("http://vastram.pankajvashisht.xyz/men", data)
      .then(() => {
        dispatch({ type: PRODUCT_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  };


  //delete
export const delProduct = (id) =>(dispatch)=>{
    dispatch({type: PRODUCT_REQUEST});
    return axios.delete(`http://vastram.pankajvashisht.xyz/women/${id}`).then(()=>{
        dispatch({type: DEL_PRODUCT_SUCCESS});
    }).catch(()=>{
        dispatch({type : PRODUCT_FAILURE});
    })
}


export const editProduct = (dataObj, id) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    
    //patch
     return axios.patch(`http://vastram.pankajvashisht.xyz/women/${id}`, dataObj).then(()=>{
        dispatch({type: EDIT_PRODUCT_SUCCESS})
     }).catch(()=>{
        dispatch({type: PRODUCT_FAILURE})
     })
  }