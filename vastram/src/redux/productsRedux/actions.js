import axios from "axios";
import * as types from "./actionTypes";

// post
export const addShipping = (data) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .post("https://json-server-p3iz.onrender.com/shipping", data)
    .then(() => {
      // console.log(res);
      dispatch({ type: types.ADD_SHIPPING_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};

//get
export const getShipping = () => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .get("https://json-server-p3iz.onrender.com/shipping" )
    .then((res) => {
      console.log(res,"productredux");
      dispatch({ type: types.GET_SHIPPING_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};

// post
export const addPayment = (data) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .post("https://json-server-p3iz.onrender.com/cart2", data)
    .then(() => {
      // console.log(res);
      dispatch({ type: types.ADD_CART2_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
     
    });
};

// get
export const getPayment = () => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .get("https://json-server-p3iz.onrender.com/cart2" )
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_CART2_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};

