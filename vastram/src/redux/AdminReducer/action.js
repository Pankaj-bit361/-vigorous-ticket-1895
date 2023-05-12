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
    .get(`https://determined-gold-jaguar.cyclic.app/women`)
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
    .post("https://determined-gold-jaguar.cyclic.app/women", data)
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
      .post("https://determined-gold-jaguar.cyclic.app/men", data)
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
    return axios.delete(`https://determined-gold-jaguar.cyclic.app/women/${id}`).then(()=>{
        dispatch({type: DEL_PRODUCT_SUCCESS});
    }).catch(()=>{
        dispatch({type : PRODUCT_FAILURE});
    })
}


export const editProduct = (dataObj, id) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    
    //patch
     return axios.patch(`https://determined-gold-jaguar.cyclic.app/women/${id}`, dataObj).then(()=>{
        dispatch({type: EDIT_PRODUCT_SUCCESS})
     }).catch(()=>{
        dispatch({type: PRODUCT_FAILURE})
     })
  }