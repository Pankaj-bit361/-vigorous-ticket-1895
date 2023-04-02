import {
  ADD_PRODUCT_SUCCESS,
  DEL_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case DEL_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case EDIT_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
