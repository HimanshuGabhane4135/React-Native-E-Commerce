import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WHISHLIST,
  ADD_USERNAME,
} from '../../Utils/constants/type';

export const addToCart = product => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = product => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
};

export const addToWishList = product => dispatch => {
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: product,
  });
};

export const removeFromWishList = product => dispatch => {
  dispatch({
    type: REMOVE_FROM_WHISHLIST,
    payload: product,
  });
};

export const addUsername = username => dispatch => {
  dispatch({
    type: ADD_USERNAME,
    payload: username,
  });
};
